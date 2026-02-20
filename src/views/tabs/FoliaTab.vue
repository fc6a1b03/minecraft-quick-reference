<template>
  <div style="width: 100%; max-width: 700px; margin: 0 auto; padding: 0 20px; box-sizing: border-box">
    <n-space vertical size="large">
      <n-space class="folia-select-row" align="center">
        <span>选择 Minecraft 版本：</span>
        <n-select
          class="folia-select"
          :loading="loading"
          v-model:value="selectedMcVersion"
          @update:value="handleMcVersionChange"
          style="min-width: 180px; width: 100%; max-width: 280px"
          :options="minecraftVersions.map(v => ({ label: v, value: v }))"
        />
        <span>选择 Folia 构建：</span>
        <n-select
          class="folia-select"
          :loading="loading"
          v-model:value="selectedBuild"
          @update:value="handleBuildChange"
          :options="builds.slice().reverse().map(b => ({ label: String(b), value: b }))"
          style="min-width: 150px; white-space: nowrap; width: 100%; max-width: 220px"
        />
      </n-space>
      <BuildDetailCard
        :disabled="!selectedMcVersion || !selectedBuild"
        @download="handleDownload"
      >
        <template #content>
          <div><strong>项目:</strong> Folia</div>
          <div><strong>MC版本:</strong> {{ selectedMcVersion || 'N/A' }}</div>
          <div><strong>构建号:</strong> {{ buildDetail?.id || 'N/A' }}</div>
          <div><strong>通道:</strong> {{ buildDetail?.channel || 'N/A' }}</div>
          <div>
            <strong>构建时间:</strong>
            {{ buildDetail?.time ? new Date(buildDetail.time).toLocaleString() : 'N/A' }}
          </div>
          <div><strong>提交数:</strong> {{ buildDetail?.commits?.length || 0 }}</div>
          <div v-if="buildDetail?.version?.java">
            <n-collapse :default-expanded-names="[]" arrow-placement="right">
              <n-collapse-item title="Java 要求" name="java">
                <div><strong>最低版本:</strong> Java {{ buildDetail.version.java.version.minimum }}</div>
                <div v-if="buildDetail.version.java.flags?.recommended?.length">
                  <strong>推荐 JVM 参数:</strong>
                  <pre style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px; overflow-x: auto; font-size: 12px; margin-top: 8px">{{ buildDetail.version.java.flags.recommended.join(' ') }}</pre>
                </div>
              </n-collapse-item>
            </n-collapse>
          </div>
          <div v-if="buildDetail?.commits && buildDetail.commits.length">
            <n-collapse :default-expanded-names="['commits']" arrow-placement="right">
              <n-collapse-item title="提交记录" name="commits">
                <ul style="padding-left: 1em">
                  <li v-for="c in buildDetail.commits" :key="c.sha">
                    <div style="font-size:13px; white-space:pre-line; margin:5px 0">{{ c.message }}</div>
                    <div style="font-size:12px; color:#aaa">{{ c.sha.substring(0, 8) }} | {{ c.time ? new Date(c.time).toLocaleString() : '' }}</div>
                  </li>
                </ul>
              </n-collapse-item>
            </n-collapse>
          </div>
        </template>
      </BuildDetailCard>
    </n-space>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted} from 'vue'
import {NSpace, NSelect, NCollapse, NCollapseItem} from 'naive-ui'
import BuildDetailCard from '@/components/BuildDetailCard.vue'
import {useDownload} from '@/composables/useDownload'
import type {FoliaBuildDetail, ServerType} from '@/types'
import type {DownloadProgress} from '@/composables/useDownload'

/**
 * 组件事件
 */
interface Emits {
  /** 错误 */
  (e: 'error', message: string, isCors: boolean): void
}

const emit = defineEmits<Emits>()

