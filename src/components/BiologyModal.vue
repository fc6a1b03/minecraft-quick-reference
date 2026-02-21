<template>
  <n-modal
      :show="show" size="huge" :bordered="false"
      @update:show="$emit('update:show', $event)"
      preset="card" class="biology-modal game-modal"
  >
    <template #header>
      <div class="mob-detail-header">
        <div class="mob-detail-badge">{{ data.category }}</div>
        <div class="mob-detail-title">{{ data.name }}</div>
        <div class="title-underline">
          <span class="underline-left"></span>
          <span class="underline-center">◆</span>
          <span class="underline-right"></span>
        </div>
      </div>
    </template>
    <div class="mob-detail-content">
      <div class="mob-detail-image-wrapper" v-if="data.image">
        <div class="mob-detail-image">
          <img :src="data.image" :alt="data.name"/>
        </div>
      </div>
      <div class="mob-detail-description" v-html="data.description"></div>
      <div class="mob-detail-link" v-if="data.link">
        <button class="game-btn btn-diamond" @click="openLink">
          <span class="btn-icon">🔗</span>
          <span class="btn-text">了解更多信息</span>
        </button>
      </div>
    </div>
  </n-modal>
</template>

<script lang="ts" setup>
import {NModal} from 'naive-ui'
import type {BiologyDataItem} from '@/types'

/**
 * 组件属性
 */
interface Props {
  /** 是否显示 */
  show: boolean
  /** 生物数据 */
  data: BiologyDataItem
}

/**
 * 组件事件
 */
interface Emits {
  /** 更新显示状态 */
  (e: 'update:show', value: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

/**
 * 打开链接
 */
const openLink = (): void => {
  if (props.data.link) {
    window.open(props.data.link, '_blank')
  }
}
</script>

<style scoped>
/* 模态框游戏风格增强 */
.game-modal {
  position: relative;
}

.game-modal :deep(.n-card) {
  background: linear-gradient(180deg, #1a1a24 0%, #121218 100%);
  border: 2px solid rgba(76, 201, 240, 0.3);
  border-radius: 16px;
  box-shadow: 0 0 40px rgba(0, 245, 255, 0.15),
  inset 0 1px 0 rgba(255, 255, 255, 0.05);
  overflow: hidden;
}

.game-modal :deep(.n-card-header) {
  border-bottom: 1px solid rgba(76, 201, 240, 0.2);
  padding-bottom: 16px;
}

/* 头部样式 */
.mob-detail-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.mob-detail-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  background: rgba(184, 41, 247, 0.15);
  border: 1px solid rgba(184, 41, 247, 0.4);
  border-radius: 20px;
  font-family: 'Rajdhani', sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: var(--secondary-color);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
  text-shadow: none;
}

.mob-detail-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--primary-color);
  font-family: 'Rajdhani', sans-serif;
  text-shadow: none;
  letter-spacing: 0.05em;
}

.title-underline {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.underline-left,
.underline-right {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--neon-cyan));
}

.underline-right {
  background: linear-gradient(90deg, var(--neon-cyan), transparent);
}

.underline-center {
  color: var(--primary-color);
  font-size: 10px;
  animation: pulse-diamond 2s ease-in-out infinite;
}

@keyframes pulse-diamond {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
    text-shadow: 0 0 5px rgba(0, 245, 255, 0.5);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.8);
    text-shadow: 0 0 15px rgba(0, 245, 255, 0.8);
  }
}

/* 图片区域 */
.mob-detail-image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 20px 0 24px;
}

.mob-detail-image {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 12px;
  background: linear-gradient(145deg, rgba(22, 22, 29, 0.9) 0%, rgba(13, 13, 18, 0.95) 100%);
  border: 2px solid rgba(76, 201, 240, 0.3);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.mob-detail-image:hover {
  border-color: rgba(76, 201, 240, 0.5);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
  transform: scale(1.05);
}

.mob-detail-image img {
  max-width: 85%;
  max-height: 85%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.mob-detail-image:hover img {
  transform: scale(1.1);
}

.image-scanline {
  position: absolute;
  inset: 0;
  background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(0, 245, 255, 0.1) 50%,
      transparent 100%
  );
  background-size: 100% 4px;
  pointer-events: none;
  opacity: 0.3;
}

/* 描述区域 */
.mob-detail-description {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-light);
  width: 100%;
  padding: 0 8px;
}

.mob-detail-description :deep(h3) {
  color: var(--primary-color);
  margin-top: 20px;
  margin-bottom: 12px;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  padding-left: 16px;
}

.mob-detail-description :deep(h3::before) {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--secondary-color);
}

.mob-detail-description :deep(ul) {
  padding-left: 20px;
  margin-bottom: 16px;
}

.mob-detail-description :deep(li) {
  margin-bottom: 8px;
  position: relative;
}

.mob-detail-description :deep(li::marker) {
  color: var(--primary-color);
}

/* 属性条 */
.mob-stats {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px 0;
  padding: 16px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  border: 1px solid rgba(0, 245, 255, 0.1);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.stat-icon {
  font-size: 16px;
  width: 24px;
  text-align: center;
}

.stat-bar {
  flex: 1;
  height: 10px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-fill {
  height: 100%;
  border-radius: 5px;
  transition: width 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
}

.stat-fill.health {
  background: linear-gradient(90deg, #ef4444, #f87171);
  box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
}

.stat-fill.attack {
  background: linear-gradient(90deg, #f59e0b, #fbbf24);
  box-shadow: 0 0 10px rgba(245, 158, 11, 0.5);
}

.stat-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3), transparent);
  border-radius: 5px 5px 0 0;
}

/* 链接按钮 */
.mob-detail-link {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 245, 255, 0.2);
  width: 100%;
  text-align: center;
}

.game-btn {
  position: relative;
  padding: 14px 28px;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: white;
  background: linear-gradient(135deg, rgba(0, 245, 255, 0.15) 0%, rgba(184, 41, 247, 0.15) 100%);
  border: 2px solid rgba(0, 245, 255, 0.4);
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 20px rgba(0, 245, 255, 0.15);
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.game-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 245, 255, 0.3),
      transparent
  );
  transition: left 0.5s ease;
}

.game-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0, 245, 255, 0.3);
  border-color: var(--neon-cyan);
}

.game-btn:hover::before {
  left: 100%;
}

.game-btn:active {
  transform: translateY(0);
}

.btn-diamond {
  background: linear-gradient(145deg, var(--primary-hover-color) 0%, var(--secondary-color) 100%);
}

.btn-diamond:hover {
  background: linear-gradient(145deg, var(--primary-color) 0%, var(--primary-hover-color) 100%);
  box-shadow: 0 4px 12px rgba(76, 201, 240, 0.4);
}

.btn-icon {
  font-size: 16px;
}

/* 模态框进入动画 */
:global(.n-modal-mask) {
  backdrop-filter: blur(5px);
}

:global(.n-modal-body-wrapper) {
  animation: modal-enter 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes modal-enter {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* 响应式 */
@media (max-width: 768px) {
  .mob-detail-title {
    font-size: 24px;
  }

  .mob-detail-image {
    width: 120px;
    height: 120px;
  }

  .image-glow {
    width: 140px;
    height: 140px;
  }

  .mob-detail-description {
    font-size: 13px;
  }

  .mob-stats {
    padding: 12px;
  }

  .game-btn {
    padding: 12px 20px;
    font-size: 12px;
  }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .underline-center {
    animation: none;
  }

  .mob-detail-image {
    transition: none;
  }

  .stat-fill {
    transition: none;
  }

  :global(.n-modal-body-wrapper) {
    animation: none;
  }
}
</style>
