<template>
  <div class="pixel-card build-card" :class="{ 'downloading': progress.loading }">
    <div class="pixel-card-header">
      <span class="header-icon">⚙</span>
      <span>构建详情</span>
      <span class="header-badge" v-if="!disabled">就绪</span>
    </div>
    <div class="pixel-card-content">
      <slot name="content"/>
    </div>
    <div class="card-footer">
      <template v-if="progress.loading">
        <div class="progress-wrapper">
          <div class="progress-info">
            <span class="progress-status">下载中</span>
            <span class="progress-percent">{{ progress.percent }}%</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" :style="{ width: `${progress.percent}%` }">
              <div class="progress-glow"></div>
            </div>
          </div>
        </div>
      </template>
      <button
          class="pixel-button download-btn"
          @click="$emit('download', onProgress)"
          :disabled="disabled || progress.loading"
          :class="{ 'loading': progress.loading }"
      >
        <span class="btn-content">
          <span class="btn-icon" v-if="!progress.loading">⬇</span>
          <span class="btn-loader" v-else>
            <span class="loader-cube"></span>
          </span>
          <span class="btn-text">{{ progress.loading ? '下载中...' : '下载构建' }}</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from 'vue'
import type {DownloadProgress as DownloadProgressType} from '@/composables/useDownload'

/**
 * 组件属性
 */
interface Props {
  /** 是否禁用下载按钮 */
  disabled?: boolean
}

/**
 * 组件事件
 */
interface Emits {
  /** 下载按钮点击 */
  (e: 'download', onProgress: (progress: DownloadProgressType) => void): void
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

const emit = defineEmits<Emits>()

/**
 * 下载进度状态
 */
const progress = reactive<DownloadProgressType>({
  loading: false,
  percent: 0,
  loaded: 0,
  total: 0
})

/**
 * 进度回调
 */
const onProgress = (p: DownloadProgressType): void => {
  progress.loading = p.loading
  progress.percent = p.percent
  progress.loaded = p.loaded
  progress.total = p.total
}
</script>

<style scoped>
.build-card {
  position: relative;
  overflow: visible;
}

/* 头部样式 */
.pixel-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  color: var(--neon-cyan);
  margin-bottom: 16px;
  font-size: 18px;
  border-bottom: 2px solid rgba(0, 245, 255, 0.2);
  padding-bottom: 12px;
  font-family: 'Rajdhani', sans-serif;
  text-shadow: 0 0 5px rgba(0, 245, 255, 0.3);
}

.header-icon {
  font-size: 20px;
  animation: gear-spin 4s linear infinite;
}

@keyframes gear-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.header-badge {
  margin-left: auto;
  padding: 2px 10px;
  background: rgba(57, 255, 20, 0.15);
  border: 1px solid rgba(57, 255, 20, 0.4);
  border-radius: 12px;
  font-size: 10px;
  color: var(--neon-green);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* 内容区域 */
.pixel-card-content {
  font-size: 14px;
  color: var(--text-light);
  margin-bottom: 20px;
  line-height: 1.8;
}

.pixel-card-content :deep(strong) {
  color: var(--neon-cyan);
  font-weight: 600;
  font-family: 'Rajdhani', sans-serif;
}

.pixel-card-content :deep(div) {
  padding: 4px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.pixel-card-content :deep(div:last-child) {
  border-bottom: none;
}

/* 卡片底部 */
.card-footer {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 245, 255, 0.1);
}

/* 进度条样式 */
.progress-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Rajdhani', sans-serif;
}

.progress-status {
  font-size: 12px;
  color: var(--primary-color);
}

.progress-percent {
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-color);
}

.progress-bar-bg {
  height: 10px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid rgba(0, 245, 255, 0.1);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--neon-cyan), var(--neon-purple));
  border-radius: 5px;
  transition: width 0.3s ease;
  position: relative;
  box-shadow: 0 0 15px rgba(0, 245, 255, 0.4);
}

.progress-glow {
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5));
  animation: glow-move 1s linear infinite;
}

@keyframes glow-move {
  0% {
    transform: translateX(-20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(20px);
    opacity: 0;
  }
}

/* 下载按钮 */
.download-btn {
  margin: 0;
  flex-shrink: 0;
  min-width: 140px;
}

.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-icon {
  font-size: 14px;
  transition: transform 0.3s ease;
}

.download-btn:hover .btn-icon {
  transform: translateY(2px);
}

/* 按钮加载动画 - 旋转立方体 */
.btn-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  perspective: 40px;
}

.loader-cube {
  width: 10px;
  height: 10px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-hover-color));
  animation: cube-rotate 1.5s infinite ease-in-out;
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(76, 201, 240, 0.5);
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
    transform: rotateX(360deg) rotateY(180deg);
  }
}

.btn-text {
  font-size: 12px;
}

/* 像素按钮样式覆盖 */
.pixel-button {
  font-family: 'Rajdhani', 'Segoe UI', sans-serif;
  font-weight: 600;
  font-size: 13px;
  background: var(--gradient-primary);
  color: #ffffff;
  border: none;
  border-radius: var(--border-radius-small);
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  transition: all var(--transition-speed) ease;
  box-shadow: 0 2px 8px rgba(72, 149, 239, 0.3);
  position: relative;
  overflow: hidden;
}

.pixel-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 245, 255, 0.2),
      transparent
  );
  transition: left 0.5s ease;
}

.pixel-button:hover:not(:disabled) {
  background: linear-gradient(135deg, rgba(76, 201, 240, 0.3) 0%, rgba(58, 110, 165, 0.3) 100%);
  box-shadow: 0 4px 15px rgba(76, 201, 240, 0.25);
  border-color: var(--primary-color);
}

.pixel-button:hover:not(:disabled)::before {
  left: 100%;
}

.pixel-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: 0 2px 8px rgba(72, 149, 239, 0.3);
}

/* 下载中状态 */
.build-card.downloading {
  border-color: rgba(0, 245, 255, 0.4);
  box-shadow: 0 0 30px rgba(0, 245, 255, 0.15);
}

/* 响应式 */
@media (max-width: 768px) {
  .card-footer {
    flex-direction: column;
    gap: 12px;
  }

  .progress-wrapper {
    width: 100%;
  }

  .download-btn {
    width: 100%;
  }

  .pixel-card-header {
    font-size: 16px;
  }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .header-icon,
  .progress-glow,
  .loader-bar {
    animation: none;
  }

  .frame-corner {
    transition: none;
  }
}
</style>
