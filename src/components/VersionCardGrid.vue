<template>
  <div class="card-grid" ref="gridRef">
    <VersionCard
        v-for="row in data"
        :key="row.name"
        :name="row.name"
        :version="row.version"
        :date="row.date"
        :download-progress="getDownloadProgress(row.name)"
        @download="(onProgress) => $emit('download', row, onProgress)"
    />
    <div
        v-for="n in emptyCount"
        :key="`empty-${n}`"
        class="modern-card"
        aria-hidden="true"
    />
  </div>
  <div class="load-more-container">
    <n-button
        class="load-more-button"
        @click="$emit('loadMore')"
        :disabled="!hasMore"
    >
      加载更多
    </n-button>
  </div>
</template>

<script lang="ts" setup>
import {computed, nextTick, onBeforeUnmount, onMounted, ref, watch} from 'vue'
import {NButton} from 'naive-ui'
import VersionCard from './VersionCard.vue'
import type {VersionItem} from '@/types'
import type {DownloadProgress} from '@/composables/useDownload'

/**
 * 组件属性
 */
interface Props {
  /** 数据列表 */
  data: VersionItem[]
  /** 是否还有更多数据 */
  hasMore: boolean
  /** 每行卡片数（用于计算空卡片） */
  cardsPerRow?: number
  /** 各项目的下载进度 */
  downloadProgress?: Record<string, DownloadProgress>
}

/**
 * 组件事件
 */
interface Emits {
  /** 加载更多 */
  (e: 'loadMore'): void

  /** 下载 */
  (e: 'download', item: VersionItem, onProgress: (progress: DownloadProgress) => void): void

  /** 网格引用更新（首次挂载） */
  (e: 'gridUpdate', el: HTMLElement): void

  /** 网格大小变化（窗口调整） */
  (e: 'gridResize', el: HTMLElement): void
}

const props = withDefaults(defineProps<Props>(), {
  cardsPerRow: 4,
  downloadProgress: () => ({})
})

const emit = defineEmits<Emits>()

const gridRef = ref<HTMLElement | null>(null)
let resizeObserver: ResizeObserver | null = null
const isInitialized = ref(false)

/**
 * 计算空卡片数量
 */
const emptyCount = computed(() => {
  const len = props.data.length
  if (!props.cardsPerRow || len === 0) return 0
  const mod = len % props.cardsPerRow
  return mod === 0 ? 0 : props.cardsPerRow - mod
})

/**
 * 获取下载进度
 * @param name 项目名称
 */
const getDownloadProgress = (name: string): DownloadProgress => {
  return props.downloadProgress[name] || {
    loading: false,
    percent: 0,
    loaded: 0,
    total: 0
  }
}

/**
 * 监听网格大小变化（窗口调整）
 */
const setupResizeObserver = () => {
  if (gridRef.value && gridRef.value instanceof HTMLElement) {
    resizeObserver = new ResizeObserver(() => {
      if (isInitialized.value) {
        emit('gridResize', gridRef.value!)
      }
    })
    resizeObserver.observe(gridRef.value)
  }
}

/**
 * 清理监听器
 */
const cleanupResizeObserver = () => {
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
}

onMounted(() => {
  nextTick(() => {
    setupResizeObserver()
    if (gridRef.value) {
      isInitialized.value = true
      emit('gridUpdate', gridRef.value)
    }
  })
})

onBeforeUnmount(() => cleanupResizeObserver())

watch(gridRef, (newVal) => {
  cleanupResizeObserver()
  if (newVal && newVal instanceof HTMLElement) {
    setupResizeObserver()
    if (!isInitialized.value) {
      isInitialized.value = true
      emit('gridUpdate', newVal)
    }
  }
}, {flush: 'post'})
</script>
