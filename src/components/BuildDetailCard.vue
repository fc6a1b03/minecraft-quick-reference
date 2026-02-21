<template>
  <div class="pixel-card">
    <div class="pixel-card-header">
      <span>构建详情</span>
    </div>
    <div class="pixel-card-content">
      <slot name="content"/>
    </div>
    <div class="card-footer">
      <template v-if="progress.loading">
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" :style="{ width: `${progress.percent}%` }"></div>
        </div>
        <div class="progress-text">{{ progress.percent }}%</div>
      </template>
      <button
          class="modern-card-btn"
          @click="$emit('download', onProgress)"
          :disabled="disabled || progress.loading"
      >
        {{ progress.loading ? '下载中...' : '下载' }}
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

withDefaults(defineProps<Props>(), {
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
.card-footer {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
}

.progress-bar-bg {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #4cc9f0, #4895ef);
  border-radius: 3px;
  transition: width 0.2s ease;
}

.progress-text {
  font-size: 12px;
  color: #4cc9f0;
  min-width: 35px;
  text-align: right;
}

.modern-card-btn {
  margin: 0;
  flex-shrink: 0;
}
</style>
