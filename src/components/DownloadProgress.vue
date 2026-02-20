<template>
  <div v-if="progress.loading" class="download-progress">
    <div class="progress-row">
      <div class="progress-bar-bg">
        <div class="progress-bar-fill" :style="{ width: `${progress.percent}%` }"></div>
      </div>
      <div class="progress-text">{{ progress.percent }}%</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {DownloadProgress} from '@/composables/useDownload'

/**
 * 组件属性
 */
interface Props {
  /** 下载进度信息 */
  progress: DownloadProgress
}

defineProps<Props>()
</script>

<style scoped>
.download-progress {
  margin-bottom: 10px;
  width: 100%;
}

.progress-row {
  display: flex;
  align-items: center;
  gap: 10px;
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
  flex-shrink: 0;
}
</style>
