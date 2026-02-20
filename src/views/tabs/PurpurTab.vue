<template>
  <div style="width: 100%; max-width: 700px; margin: 0 auto; padding: 0 20px; box-sizing: border-box">
    <n-space vertical size="large">
      <n-space class="purpur-select-row" align="center">
        <span>选择 Minecraft 版本：</span>
        <n-select
          class="purpur-select"
          :loading="loading"
          v-model:value="selectedMcVersion"
          @update:value="handleMcVersionChange"
          style="min-width: 180px; width: 100%; max-width: 280px"
          :options="minecraftVersions.map(v => ({ label: v, value: v }))"
        />
        <span>选择 Purpur 构建：</span>
        <n-select
          class="purpur-select"
          :loading="loading"
          v-model:value="selectedBuild"
          @update:value="handleBuildChange"
          :options="builds.map(b => ({ label: b, value: b }))"
          style="min-width: 150px; white-space: nowrap; width: 100%; max-width: 220px"
        />
      </n-space>
      <BuildDetailCard
        :disabled="!selectedMcVersion || !selectedBuild"
        @download="handleDownload"
      >
        <template #content>
          <div><strong>项目:</strong> {{ buildDetail?.project || 'N/A' }}</div>
          <div><strong>MC版本:</strong> {{ buildDetail?.version || 'N/A' }}</div>
          <div><strong>构建号:</strong> {{ buildDetail?.build || 'N/A' }}</div>
          <div>
            <strong>构建时间:</strong>
            {{ buildDetail?.timestamp ? new Date(buildDetail.timestamp).toLocaleString() : 'N/A' }}
          </div>
          <div><strong>提交数:</strong> {{ buildDetail?.commits?.length || 0 }}</div>
          <div v-if="buildDetail?.commits && buildDetail.commits.length">
            <n-collapse :default-expanded-names="['commits']" arrow-placement="right">
              <n-collapse-item title="提交记录" name="commits">
                <ul style="padding-left: 1em">
                  <li v-for="c in buildDetail.commits" :key="c.hash">
                    <div><b>{{ c.author }}</b> &lt;{{ c.email }}&gt;</div>
                    <div style="font-size:13px; white-space:pre-line; margin:5px 0">{{ c.description }}</div>
                    <div style="font-size:12px; color:#aaa">
                      {{ c.hash }} | {{ c.timestamp ? new Date(c.timestamp).toLocaleString() : '' }}
                    </div>
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
import type {PurpurBuildDetail, ServerType} from '@/types'
import type {DownloadProgress} from '@/composables/useDownload'

/**
 * 组件事件
 */
interface Emits {
  /** 错误 */
  (e: 'error', message: string, isCors: boolean): void
}

const emit = defineEmits<Emits>()

const type: ServerType = 'purpur'
const minecraftVersions = ref<string[]>([])
const builds = ref<string[]>([])
const buildDetail = ref<PurpurBuildDetail | null>(null)
const selectedMcVersion = ref<string>('')
const selectedBuild = ref<string>('')
const loading = ref(false)

const loadingState = {[type]: false}
const {downloadBlob} = useDownload(loadingState as Record<ServerType, boolean>)

/**
 * 获取 Minecraft 版本列表
 */
const fetchMinecraftVersions = async (): Promise<void> => {
  loading.value = true
  try {
    const resp = await fetch('https://api.purpurmc.org/v2/purpur')
    if (!resp.ok) throw new Error('无法加载 Purpur 版本列表')
    const data = await resp.json()
    minecraftVersions.value = data.versions || []
    selectedMcVersion.value = data.metadata?.current || (data.versions?.[0] || '')
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
    const resp = await fetch(`https://api.purpurmc.org/v2/purpur/${selectedMcVersion.value}`)
    if (!resp.ok) throw new Error('无法加载 Purpur 构建号')
    const data = await resp.json()
    builds.value = data.builds?.all || []
    selectedBuild.value = data.builds?.latest || (data.builds?.all?.[0] || '')
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
    const resp = await fetch(`https://api.purpurmc.org/v2/purpur/${selectedMcVersion.value}/${selectedBuild.value}`)
    if (!resp.ok) throw new Error('无法加载 Purpur 构建详情')
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
const handleBuildChange = async (val: string): Promise<void> => {
  selectedBuild.value = val
  await fetchBuildDetail()
}

/**
 * 处理下载
 * @param onProgress 进度回调
 */
const handleDownload = async (onProgress: (progress: DownloadProgress) => void): Promise<void> => {
  if (!selectedMcVersion.value || !selectedBuild.value) return
  const url = `https://api.purpurmc.org/v2/purpur/${selectedMcVersion.value}/${selectedBuild.value}/download`
  const filename = `purpur-${selectedMcVersion.value}-${selectedBuild.value}.jar`
  try {
    await downloadBlob(filename, url, onProgress)
  } catch (e: any) {
    // 下载错误已在 useDownload 中处理
  }
}

onMounted(() => {
  fetchMinecraftVersions()
})
</script>
