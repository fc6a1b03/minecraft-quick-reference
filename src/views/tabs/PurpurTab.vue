<!--suppress ExceptionCaughtLocallyJS -->
<template>
  <div class="purpur-container">
    <n-space vertical size="large">
      <n-space class="purpur-select-row" align="center">
        <span>选择 Minecraft 版本：</span>
        <n-select
            :loading="loading"
            v-model:value="selectedMcVersion"
            @update:value="handleMcVersionChange"
            class="purpur-select purpur-select-mc"
            :options="minecraftVersions.map(v => ({ label: v, value: v }))"
        />
        <span>选择 Purpur 构建：</span>
        <n-select
            :loading="loading"
            v-model:value="selectedBuild"
            @update:value="handleBuildChange"
            :options="builds.map(b => ({ label: b, value: b }))"
            class="purpur-select purpur-select-build"
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
                <ul class="commit-list">
                  <li v-for="c in buildDetail.commits" :key="c.hash">
                    <div><b>{{ c.author }}</b> &lt;{{ c.email }}&gt;</div>
                    <div class="commit-message">{{ c.description }}</div>
                    <div class="commit-meta">
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
import {onMounted, ref} from 'vue'
import {NCollapse, NCollapseItem, NSelect, NSpace} from 'naive-ui'
import BuildDetailCard from '@/components/BuildDetailCard.vue'
import type {DownloadProgress} from '@/composables/useDownload'
import {useDownload} from '@/composables/useDownload'
import type {PurpurBuildDetail, ServerType} from '@/types'

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

onMounted(() => fetchMinecraftVersions())
</script>
