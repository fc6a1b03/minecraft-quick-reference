/**
 * 服务端 API 统一管理模块
 * 集中管理 Native、Fabric、Forge、NeoForge、Paper、Purpur、Folia 的 API 调用
 */
import type {FoliaBuildDetail, PaperBuildDetail, PurpurBuildDetail, VersionItem} from '@/types'

// ==================== API 基础配置 ====================

const API_BASE_URLS = {
    native: 'https://launchermeta.mojang.com',
    fabric: 'https://meta.fabricmc.net',
    forge: 'https://files.minecraftforge.net',
    neoForge: 'https://maven.neoforged.net',
    paper: 'https://fill.papermc.io',
    purpur: 'https://api.purpurmc.org',
    folia: 'https://fill.papermc.io'
} as const

// ==================== 通用工具方法 ====================

/**
 * 检查是否为 CORS 错误
 * @param error 错误对象
 */
const isCorsError = (error: any): boolean => {
    return error?.message?.includes('CORS') || error instanceof TypeError
}

/**
 * 排序版本号（降序）
 * @param versions 版本列表
 */
const sortVersions = (versions: string[]): string[] => {
    return versions.sort((a, b) => b.localeCompare(a, undefined, {
        numeric: true,
        sensitivity: 'base'
    }))
}

// ==================== Native API ====================

/**
 * 获取 Minecraft 原版版本列表
 * @returns 版本列表
 */
export const fetchNativeVersions = async (): Promise<VersionItem[]> => {
    const response = await fetch(`${API_BASE_URLS.native}/mc/game/version_manifest.json`)
    if (!response.ok) {
        throw new Error(`无法加载原版数据：${response.statusText}`)
    }
    const manifest = await response.json()
    if (!manifest.versions || !manifest.versions.length) {
        throw new Error('原版数据格式错误，无法解析')
    }
    return manifest.versions.map((v: any) => ({
        name: `minecraft-server-${v.id}.jar`,
        version: `${v.type.charAt(0).toUpperCase()}${v.type.slice(1)}`,
        date: new Date(v.releaseTime).toLocaleDateString(),
        type: 'native',
        url: v.url
    }))
}

// ==================== Fabric API ====================

interface FabricVersionsData {
    game: Array<{ version: string; stable: boolean }>
    loader: Array<{ version: string; stable: boolean }>
    installer: Array<{ version: string; stable: boolean }>
}

/**
 * 获取 Fabric 版本列表
 * @returns 版本列表
 */
export const fetchFabricVersions = async (): Promise<VersionItem[]> => {
    const response = await fetch(`${API_BASE_URLS.fabric}/v2/versions/`)
    if (!response.ok) {
        throw new Error(`无法加载 Fabric 数据：${response.statusText}`)
    }
    const data: FabricVersionsData = await response.json()
    if (!data.game?.length || !data.loader?.length || !data.installer?.length) {
        throw new Error('Fabric 数据格式错误，无法解析')
    }
    const stableLoaderVersions = data.loader.filter((lv) => lv.stable)
    const stableInstallerVersions = data.installer.filter((iv) => iv.stable)
    return data.game.filter((gv) => gv.stable)
        .map((gameVersion) => {
            const serverVersion = gameVersion.version
            const loaderVersion = stableLoaderVersions.find((lv) =>
                lv.version.startsWith(serverVersion)
            )?.version || stableLoaderVersions[0].version
            const installerVersion = stableInstallerVersions[0].version
            return {
                name: `fabric-server-mc.${serverVersion}-loader.${loaderVersion}-launcher.${installerVersion}.jar`,
                version: serverVersion,
                date: '无',
                type: 'fabric',
                url: `${API_BASE_URLS.fabric}/v2/versions/loader/${serverVersion}/${loaderVersion}/${installerVersion}/server/jar`
            }
        })
        .sort((a, b) => b.version.localeCompare(a.version, undefined, {
            numeric: true,
            sensitivity: 'base'
        }))
}

// ==================== Forge API ====================

interface ForgePromotions {
    promos: Record<string, string>
}

/**
 * 获取 Forge 版本列表
 * @returns 版本列表
 */
