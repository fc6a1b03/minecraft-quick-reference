<template>
  <div class="click-effects-container" ref="containerRef">
    <slot/>
    <!-- 波纹效果 -->
    <div
        v-for="ripple in ripples"
        :key="ripple.id"
        class="ripple"
        :style="getRippleStyle(ripple)"
    />
    <!-- 粒子效果 -->
    <div
        v-for="particle in particles"
        :key="particle.id"
        class="click-particle"
        :style="getParticleStyle(particle)"
    />
  </div>
</template>

<script lang="ts" setup>
import {onBeforeUnmount, onMounted, ref} from 'vue'

/**
 * 波纹接口
 */
interface Ripple {
  id: number
  x: number
  y: number
  size: number
  opacity: number
}

/**
 * 粒子接口
 */
interface ClickParticle {
  id: number
  x: number
  y: number
  tx: number
  ty: number
  color: string
  size: number
}

/**
 * 容器引用
 */
const containerRef = ref<HTMLElement | null>(null)

/**
 * 波纹列表
 */
const ripples = ref<Ripple[]>([])

/**
 * 粒子列表
 */
const particles = ref<ClickParticle[]>([])

/**
 * ID计数器
 */
let rippleIdCounter = 0
let particleIdCounter = 0

/**
 * 颜色配置
 */
const colors = [
  '#00F5FF',
  '#FF10F0',
  '#B829F7',
  '#39FF14',
  '#4AEDD7',
  '#F4D142',
]

/**
 * 创建波纹
 */
const createRipple = (x: number, y: number): void => {
  const ripple: Ripple = {
    id: rippleIdCounter++,
    x,
    y,
    size: 0,
    opacity: 0.6,
  }
  ripples.value.push(ripple)

  // 动画更新
  const animate = (): void => {
    const index = ripples.value.findIndex((r) => r.id === ripple.id)
    if (index === -1) return

    const r = ripples.value[index]
    r.size += 8
    r.opacity -= 0.02

    if (r.opacity <= 0) {
      ripples.value.splice(index, 1)
    } else {
      requestAnimationFrame(animate)
    }
  }
  requestAnimationFrame(animate)
}

/**
 * 创建粒子爆炸
 */
const createParticles = (x: number, y: number): void => {
  const particleCount = 8 + Math.floor(Math.random() * 4)

  for (let i = 0; i < particleCount; i++) {
    const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5
    const distance = 30 + Math.random() * 30

    const particle: ClickParticle = {
      id: particleIdCounter++,
      x,
      y,
      tx: Math.cos(angle) * distance,
      ty: Math.sin(angle) * distance,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 4 + Math.random() * 4,
    }
    particles.value.push(particle)

    // 动画
    const animate = (): void => {
      const index = particles.value.findIndex((p) => p.id === particle.id)
      if (index === -1) return

      const p = particles.value[index]
      p.tx *= 0.95
      p.ty *= 0.95
      p.size *= 0.95

      if (p.size < 0.5) {
        particles.value.splice(index, 1)
      } else {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }
}

/**
 * 处理点击事件
 */
const handleClick = (e: MouseEvent): void => {
  if (!containerRef.value) return

  const rect = containerRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  createRipple(x, y)
  createParticles(x, y)
}

/**
 * 获取波纹样式
 */
const getRippleStyle = (ripple: Ripple): Record<string, string> => {
  return {
    left: `${ripple.x}px`,
    top: `${ripple.y}px`,
    width: `${ripple.size}px`,
    height: `${ripple.size}px`,
    opacity: String(ripple.opacity),
    transform: 'translate(-50%, -50%)',
  }
}

/**
 * 获取粒子样式
 */
const getParticleStyle = (particle: ClickParticle): Record<string, string> => {
  return {
    left: `${particle.x + particle.tx}px`,
    top: `${particle.y + particle.ty}px`,
    width: `${particle.size}px`,
    height: `${particle.size}px`,
    background: particle.color,
    boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
  }
}

onMounted(() => {
  if (containerRef.value) {
    containerRef.value.addEventListener('click', handleClick)
  }
})

onBeforeUnmount(() => {
  if (containerRef.value) {
    containerRef.value.removeEventListener('click', handleClick)
  }
})
</script>

<style scoped>
.click-effects-container {
  position: relative;
  display: inline-block;
}

/* 波纹效果 */
.ripple {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 245, 255, 0.4) 0%, transparent 70%);
  border: 1px solid rgba(0, 245, 255, 0.5);
  pointer-events: none;
  will-change: transform, opacity;
}

/* 点击粒子 */
.click-particle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  will-change: transform, opacity;
  transform: translate(-50%, -50%);
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .ripple,
  .click-particle {
    display: none;
  }
}
</style>
