<template>
  <n-modal
      :show="show"
      @update:show="$emit('update:show', $event)"
      preset="card"
      class="biology-modal"
      size="huge"
      :bordered="false"
  >
    <template #header>
      <div class="mob-detail-header">
        <div class="mob-detail-title">{{ data.name }}</div>
        <div class="mob-detail-category">{{ data.category }}</div>
      </div>
    </template>
    <div class="mob-detail-content">
      <div class="mob-detail-image" v-if="data.image">
        <img :src="data.image" :alt="data.name"/>
      </div>
      <div class="mob-detail-description" v-html="data.description"></div>
      <div class="mob-detail-link" v-if="data.link">
        <n-button class="pixel-button" @click="openLink">
          了解更多信息
        </n-button>
      </div>
    </div>
  </n-modal>
</template>

<script lang="ts" setup>
import {NButton, NModal} from 'naive-ui'
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
