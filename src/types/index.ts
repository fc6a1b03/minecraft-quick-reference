/**
 * 服务器类型
 */
export type ServerType = 'native' | 'fabric' | 'forge' | 'neoForge' | 'purpur' | 'folia' | 'biology'

/**
 * 版本数据项
 */
export interface VersionItem {
  name: string
  version: string
  date: string
  type: string
  url: string
}

/**
 * 分页信息
 */
export interface Pager {
  pageNum: number
  pageSize: number
  total: number
}

/**
 * 分页记录
 */
export type PagerRecord = Record<ServerType, Pager>

/**
 * 加载状态
 */
export type LoadingRecord = Record<ServerType, boolean>

/**
 * 错误状态
 */
export type ErrorRecord = Record<ServerType, boolean>

/**
 * CORS 错误状态
 */
export type CorsErrorRecord = Record<ServerType, boolean>

/**
 * 版本数据结构
 */
export interface VersionData {
  native: VersionItem[]
  fabric: VersionItem[]
  forge: VersionItem[]
  neoForge: VersionItem[]
  purpur: VersionItem[]
  folia: VersionItem[]
}

/**
 * Purpur 构建详情
 */
export interface PurpurBuildDetail {
  project: string
  version: string
  build: string
  timestamp: string
  commits?: Array<{
    hash: string
    author: string
    email: string
    description: string
    timestamp: string
  }>
}

/**
 * Folia 构建详情
 */
export interface FoliaBuildDetail {
  id: number
  channel: string
  time: string
  commits?: Array<{
    sha: string
    message: string
    time: string
  }>
  version?: {
    java?: {
      version: {
        minimum: string
      }
      flags?: {
        recommended?: string[]
      }
    }
  }
  downloads?: {
    'server:default'?: {
      name: string
      url: string
    }
  }
}

/**
 * 生物数据项
 */
export interface BiologyDataItem {
  name: string
  category: string
  image: string
  shortDescription: string
  description: string
  link: string
}