const type: ServerType = 'folia'
const minecraftVersions = ref<string[]>([])
const builds = ref<number[]>([])
const buildDetail = ref<FoliaBuildDetail | null>(null)
const selectedMcVersion = ref<string>('')
const selectedBuild = ref<number | null>(null)
const loading = ref(false)

const loadingState = {[type]: false}
const {downloadBlob} = useDownload(loadingState as Record<ServerType, boolean>)

/**
 * 获取 Folia 版本数据
 */
const fetchVersions = async (): Promise<void> => {
  loading.value = true
  try {
    const resp = await fetch('https://fill.papermc.io/v3/projects/folia')
    if (!resp.ok) throw new Error('无法加载 Folia 版本列表')
    const data = await resp.json()
    const allVersions: string[] = []
    Object.values(data.versions || {}).forEach((arr: any) => {
      if (Array.isArray(arr)) allVersions.push(...arr)
    })
    minecraftVersions.value = allVersions.sort((a, b) => b.localeCompare(a, undefined, {numeric: true, sensitivity: 'base'}))
    const mcResp = await fetch('https://launchermeta.mojang.com/mc/game/version_manifest.json')
    if (!mcResp.ok) throw new Error('无法加载 Minecraft 版本列表')
    const mcData = await mcResp.json()
    const latestMcVersion = mcData.latest?.release || ''
    selectedMcVersion.value = allVersions.includes(latestMcVersion) ? latestMcVersion : (allVersions[0] || '')
    await fetchBuilds()
  } catch (e: any) {
    emit('error', e.message || '未知错误', e.message?.includes('CORS') || e instanceof TypeError)
  } finally {
    loading.value = false
  }
}

/**
 * 获取构建号列表
 */
const fetchBuilds = async (): Promise<void> => {
  if (!selectedMcVersion.value) return
  loading.value = true
  try {
    const resp = await fetch(`https://fill.papermc.io/v3/projects/folia/versions/${selectedMcVersion.value}`)
    if (!resp.ok) throw new Error('无法加载 Folia 构建号')
    const data = await resp.json()
    builds.value = data.builds || []
    selectedBuild.value = data.builds?.length ? Math.max(...data.builds) : null
    await fetchBuildDetail()
  } catch (e: any) {
    emit('error', e.message || '未知错误', e.message?.includes('CORS') || e instanceof TypeError)
  } finally {
    loading.value = false
  }
}

/**
 * 获取构建详情
 */
const fetchBuildDetail = async (): Promise<void> => {
  if (!selectedMcVersion.value || !selectedBuild.value) return
  loading.value = true
  try {
    const resp = await fetch(`https://fill.papermc.io/v3/projects/folia/versions/${selectedMcVersion.value}/builds/${selectedBuild.value}`)
    if (!resp.ok) throw new Error('无法加载 Folia 构建详情')
    buildDetail.value = await resp.json()
  } catch (e: any) {
    emit('error', e.message || '未知错误', e.message?.includes('CORS') || e instanceof TypeError)
  } finally {
    loading.value = false
  }
}

/**
 * 处理 Minecraft 版本变化
 */
const handleMcVersionChange = async (val: string): Promise<void> => {
  selectedMcVersion.value = val
  await fetchBuilds()
}

/**
 * 处理构建号变化
 */
const handleBuildChange = async (val: number): Promise<void> => {
  selectedBuild.value = val
  await fetchBuildDetail()
}

/**
 * 处理下载
 * @param onProgress 进度回调
 */
const handleDownload = async (onProgress: (progress: DownloadProgress) => void): Promise<void> => {
  if (!buildDetail.value) return
  const downloadInfo = buildDetail.value.downloads?.['server:default']
  if (!downloadInfo?.url) return
  const filename = downloadInfo.name || `folia-${selectedMcVersion.value}-${selectedBuild.value}.jar`
  try {
    await downloadBlob(filename, downloadInfo.url, onProgress)
  } catch (e: any) {
    // 下载错误已在 useDownload 中处理
  }
}

onMounted(() => {
  fetchVersions()
})
</script>