export const fetchForgeVersions = async (): Promise<VersionItem[]> => {
    const response = await fetch(`${API_BASE_URLS.forge}/net/minecraftforge/forge/promotions_slim.json`)
    if (!response.ok) {
        throw new Error(`无法加载 Forge 数据：${response.statusText}`)
    }
    const promotions: ForgePromotions = await response.json()
    if (!promotions.promos) {
        throw new Error('Forge 数据格式错误，无法解析')
    }
    return Object.entries(promotions.promos).filter(([key]: [string, string]) => key.endsWith('-latest'))
        .map(([key, value]: [string, string]) => {
            const minecraftVersion = key.split('-')[0] || ''
            return {
                name: `forge-server-mc.${minecraftVersion}-${value}-installer.jar`,
                version: minecraftVersion,
                date: '无',
                type: 'forge',
                url: `https://maven.minecraftforge.net/net/minecraftforge/forge/${minecraftVersion}-${value}/forge-${minecraftVersion}-${value}-installer.jar`
            }
        })
        .sort((a, b) => b.version.localeCompare(a.version, undefined, {
            numeric: true,
            sensitivity: 'base'
        }))
}

// ==================== NeoForge API ====================

/**
 * 获取 NeoForge 版本列表
 * @returns 版本列表
 */
export const fetchNeoForgeVersions = async (): Promise<VersionItem[]> => {
    const response = await fetch(`${API_BASE_URLS.neoForge}/releases/net/neoforged/neoforge/maven-metadata.xml`)
    if (!response.ok) {
        throw new Error(`无法加载 NeoForge 数据：${response.statusText}`)
    }
    const data = await response.text()
    const xmlDoc = new DOMParser().parseFromString(data, 'text/xml')
    const versionsList = Array.from(xmlDoc.getElementsByTagName('version'))
        .map((el) => el.textContent).filter((v): v is string => !!v)
    if (!versionsList.length) {
        throw new Error('NeoForge 数据格式错误，无法解析')
    }
    return versionsList
        .map((version) => ({
            name: `NeoForge-server-mc.${version}-installer.jar`,
            version: version,
            date: '无',
            type: 'neoForge',
            url: `${API_BASE_URLS.neoForge}/releases/net/neoforged/neoforge/${version}/neoforge-${version}-installer.jar`
        }))
        .sort((a, b) => b.version.localeCompare(a.version, undefined, {
            numeric: true,
            sensitivity: 'base'
        }))
}

// ==================== Paper API ====================

interface PaperVersionsResponse {
    versions: Record<string, string[]>
}

interface PaperBuildsResponse {
    version: {
        id: string
        support: { status: string }
        java?: {
            version: { minimum: number }
            flags?: { recommended?: string[] }
        }
    }
    builds: number[]
}

/**
 * 获取 Paper 所有 Minecraft 版本列表
 * @returns 版本列表
 */
export const fetchPaperMcVersions = async (): Promise<string[]> => {
    const response = await fetch(`${API_BASE_URLS.paper}/v3/projects/paper`)
    if (!response.ok) {
        throw new Error('无法加载 Paper 版本列表')
    }
    const data: PaperVersionsResponse = await response.json()
    const allVersions: string[] = []
    Object.values(data.versions || {}).forEach((arr) => {
        if (Array.isArray(arr)) allVersions.push(...arr)
    })
    return sortVersions(allVersions)
}

/**
 * 获取 Paper 指定 MC 版本的构建号列表
 * @param mcVersion Minecraft 版本
 * @returns 构建号列表和最新构建号
 */
export const fetchPaperBuilds = async (mcVersion: string): Promise<{ builds: number[]; latest: number | null }> => {
    const response = await fetch(`${API_BASE_URLS.paper}/v3/projects/paper/versions/${mcVersion}`)
    if (!response.ok) {
        throw new Error('无法加载 Paper 构建号')
    }
    const data: PaperBuildsResponse = await response.json()
    const builds = data.builds || []
    return {
        builds,
        latest: builds.length ? Math.max(...builds) : null
    }
}

/**
 * 获取 Paper 构建详情
 * @param mcVersion Minecraft 版本
 * @param build 构建号
 * @returns 构建详情
 */
export const fetchPaperBuildDetail = async (mcVersion: string, build: number): Promise<PaperBuildDetail> => {
    const response = await fetch(`${API_BASE_URLS.paper}/v3/projects/paper/versions/${mcVersion}/builds/${build}`)
    if (!response.ok) {
        throw new Error('无法加载 Paper 构建详情')
    }
    return response.json()
}

// ==================== Purpur API ====================

