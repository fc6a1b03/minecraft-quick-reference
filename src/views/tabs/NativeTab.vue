<!--suppress ExceptionCaughtLocallyJS -->
<template>
  <VersionCardGrid
      :data="paginatedData"
      :has-more="hasMore"
      :cards-per-row="cardsPerRow"
      :download-progress="downloadProgress"
      @load-more="loadMore"
      @download="handleDownloadClick"
      @grid-update="updatePageSize($event, true)"
      @grid-resize="updatePageSize($event, false)"
  />
  <!-- 下载选择对话框 -->
  <n-modal
      v-model:show="showDownloadModal"
      :title="selectedVersion?.name || ''"
      class="native-download-modal" preset="card" draggable
      style="width: 90%; max-width: 600px" :mask-closable="false"
  >
    <div v-if="detailLoading" class="detail-loading">
      <n-spin size="large"/>
      <p>加载版本信息...</p>
    </div>
    <div v-else-if="versionDetail" class="version-detail">
      <!-- 版本基本信息 -->
      <div class="detail-section">
        <h4 class="section-title">📋 版本信息</h4>
        <div class="detail-grid">
          <div class="detail-item">
            <span class="detail-label">版本 ID</span>
            <span class="detail-value">{{ versionDetail.id }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">类型</span>
            <n-tag :type="getVersionTypeTag(versionDetail.type)" size="small" :bordered="false">
              {{ versionDetail.type }}
            </n-tag>
          </div>
          <div class="detail-item">
            <span class="detail-label">发布时间</span>
            <span class="detail-value">{{ formatDateTime(versionDetail.releaseTime) }}</span>
          </div>
          <div v-if="versionDetail.javaVersion" class="detail-item">
            <span class="detail-label">Java 版本</span>
            <span class="detail-value">
              {{ versionDetail.javaVersion.majorVersion }}
              <span class="detail-sub">({{ versionDetail.javaVersion.component }})</span>
            </span>
          </div>
          <div v-if="versionDetail.minimumLauncherVersion" class="detail-item">
            <span class="detail-label">最低启动器版本</span>
            <span class="detail-value">{{ versionDetail.minimumLauncherVersion }}</span>
          </div>
          <div v-if="versionDetail.complianceLevel !== undefined" class="detail-item">
            <span class="detail-label">合规等级</span>
            <span class="detail-value">Level {{ versionDetail.complianceLevel }}</span>
          </div>
        </div>
      </div>
      <!-- 资源文件信息 -->
      <div v-if="versionDetail.assetIndex" class="detail-section">
        <h4 class="section-title">📦 资源文件</h4>
        <div class="asset-info">
          <div class="detail-item">
            <span class="detail-label">资源索引 ID</span>
            <span class="detail-value">{{ versionDetail.assetIndex.id }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">总大小</span>
            <span class="detail-value">{{ formatBytes(versionDetail.assetIndex.totalSize) }}</span>
          </div>
        </div>
      </div>
      <!-- 下载选项 -->
      <div class="detail-section">
        <h4 class="section-title">💾 选择下载</h4>
        <div class="download-options">
          <n-button
              v-if="versionDetail.downloads.client"
              class="download-option-btn client"
              size="large"
              :loading="downloadingType === 'client'"
              :disabled="!!downloadingType && downloadingType !== 'client'"
              @click="handleDownload('client')"
          >
            <template #icon>
              <span class="btn-icon">🎮</span>
            </template>
            <div class="download-btn-content">
              <div class="download-btn-title">客户端 (Client)</div>
              <div class="download-btn-meta">
                {{ formatBytes(versionDetail.downloads.client.size) }} |
                SHA1: {{ versionDetail.downloads.client.sha1.slice(0, 8) }}...
              </div>
            </div>
          </n-button>
          <n-button
              v-if="versionDetail.downloads.server"
              class="download-option-btn server"
              size="large"
              :loading="downloadingType === 'server'"
              :disabled="!!downloadingType && downloadingType !== 'server'"
              @click="handleDownload('server')"
          >
            <template #icon>
              <span class="btn-icon">🖥️</span>
            </template>
            <div class="download-btn-content">
              <div class="download-btn-title">服务端 (Server)</div>
              <div class="download-btn-meta">
                {{ formatBytes(versionDetail.downloads.server.size) }} |
                SHA1: {{ versionDetail.downloads.server.sha1.slice(0, 8) }}...
              </div>
            </div>
          </n-button>
          <div
              v-if="!versionDetail.downloads.client && !versionDetail.downloads.server"
              class="no-download"
          >
            <n-empty description="暂无可下载文件"/>
          </div>
        </div>
      </div>
      <!-- 下载进度 -->
      <div v-if="modalDownloadProgress.loading" class="modal-progress">
        <div class="progress-header">
          <span class="progress-label">下载进度</span>
          <span class="progress-percent">{{ modalDownloadProgress.percent }}%</span>
        </div>
        <n-progress
            type="line"
            :percentage="modalDownloadProgress.percent"
            :height="8"
            :border-radius="4"
            :fill-border-radius="4"
            processing
        />
        <div class="progress-size">
          {{ formatBytes(modalDownloadProgress.loaded) }} / {{ formatBytes(modalDownloadProgress.total) }}
        </div>
      </div>
    </div>
    <div v-else class="detail-error">
      <n-result
          status="error"
          title="加载失败"
          description="无法获取版本详细信息"
      >
        <template #footer>
          <n-button @click="loadVersionDetail">重试</n-button>
        </template>
      </n-result>
    </div>
  </n-modal>
</template>

<script lang="ts" setup>
import {computed, onMounted, reactive, ref} from 'vue'
import {NButton, NEmpty, NModal, NProgress, NResult, NSpin, NTag} from 'naive-ui'
import VersionCardGrid from '@/components/VersionCardGrid.vue'
import {usePagination} from '@/composables/usePagination'
import type {DownloadProgress} from '@/composables/useDownload'
import {useDownload} from '@/composables/useDownload'
import {fetchNativeVersionDetail, fetchNativeVersions} from '@/api'
import type {NativeVersionDetail, ServerType, VersionItem} from '@/types'

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

const type: ServerType = 'native'
const versions = ref<VersionItem[]>([])
const cardsPerRow = ref(4)
const downloadProgress = reactive<Record<string, DownloadProgress>>({})

// 对话框相关状态
const showDownloadModal = ref(false)
const selectedVersion = ref<VersionItem | null>(null)
const versionDetail = ref<NativeVersionDetail | null>(null)
const detailLoading = ref(false)
const downloadingType = ref<'client' | 'server' | null>(null)
const modalDownloadProgress = reactive<DownloadProgress>({
  loading: false,
  percent: 0,
  loaded: 0,
  total: 0
})

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
 * 获取原版版本数据
 */
const fetchVersions = async (): Promise<void> => {
  emit('update:loading', true)
  try {
    const list = await fetchNativeVersions()
    versions.value = list
    setTotal(list.length)
  } catch (error: any) {
    emit('error', error.message || '未知错误', error.message?.includes('CORS') || error instanceof TypeError)
  } finally {
    emit('update:loading', false)
  }
}

/**
 * 加载版本详细信息
 */
const loadVersionDetail = async (): Promise<void> => {
  if (!selectedVersion.value) return
  detailLoading.value = true
  versionDetail.value = null
  try {
    const detail = await fetchNativeVersionDetail(selectedVersion.value.url)
    versionDetail.value = detail
  } catch (error) {
    console.error('加载版本详情失败:', error)
  } finally {
    detailLoading.value = false
  }
}

/**
 * 处理下载按钮点击
 * @param item 版本项
 */
const handleDownloadClick = (item: VersionItem): void => {
  selectedVersion.value = item
  showDownloadModal.value = true
  loadVersionDetail()
}

/**
 * 处理下载
 * @param downloadType 下载类型
 */
const handleDownload = async (downloadType: 'client' | 'server'): Promise<void> => {
  if (!versionDetail.value?.downloads[downloadType]) return
  downloadingType.value = downloadType
  modalDownloadProgress.loading = true
  modalDownloadProgress.percent = 0
  modalDownloadProgress.loaded = 0
  modalDownloadProgress.total = 0
  const downloadInfo = versionDetail.value.downloads[downloadType]!
  const fileName = `minecraft-${downloadType}-${versionDetail.value.id}.jar`
  const fileUrl = downloadInfo.url
  // 同时更新卡片进度
  downloadProgress[selectedVersion.value!.name] = {
    loading: true,
    percent: 0,
    loaded: 0,
    total: 0
  }
  const progressCallback = (progress: DownloadProgress) => {
    modalDownloadProgress.loading = progress.loading
    modalDownloadProgress.percent = progress.percent
    modalDownloadProgress.loaded = progress.loaded
    modalDownloadProgress.total = progress.total
    downloadProgress[selectedVersion.value!.name] = progress
  }
  try {
    await downloadFile(type, fileName, fileUrl, false, progressCallback)
    showDownloadModal.value = false
  } catch {
    // 错误已在 useDownload 中处理
  } finally {
    downloadingType.value = null
    modalDownloadProgress.loading = false
    downloadProgress[selectedVersion.value!.name] = {
      loading: false,
      percent: 0,
      loaded: 0,
      total: 0
    }
  }
}

/**
 * 获取版本类型标签样式
 * @param versionType 版本类型
 */
const getVersionTypeTag = (versionType: string): 'default' | 'primary' | 'success' | 'warning' | 'error' => {
  const typeMap: Record<string, 'default' | 'primary' | 'success' | 'warning' | 'error'> = {
    'release': 'success',
    'snapshot': 'warning',
    'old_beta': 'default',
    'old_alpha': 'default'
  }
  return typeMap[versionType] || 'default'
}

/**
 * 格式化日期时间
 * @param dateStr 日期字符串
 */
const formatDateTime = (dateStr: string): string => {
  try {
    return new Date(dateStr).toLocaleString()
  } catch {
    return dateStr
  }
}

/**
 * 格式化字节大小
 * @param bytes 字节数
 */
const formatBytes = (bytes: number): string => {
  if (bytes === 0 || !bytes) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
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

onMounted(() => fetchVersions())
</script>
