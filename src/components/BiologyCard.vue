<template>
  <div class="modern-card" @click="$emit('click')">
    <div class="modern-card-image" v-if="image">
      <img :src="image" :alt="name" />
    </div>
    <div class="modern-card-title">{{ name }}</div>
    <div class="modern-card-meta">{{ category }}</div>
    <div class="modern-card-description">{{ shortDescription }}</div>
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

defineProps<Props>()
defineEmits<Emits>()
</script>