interface PurpurVersionsResponse {
    versions: string[]
    metadata?: { current: string }
}

interface PurpurBuildsResponse {
    builds: { all: string[]; latest: string }
}

/**
 * 获取 Purpur 所有 Minecraft 版本列表
 * @returns 版本列表和当前版本
 */
export const fetchPurpurMcVersions = async (): Promise<{ versions: string[]; current: string }> => {
    const response = await fetch(`${API_BASE_URLS.purpur}/v2/purpur`)
    if (!response.ok) {
        throw new Error('无法加载 Purpur 版本列表')
    }
    const data: PurpurVersionsResponse = await response.json()
    return {
        versions: data.versions || [],
        current: data.metadata?.current || (data.versions?.[0] || '')
    }
}

/**
 * 获取 Purpur 指定 MC 版本的构建号列表
 * @param mcVersion Minecraft 版本
 * @returns 构建号列表和最新构建号
 */
export const fetchPurpurBuilds = async (mcVersion: string): Promise<{ builds: string[]; latest: string }> => {
    const response = await fetch(`${API_BASE_URLS.purpur}/v2/purpur/${mcVersion}`)
    if (!response.ok) {
        throw new Error('无法加载 Purpur 构建号')
    }
    const data: PurpurBuildsResponse = await response.json()
    return {
        builds: data.builds?.all || [],
        latest: data.builds?.latest || (data.builds?.all?.[0] || '')
    }
}

/**
 * 获取 Purpur 构建详情
 * @param mcVersion Minecraft 版本
 * @param build 构建号
 * @returns 构建详情
 */
export const fetchPurpurBuildDetail = async (mcVersion: string, build: string): Promise<PurpurBuildDetail> => {
    const response = await fetch(`${API_BASE_URLS.purpur}/v2/purpur/${mcVersion}/${build}`)
    if (!response.ok) {
        throw new Error('无法加载 Purpur 构建详情')
    }
    return response.json()
}

/**
 * 获取 Purpur 下载 URL
 * @param mcVersion Minecraft 版本
 * @param build 构建号
 * @returns 下载 URL
 */
export const getPurpurDownloadUrl = (mcVersion: string, build: string): string => {
    return `${API_BASE_URLS.purpur}/v2/purpur/${mcVersion}/${build}/download`
}

// ==================== Folia API ====================

interface FoliaVersionsResponse {
    versions: Record<string, string[]>
}

interface FoliaBuildsResponse {
    builds: number[]
}

/**
 * 获取 Folia 所有 Minecraft 版本列表
 * @returns 版本列表
 */
export const fetchFoliaMcVersions = async (): Promise<string[]> => {
    const response = await fetch(`${API_BASE_URLS.folia}/v3/projects/folia`)
    if (!response.ok) {
        throw new Error('无法加载 Folia 版本列表')
    }
    const data: FoliaVersionsResponse = await response.json()
    const allVersions: string[] = []
    Object.values(data.versions || {}).forEach((arr) => {
        if (Array.isArray(arr)) allVersions.push(...arr)
    })
    return sortVersions(allVersions)
}

/**
 * 获取 Folia 指定 MC 版本的构建号列表
 * @param mcVersion Minecraft 版本
 * @returns 构建号列表和最新构建号
 */
export const fetchFoliaBuilds = async (mcVersion: string): Promise<{ builds: number[]; latest: number | null }> => {
    const response = await fetch(`${API_BASE_URLS.folia}/v3/projects/folia/versions/${mcVersion}`)
    if (!response.ok) {
        throw new Error('无法加载 Folia 构建号')
    }
    const data: FoliaBuildsResponse = await response.json()
    const builds = data.builds || []
    return {
        builds,
        latest: builds.length ? Math.max(...builds) : null
    }
}

/**
 * 获取 Folia 构建详情
 * @param mcVersion Minecraft 版本
 * @param build 构建号
 * @returns 构建详情
 */
export const fetchFoliaBuildDetail = async (mcVersion: string, build: number): Promise<FoliaBuildDetail> => {
    const response = await fetch(`${API_BASE_URLS.folia}/v3/projects/folia/versions/${mcVersion}/builds/${build}`)
    if (!response.ok) {
        throw new Error('无法加载 Folia 构建详情')
    }
    return response.json()
}

// ==================== 通用导出 ====================

export {API_BASE_URLS, isCorsError, sortVersions}
