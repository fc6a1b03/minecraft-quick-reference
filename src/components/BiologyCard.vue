<template>
  <div class="modern-card biology-card" @click="$emit('click')">
    <!-- 稀有度发光 -->
    <div class="rarity-border" :class="getRarityClass()"></div>
    <!-- 图片区域 -->
    <div class="biology-image-wrapper" v-if="image">
      <div class="image-glow"></div>
      <div class="modern-card-image biology-image">
        <img :src="image" :alt="name"/>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="biology-content">
      <div class="modern-card-title biology-title">{{ name }}</div>
      <div class="category-badge" :class="getCategoryClass()">
        <span class="badge-icon">{{ getCategoryIcon() }}</span>
        <span class="badge-text">{{ category }}</span>
      </div>
      <div class="modern-card-description biology-description">{{ shortDescription }}</div>
      <!-- 查看详情提示 -->
      <div class="view-hint">
        <span class="hint-icon">👁</span>
        <span class="hint-text">点击查看详情</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/**
 * 组件属性
 */
interface Props {
  /** 名称 */
  name: string
  /** 分类 */
  category: string
  /** 图片地址 */
  image?: string
  /** 简短描述 */
  shortDescription: string
}

/**
 * 组件事件
 */
interface Emits {
  /** 卡片点击 */
  (e: 'click'): void
}


/**
 * 组件属性 - 解构以在函数中使用
 */
const props = defineProps<Props>()
const emit = defineEmits<Emits>()

/**
 * 获取分类类名
 * @param cat 分类名称
 */
const getCategoryClass = (cat?: string): string => {
  const categoryMap: Record<string, string> = {
    '被动型': 'passive',
    '友好型': 'friendly',
    '中立型': 'neutral',
    '攻击型': 'hostile',
    'Boss': 'boss',
  }
  return categoryMap[cat || props.category] || 'common'
}

/**
 * 获取稀有度类名
 */
const getRarityClass = (): string => {
  return 'rarity-' + getCategoryClass()
}

/**
 * 获取分类图标
 * @param cat 分类名称
 */
const getCategoryIcon = (cat?: string): string => {
  const iconMap: Record<string, string> = {
    '被动生物': '🌱',
    '友好生物': '🤝',
    '中立生物': '🤚',
    '敌对生物': '🥊',
    'Boss生物': '👑',
    '仅Java版': '☕',
    '仅基岩版和教育版': '🪨',
  }
  return iconMap[cat || props.category] || '❓'
}
</script>

<style scoped>
.biology-card {
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* 稀有度边框效果 */
.rarity-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.biology-card:hover .rarity-border {
  opacity: 1;
}

.rarity-border.passive {
  background: linear-gradient(90deg, transparent, #84CC16, transparent);
  box-shadow: 0 0 15px rgba(132, 204, 22, 0.6);
}

.rarity-border.friendly {
  background: linear-gradient(90deg, transparent, #22D3EE, transparent);
  box-shadow: 0 0 15px rgba(34, 211, 238, 0.6);
}

.rarity-border.neutral {
  background: linear-gradient(90deg, transparent, #FBBF24, transparent);
  box-shadow: 0 0 15px rgba(251, 191, 36, 0.6);
}

.rarity-border.hostile {
  background: linear-gradient(90deg, transparent, #F87171, transparent);
  box-shadow: 0 0 15px rgba(248, 113, 113, 0.6);
}

.rarity-border.boss {
  background: linear-gradient(90deg, transparent, #A855F7, #F59E0B, #A855F7, transparent);
  background-size: 200% 100%;
  box-shadow: 0 0 25px rgba(168, 85, 247, 0.8);
  animation: boss-glow 2s linear infinite;
}

@keyframes boss-glow {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

/* 图片区域 */
.biology-image-wrapper {
  position: relative;
  width: 100%;
  height: 120px;
  margin-bottom: 12px;
}

.image-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(0, 245, 255, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.biology-card:hover .image-glow {
  opacity: 1;
}

.biology-image {
  position: relative;
  z-index: 1;
  background: linear-gradient(145deg, rgba(22, 22, 29, 0.9) 0%, rgba(13, 13, 18, 0.95) 100%);
  border: 2px solid rgba(76, 201, 240, 0.15);
  transition: all 0.3s ease;
}

.biology-card:hover .biology-image {
  border-color: rgba(0, 245, 255, 0.3);
  transform: scale(1.02);
}

.biology-image img {
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.biology-card:hover .biology-image img {
  transform: scale(1.1);
}


/* 内容区域 */
.biology-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.biology-title {
  font-size: 16px;
  margin-bottom: 8px;
}

/* 分类徽章 */
.category-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  font-family: 'Rajdhani', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
  align-self: flex-start;
  transition: all 0.3s ease;
}

.category-badge.passive {
  background: rgba(132, 204, 22, 0.15);
  border: 1px solid rgba(132, 204, 22, 0.3);
  color: #84CC16;
}

.category-badge.friendly {
  background: rgba(34, 211, 238, 0.15);
  border: 1px solid rgba(34, 211, 238, 0.3);
  color: #22D3EE;
}

.category-badge.neutral {
  background: rgba(251, 191, 36, 0.15);
  border: 1px solid rgba(251, 191, 36, 0.3);
  color: #FBBF24;
}

.category-badge.hostile {
  background: rgba(248, 113, 113, 0.15);
  border: 1px solid rgba(248, 113, 113, 0.3);
  color: #F87171;
}

.category-badge.boss {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(245, 158, 11, 0.2) 100%);
  border: 1px solid rgba(168, 85, 247, 0.4);
  color: #D8B4FE;
  text-shadow: 0 0 5px rgba(168, 85, 247, 0.5);
}

.biology-card:hover .category-badge {
  transform: scale(1.05);
}

.badge-icon {
  font-size: 12px;
}

/* 描述 */
.biology-description {
  flex: 1;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.6);
}

/* 查看提示 */
.view-hint {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(76, 201, 240, 0.1);
  font-size: 11px;
  color: rgba(76, 201, 240, 0.6);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.biology-card:hover .view-hint {
  opacity: 1;
  transform: translateY(0);
}

.hint-icon {
  font-size: 10px;
}

.hint-text {
  font-family: 'Rajdhani', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* 响应式 */
@media (max-width: 768px) {
  .biology-image-wrapper {
    height: 100px;
  }

  .biology-title {
    font-size: 15px;
  }

  .category-badge {
    font-size: 10px;
    padding: 3px 8px;
  }

  .view-hint {
    opacity: 1;
    transform: none;
  }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .rarity-border.boss {
    animation: none;
  }

  .biology-card {
    transition: none;
  }

  .biology-image img {
    transition: none;
  }

  .view-hint {
    transition: none;
  }
}
</style>
