<template>
  <div class="modern-card version-card" :class="{ 'downloading': downloadProgress.loading }">
    <div class="rarity-glow" :class="getRarityClass()"></div>
    <div class="version-icon">
      <div class="icon-container" :class="{ 'pulse': downloadProgress.loading }">
        <span class="icon-text">{{ getIconText() }}</span>
      </div>
    </div>
    <div class="modern-card-title">{{ name }}</div>
    <div v-if="version" class="modern-card-meta">
      <span class="meta-label">版本</span>
      <span class="meta-value">{{ version }}</span>
    </div>
    <div v-if="date && date !== '无' && date !== '--'" class="modern-card-meta">
      <span class="meta-label">日期</span>
      <span class="meta-value">{{ date }}</span>
    </div>
    <div class="card-footer">
      <template v-if="downloadProgress.loading">
        <div class="progress-wrapper">
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" :style="{ width: `${downloadProgress.percent}%` }">
              <div class="progress-glow"></div>
            </div>
          </div>
          <div class="progress-text">{{ downloadProgress.percent }}%</div>
        </div>
      </template>
      <button
          class="modern-card-btn download-btn"
          @click="handleClick"
          :disabled="downloadProgress.loading"
          :class="{ 'loading': downloadProgress.loading }"
      >
        <span class="btn-content">
          <span class="btn-icon" v-if="!downloadProgress.loading">⬇</span>
          <span class="btn-spinner" v-else></span>
          <span class="btn-label">{{ downloadProgress.loading ? '下载中' : '下载' }}</span>
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
  /** 名称 */
  name: string
  /** 版本 */
  version?: string
  /** 日期 */
  date?: string
}

/**
 * 组件事件
 */
interface Emits {
  /** 下载按钮点击 */
  (e: 'download', onProgress: (progress: DownloadProgressType) => void): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

/**
 * 下载进度状态
 */
const downloadProgress = reactive<DownloadProgressType>({
  loading: false,
  percent: 0,
  loaded: 0,
  total: 0
})

/**
 * 获取图标文字
 */
const getIconText = (): string => {
  if (props.name.toLowerCase().includes('minecraft')) return '⛏'
  if (props.name.toLowerCase().includes('fabric')) return '🧵'
  if (props.name.toLowerCase().includes('forge')) return '🔨'
  if (props.name.toLowerCase().includes('paper')) return '📄'
  return '📦'
}

/**
 * 获取稀有度类名
 */
const getRarityClass = (): string => {
  // 根据版本名称判断稀有度
  if (props.name.includes('1.21') || props.name.includes('1.20')) return 'rarity-epic'
  if (props.name.includes('1.19') || props.name.includes('1.18')) return 'rarity-rare'
  if (props.name.includes('1.17') || props.name.includes('1.16')) return 'rarity-uncommon'
  return 'rarity-common'
}

/**
 * 处理进度更新
 */
const onProgress = (progress: DownloadProgressType): void => {
  downloadProgress.loading = progress.loading
  downloadProgress.percent = progress.percent
  downloadProgress.loaded = progress.loaded
  downloadProgress.total = progress.total
}

/**
 * 处理下载点击
 */
const handleClick = (): void => {
  emit('download', onProgress)
}
</script>

<style scoped>
.version-card {
  position: relative;
  overflow: hidden;
}

/* 稀有度发光效果 */
.rarity-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.version-card:hover .rarity-glow {
  opacity: 1;
}

.rarity-glow.rarity-common {
  background: linear-gradient(90deg, transparent, #9CA3AF, transparent);
  box-shadow: 0 0 10px rgba(156, 163, 175, 0.5);
}

.rarity-glow.rarity-uncommon {
  background: linear-gradient(90deg, transparent, #22C55E, transparent);
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.6);
}

.rarity-glow.rarity-rare {
  background: linear-gradient(90deg, transparent, #3B82F6, transparent);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
}

.rarity-glow.rarity-epic {
  background: linear-gradient(90deg, transparent, #A855F7, var(--neon-cyan), #A855F7, transparent);
  background-size: 200% 100%;
  box-shadow: 0 0 25px rgba(168, 85, 247, 0.7);
  animation: epic-glow 2s linear infinite;
}

@keyframes epic-glow {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

/* 版本图标 */
.version-icon {
  margin-bottom: 12px;
}

.icon-container {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, rgba(184, 41, 247, 0.1) 100%);
  border: 2px solid rgba(0, 245, 255, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 15px rgba(0, 245, 255, 0.1);
}

.version-card:hover .icon-container {
  transform: scale(1.1) rotate(-5deg);
  border-color: rgba(0, 245, 255, 0.5);
  box-shadow: 0 6px 20px rgba(0, 245, 255, 0.2);
}

.icon-container.pulse {
  animation: icon-pulse 1s ease-in-out infinite;
  border-color: var(--primary-color);
  box-shadow: 0 0 20px rgba(76, 201, 240, 0.4);
}

@keyframes icon-pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* 元数据样式 */
.modern-card-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
}

.meta-label {
  color: rgba(255, 255, 255, 0.4);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: 'Rajdhani', sans-serif;
}

.meta-value {
  color: var(--text-light);
  font-weight: 500;
}

/* 卡片底部 */
.card-footer {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  width: 100%;
  flex-wrap: nowrap;
  overflow: hidden;
}

/* 进度条样式 - 与 BuildDetailCard 统一 */
.progress-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
}

.progress-bar-bg {
  flex: 1;
  height: 8px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgba(76, 201, 240, 0.1);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 4px;
  transition: width 0.3s ease;
  position: relative;
  box-shadow: 0 0 10px rgba(76, 201, 240, 0.3);
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
  0% { transform: translateX(-20px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(20px); opacity: 0; }
}

.progress-text {
  font-size: 12px;
  font-weight: 600;
  color: var(--primary-color);
  min-width: 40px;
  text-align: right;
  flex-shrink: 0;
}

/* 下载按钮 */
.download-btn {
  margin: 0;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn-icon {
  font-size: 12px;
  transition: transform 0.3s ease;
}

.download-btn:hover .btn-icon {
  transform: translateY(2px);
}

.btn-spinner {
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-spinner::before {
  content: '';
  width: 10px;
  height: 10px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-hover-color));
  animation: cube-rotate 1.5s infinite ease-in-out;
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(76, 201, 240, 0.5);
}

@keyframes cube-rotate {
  0% { transform: perspective(40px) rotateX(0deg) rotateY(0deg); }
  25% { transform: perspective(40px) rotateX(90deg) rotateY(0deg); }
  50% { transform: perspective(40px) rotateX(90deg) rotateY(90deg); }
  75% { transform: perspective(40px) rotateX(180deg) rotateY(90deg); }
  100% { transform: perspective(40px) rotateX(360deg) rotateY(180deg); }
}

.btn-label {
  font-size: 11px;
}

/* 下载中状态 */
.version-card.downloading {
  border-color: rgba(0, 245, 255, 0.4);
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.15);
}

/* 响应式 */
@media (max-width: 414px) {
  .card-footer {
    gap: 8px;
  }

  .modern-card-btn {
    font-size: 10px;
    padding: 6px 12px;
    height: 32px;
  }

  .icon-container {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .btn-label {
    font-size: 10px;
  }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .rarity-glow.rarity-epic,
  .icon-container.pulse {
    animation: none;
  }

  .btn-spinner::before {
    animation: none;
  }
}
</style>
