<template>
  <div class="game-loader-container" v-if="visible">
    <div class="game-loader">
      <!-- 3D 旋转立方体 -->
      <div class="cube-wrapper">
        <div class="cube">
          <div class="cube-face front"></div>
          <div class="cube-face back"></div>
          <div class="cube-face right"></div>
          <div class="cube-face left"></div>
          <div class="cube-face top"></div>
          <div class="cube-face bottom"></div>
        </div>
      </div>
      <!-- 加载文字 -->
      <div class="loader-text">
        <span class="loading-word">LOADING</span>
        <span class="dots">
          <span class="dot">.</span>
          <span class="dot">.</span>
          <span class="dot">.</span>
        </span>
      </div>
      <!-- 进度条 -->
      <div class="loader-progress" v-if="showProgress">
        <div class="progress-track">
          <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
        </div>
        <div class="progress-text">{{ progress }}%</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onBeforeUnmount, onMounted, ref, watch} from 'vue'

/**
 * 组件属性
 */
interface Props {
  /** 是否显示 */
  visible: boolean
  /** 是否显示进度 */
  showProgress?: boolean
  /** 进度值 (0-100) */
  progress?: number
}

const props = withDefaults(defineProps<Props>(), {
  showProgress: false,
  progress: 0,
})

/**
 * 显示的文字
 */
const loadingText = ref('LOADING')

/**
 * 文字动画计时器
 */
let textTimer: ReturnType<typeof setInterval> | null = null

/**
 * 文字变化数组
 */
const textVariants = ['LOADING', 'LOADING.', 'LOADING..', 'LOADING...']

/**
 * 启动文字动画
 */
const startTextAnimation = (): void => {
  let index = 0
  textTimer = setInterval(() => {
    index = (index + 1) % textVariants.length
    loadingText.value = textVariants[index]
  }, 400)
}

/**
 * 停止文字动画
 */
const stopTextAnimation = (): void => {
  if (textTimer) {
    clearInterval(textTimer)
    textTimer = null
  }
}

watch(() => props.visible, (newVal) => {
  if (newVal) {
    startTextAnimation()
  } else {
    stopTextAnimation()
  }
})

onMounted(() => {
  if (props.visible) {
    startTextAnimation()
  }
})

onBeforeUnmount(() => {
  stopTextAnimation()
})
</script>

<style scoped>
.game-loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13, 13, 18, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.game-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

/* 3D 立方体 */
.cube-wrapper {
  width: 60px;
  height: 60px;
  perspective: 200px;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: cube-rotate 2s infinite ease-in-out;
}

.cube-face {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid var(--neon-cyan);
  background: rgba(0, 245, 255, 0.1);
  box-shadow: 0 0 15px rgba(0, 245, 255, 0.3), inset 0 0 15px rgba(0, 245, 255, 0.1);
}

.cube-face.front {
  transform: rotateY(0deg) translateZ(30px);
}

.cube-face.back {
  transform: rotateY(180deg) translateZ(30px);
}

.cube-face.right {
  transform: rotateY(90deg) translateZ(30px);
}

.cube-face.left {
  transform: rotateY(-90deg) translateZ(30px);
}

.cube-face.top {
  transform: rotateX(90deg) translateZ(30px);
}

.cube-face.bottom {
  transform: rotateX(-90deg) translateZ(30px);
}

@keyframes cube-rotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  25% {
    transform: rotateX(90deg) rotateY(0deg);
  }
  50% {
    transform: rotateX(90deg) rotateY(90deg);
  }
  75% {
    transform: rotateX(180deg) rotateY(90deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

/* 加载文字 */
.loader-text {
  font-family: 'Rajdhani', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--neon-cyan);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  text-shadow: 0 0 10px rgba(0, 245, 255, 0.5), 0 0 20px rgba(0, 245, 255, 0.3);
  display: flex;
  align-items: center;
  gap: 4px;
}

.loading-word {
  animation: text-glow 2s ease-in-out infinite alternate;
}

.dots {
  display: inline-flex;
  width: 30px;
}

.dot {
  opacity: 0;
  animation: dot-fade 1.4s infinite;
}

.dot:nth-child(1) {
  animation-delay: 0s;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes text-glow {
  from {
    text-shadow: 0 0 10px rgba(0, 245, 255, 0.5), 0 0 20px rgba(0, 245, 255, 0.3);
  }
  to {
    text-shadow: 0 0 20px rgba(0, 245, 255, 0.8), 0 0 30px rgba(0, 245, 255, 0.5), 0 0 40px rgba(0, 245, 255, 0.3);
  }
}

@keyframes dot-fade {
  0%, 60%, 100% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
}

/* 进度条 */
.loader-progress {
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.progress-track {
  width: 100%;
  height: 8px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgba(0, 245, 255, 0.2);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--neon-cyan), var(--neon-purple), var(--neon-cyan));
  background-size: 200% 100%;
  border-radius: 4px;
  transition: width 0.3s ease;
  animation: progress-shine 2s linear infinite;
  box-shadow: 0 0 10px rgba(0, 245, 255, 0.5);
}

.progress-text {
  font-family: 'Rajdhani', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: var(--neon-cyan);
  text-shadow: 0 0 5px rgba(0, 245, 255, 0.5);
}

@keyframes progress-shine {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* 响应式 */
@media (max-width: 768px) {
  .cube-wrapper {
    width: 40px;
    height: 40px;
  }

  .cube-face {
    width: 40px;
    height: 40px;
  }

  .cube-face.front {
    transform: rotateY(0deg) translateZ(20px);
  }

  .cube-face.back {
    transform: rotateY(180deg) translateZ(20px);
  }

  .cube-face.right {
    transform: rotateY(90deg) translateZ(20px);
  }

  .cube-face.left {
    transform: rotateY(-90deg) translateZ(20px);
  }

  .cube-face.top {
    transform: rotateX(90deg) translateZ(20px);
  }

  .cube-face.bottom {
    transform: rotateX(-90deg) translateZ(20px);
  }

  .loader-text {
    font-size: 18px;
  }

  .loader-progress {
    width: 160px;
  }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .cube {
    animation: none;
  }

  .loading-word,
  .dot,
  .progress-fill {
    animation: none;
  }
}
</style>
