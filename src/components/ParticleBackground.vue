<template>
  <div class="particles-container" ref="containerRef">
    <div
        v-for="particle in particles"
        :key="particle.id"
        class="particle"
        :class="particle.type"
        :style="getParticleStyle(particle)"
    />
  </div>
</template>

<script lang="ts" setup>
import {onBeforeUnmount, onMounted, ref} from 'vue'

/**
 * 粒子类型
 */
type ParticleType = 'pixel' | 'block' | 'diamond' | 'cross'

/**
 * 粒子接口
 */
interface Particle {
  id: number
  type: ParticleType
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  rotation: number
  rotationSpeed: number
  opacity: number
  color: string
  pulse: boolean
}

/**
 * 颜色配置
 */
const colors = [
  '#00F5FF', // neon-cyan
  '#FF10F0', // neon-pink
  '#B829F7', // neon-purple
  '#39FF14', // neon-green
  '#4AEDD7', // mc-diamond
  '#F4D142', // mc-gold
]

/**
 * 粒子容器引用
 */
const containerRef = ref<HTMLElement | null>(null)

/**
 * 粒子列表
 */
const particles = ref<Particle[]>([])

/**
 * 动画帧ID
 */
let animationFrameId: number | null = null

/**
 * 粒子计数器
 */
let particleIdCounter = 0

/**
 * 最大粒子数
 */
const MAX_PARTICLES = 25

/**
 * 创建粒子
 */
const createParticle = (): Particle => {
  const type: ParticleType = Math.random() > 0.6 ? 'block' : Math.random() > 0.7 ? 'diamond' : 'pixel'

  return {
    id: particleIdCounter++,
    type,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: type === 'block' ? 12 + Math.random() * 8 : type === 'diamond' ? 8 + Math.random() * 6 : 4 + Math.random() * 4,
    speedX: (Math.random() - 0.5) * 0.02,
    speedY: type === 'pixel' ? -0.03 - Math.random() * 0.02 : (Math.random() - 0.5) * 0.015,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 0.5,
    opacity: 0.3 + Math.random() * 0.4,
    color: colors[Math.floor(Math.random() * colors.length)],
    pulse: Math.random() > 0.7,
  }
}

/**
 * 初始化粒子
 */
const initParticles = (): void => {
  particles.value = Array.from({length: MAX_PARTICLES}, createParticle)
}

/**
 * 更新粒子位置
 */
const updateParticles = (): void => {
  particles.value = particles.value.map((particle) => {
    let newX = particle.x + particle.speedX
    let newY = particle.y + particle.speedY

    // 边界处理
    if (newX < -5) newX = 105
    if (newX > 105) newX = -5
    if (newY < -5) newY = 105
    if (newY > 105) newY = -5

    return {
      ...particle,
      x: newX,
      y: newY,
      rotation: particle.rotation + particle.rotationSpeed,
    }
  })

  animationFrameId = requestAnimationFrame(updateParticles)
}

/**
 * 获取粒子样式
 */
const getParticleStyle = (particle: Particle): Record<string, string> => {
  const baseStyle: Record<string, string> = {
    left: `${particle.x}%`,
    top: `${particle.y}%`,
    width: `${particle.size}px`,
    height: `${particle.size}px`,
    opacity: String(particle.opacity),
    '--particle-color': particle.color,
    transform: `rotate(${particle.rotation}deg)`,
  }

  if (particle.pulse) {
    baseStyle.animation = `pixel-flicker ${2 + Math.random() * 2}s ease-in-out infinite`
  }

  return baseStyle
}

/**
 * 监听鼠标移动，创建交互效果
 */
const handleMouseMove = (e: MouseEvent): void => {
  if (!containerRef.value || Math.random() > 0.1) return

  const rect = containerRef.value.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100

  // 偶尔在鼠标附近创建新的粒子
  if (particles.value.length < MAX_PARTICLES + 5) {
    const newParticle: Particle = {
      ...createParticle(),
      x: x + (Math.random() - 0.5) * 10,
      y: y + (Math.random() - 0.5) * 10,
      opacity: 0.6,
    }
    particles.value.push(newParticle)

    // 清理多余粒子
    if (particles.value.length > MAX_PARTICLES) {
      particles.value.shift()
    }
  }
}

onMounted(() => {
  initParticles()
  updateParticles()
  window.addEventListener('mousemove', handleMouseMove)
})

onBeforeUnmount(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  background: radial-gradient(ellipse at 20% 80%, rgba(0, 245, 255, 0.03) 0%, transparent 50%),
  radial-gradient(ellipse at 80% 20%, rgba(184, 41, 247, 0.03) 0%, transparent 50%),
  radial-gradient(ellipse at 50% 50%, rgba(57, 255, 20, 0.02) 0%, transparent 70%);
}

.particle {
  position: absolute;
  pointer-events: none;
  will-change: transform, opacity;
}

.particle.pixel {
  background: var(--particle-color);
  box-shadow: 0 0 10px var(--particle-color), 0 0 20px var(--particle-color);
  border-radius: 1px;
}

.particle.block {
  border: 2px solid var(--particle-color);
  background: transparent;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5),
  0 0 10px var(--particle-color);
  border-radius: 2px;
}

.particle.diamond {
  background: var(--particle-color);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  box-shadow: 0 0 15px var(--particle-color);
}

/* 浮动动画 */
@keyframes float-particle {
  0%, 100% {
    transform: translateY(0) rotate(var(--rotation, 0deg));
  }
  50% {
    transform: translateY(-20px) rotate(calc(var(--rotation, 0deg) + 180deg));
  }
}

/* 响应式：减少粒子 */
@media (max-width: 768px) {
  .particles-container {
    display: none;
  }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .particle {
    animation: none !important;
  }
}
</style>
