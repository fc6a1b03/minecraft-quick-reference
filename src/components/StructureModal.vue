<template>
  <n-modal
      :show="show" size="huge" :bordered="false"
      @update:show="$emit('update:show', $event)"
      preset="card" class="structure-modal game-modal"
  >
    <template #header>
      <div class="structure-detail-header">
        <div class="structure-detail-badge">{{ getCategoryText() }}</div>
        <div class="structure-detail-title">{{ data.name }}</div>
        <div class="title-underline">
          <span class="underline-left"></span>
          <span class="underline-center">◆</span>
          <span class="underline-right"></span>
        </div>
      </div>
    </template>
    <div class="structure-detail-content">
      <!-- 图片展示区域 -->
      <div class="structure-detail-image-section" v-if="allImages.length > 0">
        <!-- 主图 -->
        <div class="structure-detail-main-image">
          <img :src="currentImage" :alt="data.name" referrerpolicy="no-referrer"/>
        </div>
        <!-- 缩略图列表（多张图时显示） -->
        <div class="structure-thumbnail-list" v-if="allImages.length > 1">
          <div
              v-for="(img, index) in allImages"
              :key="index"
              class="structure-thumbnail"
              :class="{ active: currentImageIndex === index }"
              @click="selectImage(index)"
          >
            <img :src="img" :alt="`${data.name} - ${index + 1}`" referrerpolicy="no-referrer"/>
          </div>
        </div>
      </div>
      <div class="structure-detail-description" v-html="data.description"></div>
      <div class="structure-detail-link" v-if="data.link">
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
import type {StructureDataItem} from '@/types'
import {computed, ref, watch} from 'vue'

/**
 * 组件属性
 */
interface Props {
  /** 是否显示 */
  show: boolean
  /** 结构数据 */
  data: StructureDataItem
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

/** 当前图片索引 */
const currentImageIndex = ref(0)

/** 获取所有图片 */
const allImages = computed(() => {
  const images: string[] = []
  if (props.data.image) {
    images.push(props.data.image)
  }
  if (props.data.images && props.data.images.length > 0) {
    images.push(...props.data.images)
  }
  return images
})

/** 当前显示的图片 */
const currentImage = computed(() => allImages.value[currentImageIndex.value] || '')

/**
 * 选择图片
 * @param index 图片索引
 */
const selectImage = (index: number): void => {
  currentImageIndex.value = index
}

/**
 * 打开链接
 */
const openLink = (): void => {
  if (props.data.link) {
    window.open(props.data.link, '_blank')
  }
}

/**
 * 获取显示的分类文本
 * @returns 分类文本（多分类用 / 分隔）
 */
const getCategoryText = (): string => {
  if (Array.isArray(props.data.category)) {
    return props.data.category.join(' / ')
  }
  return props.data.category
}

/** 监听显示状态，重置图片索引 */
watch(() => props.show, (newVal) => {
  if (newVal) {
    currentImageIndex.value = 0
  }
})
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
.structure-detail-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.structure-detail-badge {
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

.structure-detail-title {
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

/* 图片展示区域 */
.structure-detail-image-section {
  margin: 20px 0 24px;
}

.structure-detail-main-image {
  width: 100%;
  max-width: 400px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 12px;
  background: linear-gradient(145deg, rgba(22, 22, 29, 0.9) 0%, rgba(13, 13, 18, 0.95) 100%);
  border: 2px solid rgba(76, 201, 240, 0.3);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.structure-detail-main-image img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.structure-detail-main-image:hover img {
  transform: scale(1.05);
}

/* 缩略图列表 */
.structure-thumbnail-list {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;
}

.structure-thumbnail {
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  background: linear-gradient(145deg, rgba(22, 22, 29, 0.9) 0%, rgba(13, 13, 18, 0.95) 100%);
  border: 2px solid rgba(76, 201, 240, 0.2);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.structure-thumbnail:hover {
  border-color: rgba(76, 201, 240, 0.5);
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 245, 255, 0.2);
}

.structure-thumbnail.active {
  border-color: var(--neon-cyan);
  box-shadow: 0 0 15px rgba(0, 245, 255, 0.4);
  transform: scale(1.05);
}

.structure-thumbnail img {
  max-width: 85%;
  max-height: 85%;
  object-fit: contain;
}

/* 描述区域 */
.structure-detail-description {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-light);
  width: 100%;
  padding: 0 8px;
}

.structure-detail-description :deep(h3) {
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

.structure-detail-description :deep(h3::before) {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--secondary-color);
}

.structure-detail-description :deep(ul) {
  padding-left: 20px;
  margin-bottom: 16px;
}

.structure-detail-description :deep(li) {
  margin-bottom: 8px;
  position: relative;
}

.structure-detail-description :deep(li::marker) {
  color: var(--primary-color);
}

/* 链接按钮 */
.structure-detail-link {
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
  .structure-detail-title {
    font-size: 24px;
  }

  .structure-detail-main-image {
    max-width: 100%;
    height: 160px;
  }

  .structure-thumbnail {
    width: 60px;
    height: 60px;
  }

  .structure-detail-description {
    font-size: 13px;
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

  .structure-detail-main-image img,
  .structure-thumbnail {
    transition: none;
  }

  :global(.n-modal-body-wrapper) {
    animation: none;
  }
}
</style>
