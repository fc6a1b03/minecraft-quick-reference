<template>
  <div class="modern-card">
    <div class="modern-card-title">{{ name }}</div>
    <div v-if="version" class="modern-card-meta">版本：{{ version }}</div>
    <div v-if="date && date !== '无' && date !== '--'" class="modern-card-meta">
      日期：{{ date }}
    </div>
    <div class="card-footer">
      <template v-if="downloadProgress.loading">
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" :style="{ width: `${downloadProgress.percent}%` }"></div>
        </div>
        <div class="progress-text">{{ downloadProgress.percent }}%</div>
      </template>
      <button
          class="modern-card-btn"
          @click="handleClick"
          :disabled="downloadProgress.loading"
      >
        {{ downloadProgress.loading ? '下载中...' : '下载' }}
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
.card-footer {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  width: 100%;
  flex-wrap: nowrap;
  overflow: hidden;
}

.progress-bar-bg {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  min-width: 40px;
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
  flex-shrink: 0;
}

.modern-card-btn {
  margin: 0;
  flex-shrink: 0;
}

@media (max-width: 414px) {
  .card-footer {
    gap: 8px;
  }

  .progress-text {
    font-size: 10px;
    min-width: 30px;
  }

  .modern-card-btn {
    font-size: 11px;
    padding: 4px 10px;
    height: 28px;
  }
}
</style>
