import {ref} from 'vue'
import {createDiscreteApi, darkTheme} from 'naive-ui'
import type {LoadingRecord, ServerType} from '@/types'

const theme = {
  themeOverrides: {
    common: {
      primaryColor: '#1866B6'
    }
  }
}

const {notification} = createDiscreteApi(['notification'], {
  configProviderProps: {
    theme: darkTheme,
    themeOverrides: theme.themeOverrides
  }
})

/**
 * 下载进度信息
 */
export interface DownloadProgress {
  /** 是否正在下载 */
  loading: boolean
  /** 下载进度 (0-100) */
  percent: number
  /** 已下载字节数 */
  loaded: number
  /** 总字节数 */
  total: number
}

/**
 * 下载文件（带进度）
 * @param name 文件名
 * @param url 下载地址
 * @param onProgress 进度回调
 */
const downloadBlob = async (
  name: string,
  url: string,
  onProgress?: (progress: DownloadProgress) => void
): Promise<void> => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`网络响应不正常: ${response.status}`)
  }

  const contentLength = response.headers.get('content-length')
  const total = contentLength ? parseInt(contentLength, 10) : 0

  if (!response.body || !total) {
    // 如果无法获取进度，直接下载
    const blob = await response.blob()
    triggerDownload(blob, name)
    return
  }

  const reader = response.body.getReader()
  const chunks: Uint8Array[] = []
  let receivedLength = 0

  // 通知开始下载
  onProgress?.({
    loading: true,
    percent: 0,
    loaded: 0,
    total
  })

  while (true) {
    const {done, value} = await reader.read()
    if (done) break

    chunks.push(value)
    receivedLength += value.length

    onProgress?.({
      loading: true,
      percent: Math.round((receivedLength / total) * 100),
      loaded: receivedLength,
      total
    })
  }

  // 合并 chunks
  const blob = new Blob(chunks)
  triggerDownload(blob, name)

  // 通知完成
  onProgress?.({
    loading: false,
    percent: 100,
    loaded: total,
    total
  })
}

/**
 * 触发浏览器下载
 * @param blob 文件 Blob
 * @param name 文件名
 */
const triggerDownload = (blob: Blob, name: string): void => {
  const tempLink = document.createElement('a')
  tempLink.download = name
  tempLink.style.display = 'none'
  tempLink.href = window.URL.createObjectURL(blob)
  document.body.appendChild(tempLink)
  tempLink.click()
  document.body.removeChild(tempLink)
  window.URL.revokeObjectURL(tempLink.href)
}

/**
 * 使用下载功能
 * @param loading 加载状态引用
 */
export const useDownload = (loading: LoadingRecord) => {
  const errorMessage = ref<string>('')

  /**
   * 处理原版下载（需要二次解析）
   * @param name 文件名
   * @param versionUrl 版本 JSON 地址
   * @param onProgress 进度回调
   */
  const handleNativeDownload = async (
    name: string,
    versionUrl: string,
    onProgress?: (progress: DownloadProgress) => void
  ): Promise<void> => {
    const resp = await fetch(versionUrl)
    if (!resp.ok) {
      throw new Error(`无法加载版本数据: ${resp.statusText}`)
    }
    const versionData = await resp.json()
    const serverUrl = versionData?.downloads?.server?.url
    if (!serverUrl) {
      throw new Error('未找到符合的下载地址')
    }
    await downloadBlob(name, serverUrl, onProgress)
  }

  /**
   * 处理下载
   * @param type 服务器类型
   * @param name 文件名
   * @param versionUrl 下载地址
   * @param isNative 是否为原版
   * @param onProgress 进度回调
   */
  const handleDownload = async (
    type: ServerType,
    name: string,
    versionUrl: string,
    isNative: boolean = false,
    onProgress?: (progress: DownloadProgress) => void
  ): Promise<void> => {
    if (!versionUrl) return
    loading[type] = true
    try {
      if (isNative) {
        await handleNativeDownload(name, versionUrl, onProgress)
      } else {
        await downloadBlob(name, versionUrl, onProgress)
      }
      notification.success({
        duration: 4000,
        content: '下载成功',
        keepAliveOnHover: true
      })
    } catch (error: any) {
      notification.error({
        duration: 4000,
        content: '下载出错',
        meta: error.message,
        keepAliveOnHover: true
      })
    } finally {
      loading[type] = false
    }
  }

  return {
    errorMessage,
    handleDownload,
    downloadBlob
  }
}
