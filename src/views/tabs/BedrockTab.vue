<template>
  <VersionCardGrid
      :data="paginatedData"
      :has-more="hasMore"
      :cards-per-row="cardsPerRow"
      :download-progress="downloadProgress"
      @load-more="loadMore"
      @download="handleDownload"
      @grid-update="updatePageSize($event, true)"
      @grid-resize="updatePageSize($event, false)"
  />
</template>

<script lang="ts" setup>
import {computed, onMounted, reactive, ref} from 'vue'
import VersionCardGrid from '@/components/VersionCardGrid.vue'
import {usePagination} from '@/composables/usePagination'
import type {DownloadProgress} from '@/composables/useDownload'
import {useDownload} from '@/composables/useDownload'
import {fetchBedrockVersions} from '@/api'
import type {BedrockVersionInfo, ServerType, VersionItem} from '@/types'

/**
 * 组件事件
 */
interface Emits {
  /** 更新加载状态 */
  (e: 'update:loading', value: boolean): void

  /** 错误 */
  (e: 'error', message: string, isCors: boolean): void
}

const emit = defineEmits<Emits>()

const type: ServerType = 'bedrock'
const versions = ref<VersionItem[]>([])
const cardsPerRow = ref(4)
const downloadProgress = reactive<Record<string, DownloadProgress>>({})
const isDataLoaded = ref<boolean>(false)

const loadingState = {[type]: false}
const {handleDownload: downloadFile} = useDownload(loadingState as Record<ServerType, boolean>)

const {
  getPaginatedData,
  loadMore,
  setTotal,
  updatePageSize: updateSize,
  hasMore
} = usePagination(type)

const paginatedData = computed(() => getPaginatedData(versions.value))

/**
 * 获取 Bedrock 版本数据
 */
const fetchVersions = async (): Promise<void> => {
  // 如果数据已加载，直接返回
  if (isDataLoaded.value) {
    return
  }
  emit('update:loading', true)
  try {
    const list = await fetchBedrockVersions()
    versions.value = list
    setTotal(list.length)
    isDataLoaded.value = true
  } catch (error: any) {
    emit('error', error.message || '未知错误', error.message?.includes('CORS') || error instanceof TypeError)
  } finally {
    emit('update:loading', false)
  }
}

/**
 * 处理下载
 * @param item 版本项
 */
const handleDownload = async (item: VersionItem): Promise<void> => {
  const bedrockDetail = item.bedrockDetail as BedrockVersionInfo | undefined
  if (!bedrockDetail?.Variations?.length) return

  // 找到第一个可下载的变体
  const downloadableVariation = bedrockDetail.Variations.find(v => v.MetaData?.length > 0)
  if (!downloadableVariation) return

  const downloadUrl = downloadableVariation.MetaData[0]
  const fileName = `minecraft-bedrock-${item.name}-${downloadableVariation.Arch}.msixvc`

  downloadProgress[item.name] = {
    loading: true,
    percent: 0,
    loaded: 0,
    total: 0
  }
  
  const progressCallback = (progress: DownloadProgress) => downloadProgress[item.name] = progress

  try {
    await downloadFile(type, fileName, downloadUrl, false, progressCallback)
  } catch {
    // 错误已在 useDownload 中处理
  } finally {
    downloadProgress[item.name] = {
      loading: false,
      percent: 0,
      loaded: 0,
      total: 0
    }
  }
}

/**
 * 更新分页大小
 * @param el 网格元素
 * @param isInit 是否为初始加载
 */
const updatePageSize = (el: HTMLElement, isInit: boolean = false): void => {
  updateSize(el, isInit)
  const colCount = window.getComputedStyle(el).gridTemplateColumns.split(' ').length
  if (colCount > 0) {
    cardsPerRow.value = colCount
  }
}

onMounted(fetchVersions)
</script>
