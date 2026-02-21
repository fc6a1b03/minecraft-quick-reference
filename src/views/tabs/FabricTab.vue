<!--suppress ExceptionCaughtLocallyJS -->
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
import type {ServerType, VersionItem} from '@/types'

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

const type: ServerType = 'fabric'
const versions = ref<VersionItem[]>([])
const cardsPerRow = ref(4)
const downloadProgress = reactive<Record<string, DownloadProgress>>({})

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
 * 获取 Fabric 版本数据
 */
const fetchFabricVersions = async (): Promise<void> => {
  emit('update:loading', true)
  try {
    const versionsResponse = await fetch('https://meta.fabricmc.net/v2/versions/')
    if (!versionsResponse.ok) {
      throw new Error(`无法加载 Fabric 数据：${versionsResponse.statusText}`)
    }
    const versionsData = await versionsResponse.json()
    if (!versionsData.game || !versionsData.game.length || !versionsData.loader || !versionsData.installer) {
      throw new Error('Fabric 数据格式错误，无法解析')
    }
    const stableLoaderVersions = versionsData.loader.filter((lv: any) => lv.stable) || []
    const stableInstallerVersions = versionsData.installer.filter((iv: any) => iv.stable) || []
    const list = (versionsData.game.filter((gv: any) => gv.stable) || [])
        .map((gameVersion: any) => {
          const serverVersion = gameVersion.version
          const loaderVersion = stableLoaderVersions.find((lv: any) => lv.version.startsWith(serverVersion))?.version || stableLoaderVersions[0].version
          const installerVersion = stableInstallerVersions[0].version
          return {
            name: `fabric-server-mc.${serverVersion}-loader.${loaderVersion}-launcher.${installerVersion}.jar`,
            version: serverVersion,
            date: '无',
            type: 'fabric',
            url: `https://meta.fabricmc.net/v2/versions/loader/${serverVersion}/${loaderVersion}/${installerVersion}/server/jar`
          }
        })
        .sort((a: any, b: any) => b.version.localeCompare(a.version, undefined, {
          numeric: true,
          sensitivity: 'base'
        }))
    versions.value = list
    setTotal(list.length)
  } catch (error: any) {
    emit('error', error.message || '未知错误', error.message?.includes('CORS') || error instanceof TypeError)
  } finally {
    emit('update:loading', false)
  }
}

/**
 * 处理下载
 * @param item 版本项
 * @param onProgress 进度回调
 */
const handleDownload = (item: VersionItem, onProgress: (progress: DownloadProgress) => void): void => {
  downloadProgress[item.name] = {
    loading: true,
    percent: 0,
    loaded: 0,
    total: 0
  }
  const progressCallback = (progress: DownloadProgress) => {
    downloadProgress[item.name] = progress
    onProgress(progress)
  }
  downloadFile(type, item.name, item.url, false, progressCallback)
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

onMounted(() => fetchFabricVersions())
</script>
