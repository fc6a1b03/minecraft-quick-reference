<!--suppress ExceptionCaughtLocallyJS, JSUnresolvedReference -->
<template>
  <div class="main-center-wrapper">
    <n-config-provider :theme="darkTheme" :theme-overrides="theme.themeOverrides">
      <n-layout class="main-center-content">
        <n-tabs animated justify-content="space-evenly" size="large" type="bar" @update:value="handleTabChange">
          <n-tab-pane v-for="type in types" :key="type" :name="type"
                      :tab="`${type.charAt(0).toUpperCase()}${type.slice(1)}`">
            <n-spin :show="loading[type]" stroke="rgba(76, 201, 240, 0.7)">
              <template v-if="hasError[type]">
                <n-alert show-icon title="加载失败！" type="error">
                  <template #default>
                    <div>
                      <div v-if="isCorsError[type]">
                        <p><strong>加载数据时发生 CORS 错误。</strong></p>
                        <p>您可以尝试以下解决方法：</p>
                        <ul>
                          <li>
                            安装<a class="cool-link"
                                   href="https://webextension.org/listing/access-control.html"
                                   target="_blank">CORS Unblock</a>浏览器插件并对该网站激活后刷新页面
                          </li>
                          <li>
                            下载地址：
                            <n-space vertical>
                              <n-button class="cool-link"
                                        href="https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino"
                                        tag="a"
                                        target="_blank"
                                        text>
                                Google Chrome
                              </n-button>
                              <n-button class="cool-link"
                                        href="https://microsoftedge.microsoft.com/addons/detail/cors-unblock/hkjklmhkbkdhlgnnfbbcihcajofmjgbh"
                                        tag="a"
                                        target="_blank"
                                        text>
                                Microsoft Edge
                              </n-button>
                              <n-button class="cool-link"
                                        href="https://addons.mozilla.org/zh-CN/firefox/addon/cors-unblock/" tag="a"
                                        target="_blank"
                                        text>
                                Mozilla Firefox
                              </n-button>
                            </n-space>
                          </li>
                        </ul>
                      </div>
                      <div v-else>
                        {{ errorMessage }}
                      </div>
                    </div>
                  </template>
                </n-alert>
              </template>
              <template v-else>
                <template v-if="type === 'purpur'">
                  <div style="width: 100%; max-width: 700px; margin: 0 auto; padding: 0 20px; box-sizing: border-box">
                    <n-space vertical size="large">
                      <n-space class="purpur-select-row" align="center">
                        <span>选择 Minecraft 版本：</span>
                        <n-select
                            class="purpur-select"
                            :loading="loading.purpur"
                            v-model:value="purpurSelectedMcVersion"
                            @update:value="handlePurpurMcVersionChange"
                            style="min-width: 180px; width: 100%; max-width: 280px"
                            :options="purpurMinecraftVersions.map(v => ({ label: v, value: v }))"
                        />
                        <span>选择 Purpur 构建：</span>
                        <n-select
                            class="purpur-select"
                            :loading="loading.purpur"
                            v-model:value="purpurSelectedBuild"
                            @update:value="handlePurpurBuildChange"
                            :options="purpurBuilds.map(b => ({ label: b, value: b }))"
                            style="min-width: 150px; white-space: nowrap; width: 100%; max-width: 220px"
                        />
                      </n-space>
                      <div class="pixel-card">
                        <div class="pixel-card-header">
                          <span>构建详情</span>
                        </div>
                        <div class="pixel-card-content">
                          <div><strong>项目:</strong> {{ purpurBuildDetail.project }}</div>
                          <div><strong>MC版本:</strong> {{ purpurBuildDetail.version }}</div>
                          <div><strong>构建号:</strong> {{ purpurBuildDetail.build }}</div>
                          <div>
                            <strong>构建时间:</strong> {{
                              purpurBuildDetail.timestamp ? new Date(purpurBuildDetail.timestamp).toLocaleString() : 'N/A'
                            }}
                          </div>
                          <div><strong>提交数:</strong> {{ purpurBuildDetail.commits?.length || 0 }}</div>
                          <div v-if="purpurBuildDetail.commits && purpurBuildDetail.commits.length">
                            <n-collapse :default-expanded-names="['commits']" arrow-placement="right">
                              <n-collapse-item title="提交记录" name="commits">
                                <ul style="padding-left: 1em">
                                  <li v-for="c in purpurBuildDetail.commits" :key="c.hash">
                                    <div><b>{{ c.author }}</b> &lt{{ c.email }}&gt</div>
                                    <div style="font-size:13px; white-space:pre-line; margin:5px 0">{{
                                        c.description
                                      }}
                                    </div>
                                    <div style="font-size:12px; color:#aaa">{{ c.hash }} |
                                      {{ c.timestamp ? new Date(c.timestamp).toLocaleString() : '' }}
                                    </div>
                                  </li>
                                </ul>
                              </n-collapse-item>
                            </n-collapse>
                          </div>
                        </div>
                        <div class="pixel-card-footer">
                          <button class="pixel-button" @click="handlePurpurDownload"
                                  :disabled="!purpurSelectedMcVersion || !purpurSelectedBuild">
                            下载
                          </button>
                        </div>
                      </div>
                    </n-space>
                  </div>
                </template>
                <template v-else>
                  <div class="card-grid" ref="cardGridRef">
                    <div
                        v-for="row in getPaginatedData(type)"
                        :key="row.name"
                        class="modern-card"
                    >
                      <div class="modern-card-title">{{ row.name }}</div>
                      <div v-if="row.version" class="modern-card-meta">版本：{{ row.version }}</div>
                      <div v-if="row.date && row.date !== '无' && row.date !== '--'" class="modern-card-meta">
                        日期：{{ row.date }}
                      </div>
                      <button class="modern-card-btn" @click="handleDownload($event, row.name, row.url, row.type)">
                        下载
                      </button>
                    </div>
                    <div
                        v-for="n in emptyCardCount(type)"
                        :key="`empty-${n}-${pager[type].pageNum}`"
                        class="modern-card"
                        aria-hidden="true"
                    ></div>
                  </div>
                  <div class="load-more-container">
                    <button
                        @click="loadMore(type)" class="load-more-button"
                        :disabled="pager[type].pageNum * pager[type].pageSize >= pager[type].total"
                    >
                      加载更多
                    </button>
                  </div>
                </template>
              </template>
            </n-spin>
          </n-tab-pane>
        </n-tabs>
      </n-layout>
    </n-config-provider>
  </div>
</template>
<script lang="tsx" setup>
import {nextTick, onBeforeUnmount, onMounted, ref, watch} from 'vue'
import {createDiscreteApi, darkTheme, NAlert, NButton, NConfigProvider, NLayout, NSpin, NTabPane, NTabs} from 'naive-ui'
import '@/common/css/index.css'
// 错误信息
const errorMessage = ref('')
// 类型数组
const types = ['native', 'fabric', 'forge', 'neoForge', 'purpur']
// 主题配置
const theme = {
  // 主题覆盖
  themeOverrides: {
    common: {
      primaryColor: '#1866B6'
    }
  }
}
// 通知组件
const {notification} = createDiscreteApi(['notification'], {
  configProviderProps: {
    theme: darkTheme,
    themeOverrides: theme.themeOverrides
  }
})
// 数据结构
const versionData = ref({
  native: [],
  fabric: [],
  forge: [],
  neoForge: [],
  purpur: []
})
// 分页信息
const pager = ref({
  native: {pageNum: 1, pageSize: 15, total: 0},
  fabric: {pageNum: 1, pageSize: 15, total: 0},
  forge: {pageNum: 1, pageSize: 15, total: 0},
  neoForge: {pageNum: 1, pageSize: 15, total: 0},
  purpur: {pageNum: 1, pageSize: 15, total: 0}
})
// 加载状态
const loading = ref({
  native: false,
  fabric: false,
  forge: false,
  neoForge: false,
  purpur: false
})
// 错误状态
const hasError = ref({
  native: false,
  fabric: false,
  forge: false,
  neoForge: false,
  purpur: false
})
// `Cors`错误状态
const isCorsError = ref({
  native: false,
  fabric: false,
  forge: false,
  neoForge: false,
  purpur: false
})
// Purpur 相关状态
const purpurBuilds = ref<string[]>([])
const purpurBuildDetail = ref<any>(null)
const purpurSelectedBuild = ref<string>('')
const purpurSelectedMcVersion = ref<string>('')
const purpurMinecraftVersions = ref<string[]>([])
// 获取原版信息
const fetchNativeVersions = async () => {
  const response = await fetch('https://launchermeta.mojang.com/mc/game/version_manifest.json')
  if (!response.ok) {
    throw new Error(`无法加载原版数据：${response.statusText}`)
  }
  const manifest = await response.json()
  if (!manifest.versions || !manifest.versions.length) {
    throw new Error('原版数据格式错误，无法解析')
  }
  const versions = manifest.versions
      // 定义列表结构
      .map((v: any) => ({
        name: `minecraft-server-${v.id}.jar`,
        version: `${v.type.charAt(0).toUpperCase()}${v.type.slice(1)}`,
        date: new Date(v.releaseTime).toLocaleDateString(),
        type: types[0],
        url: v.url
      }))
  versionData.value.native = versions
  pager.value.native.total = versions.length
}
// 获取 Fabric 信息
const fetchFabricVersions = async () => {
  const versionsResponse = await fetch('https://meta.fabricmc.net/v2/versions/')
  if (!versionsResponse.ok) {
    throw new Error(`无法加载 Fabric 数据：${versionsResponse.statusText}`)
  }
  const versionsData = await versionsResponse.json()
  if (!versionsData.game || !versionsData.game.length || !versionsData.loader || !versionsData.installer) {
    throw new Error('Fabric 数据格式错误，无法解析')
  }
  // 组合列表数据
  const stableLoaderVersions = versionsData.loader.filter((lv: any) => lv.stable) || []
  const stableInstallerVersions = versionsData.installer.filter((iv: any) => iv.stable) || []
  const fabricVersions = (versionsData.game.filter((gv: any) => gv.stable) || [])
      // 定义列表结构
      .map((gameVersion: any) => {
        const serverVersion = gameVersion.version
        const loaderVersion = stableLoaderVersions.find((lv: any) => lv.version.startsWith(serverVersion))?.version || stableLoaderVersions[0].version
        const installerVersion = stableInstallerVersions[0].version
        return {
          name: `fabric-server-mc.${serverVersion}-loader.${loaderVersion}-launcher.${installerVersion}.jar`,
          version: serverVersion,
          date: '无',
          type: types[1],
          url: `https://meta.fabricmc.net/v2/versions/loader/${serverVersion}/${loaderVersion}/${installerVersion}/server/jar`
        }
      })
      // 排序列表
      .sort((a: any, b: any) => b.version.localeCompare(a.version, undefined, {
        numeric: true,
        sensitivity: 'base'
      }))
  versionData.value.fabric = fabricVersions
  pager.value.fabric.total = fabricVersions.length
}
// 获取 Forge 信息
const fetchForgeVersions = async () => {
  const response = await fetch('https://files.minecraftforge.net/net/minecraftforge/forge/promotions_slim.json')
  if (!response.ok) {
    throw new Error(`无法加载 Forge 数据：${response.statusText}`)
  }
  const promotions = await response.json()
  if (!promotions.promos) {
    throw new Error('Forge 数据格式错误，无法解析')
  }
  // 组合列表数据
  const forgeVersions = Object.entries(promotions.promos)
      .filter(([key]: [string, any]) => key.endsWith('-latest'))
      // 定义列表结构
      .map(([key, value]) => {
        const minecraftVersion = key.split('-')[0] || ''
        return {
          name: `forge-server-mc.${minecraftVersion}-${value}-installer.jar`,
          version: minecraftVersion,
          date: '无',
          type: types[2],
          url: `https://maven.minecraftforge.net/net/minecraftforge/forge/${minecraftVersion}-${value}/forge-${minecraftVersion}-${value}-installer.jar`
        }
      })
      // 排序列表
      .sort((a: any, b: any) => b.version.localeCompare(a.version, undefined, {numeric: true, sensitivity: 'base'}))
  versionData.value.forge = forgeVersions
  pager.value.forge.total = forgeVersions.length
}
// 获取 NeoForge 信息
const fetchNeoForgeVersions = async () => {
  const response = await fetch('https://maven.neoforged.net/releases/net/neoforged/neoforge/maven-metadata.xml')
  if (!response.ok) {
    throw new Error(`无法加载 NeoForge 数据：${response.statusText}`)
  }
  const data = await response.text()
  // 解析 XML 数据
  const xmlDoc = new DOMParser().parseFromString(data, "text/xml")
  // 获取版本列表
  const versions = Array.from(xmlDoc.getElementsByTagName('version'))
      .map(el => el.textContent).filter((v): v is string => !!v);
  if (!versions.length) {
    throw new Error('NeoForge 数据格式错误，无法解析')
  }
  // 组合列表数据
  const neoForgeVersions = versions
      // 定义列表结构
      .map((version: string) => {
        return {
          name: `NeoForge-server-mc.${version}-installer.jar`,
          version: version,
          date: '无',
          type: types[3],
          url: `https://maven.neoforged.net/releases/net/neoforged/neoforge/${version}/neoforge-${version}-installer.jar`
        }
      })
      // 排序列表
      .sort((a: any, b: any) => b.version.localeCompare(a.version, undefined, {numeric: true, sensitivity: 'base'}))
  versionData.value.neoForge = neoForgeVersions
  pager.value.neoForge.total = neoForgeVersions.length
}
// 获取 Purpur 支持的 Minecraft 版本
const fetchPurpurMinecraftVersions = async () => {
  loading.value.purpur = true
  hasError.value.purpur = false
  isCorsError.value.purpur = false
  try {
    const resp = await fetch('https://api.purpurmc.org/v2/purpur')
    if (!resp.ok) throw new Error('无法加载 Purpur 版本列表')
    const data = await resp.json()
    purpurMinecraftVersions.value = data.versions || []
    purpurSelectedMcVersion.value = data.metadata?.current || (data.versions?.[0] || '')
    await fetchPurpurBuilds()
  } catch (e: any) {
    hasError.value.purpur = true
    errorMessage.value = e.message || '未知错误'
    isCorsError.value.purpur = e.message?.includes('CORS')
  } finally {
    loading.value.purpur = false
  }
}
// 获取 Purpur 构建号
const fetchPurpurBuilds = async () => {
  if (!purpurSelectedMcVersion.value) return
  loading.value.purpur = true
  hasError.value.purpur = false
  isCorsError.value.purpur = false
  try {
    const resp = await fetch(`https://api.purpurmc.org/v2/purpur/${purpurSelectedMcVersion.value}`)
    if (!resp.ok) throw new Error('无法加载 Purpur 构建号')
    const data = await resp.json()
    purpurBuilds.value = data.builds?.all || []
    purpurSelectedBuild.value = data.builds?.latest || (data.builds?.all?.[0] || '')
    await fetchPurpurBuildDetail()
  } catch (e: any) {
    hasError.value.purpur = true
    errorMessage.value = e.message || '未知错误'
    isCorsError.value.purpur = e.message?.includes('CORS')
  } finally {
    loading.value.purpur = false
  }
}
// 获取 Purpur 构建详情
const fetchPurpurBuildDetail = async () => {
  if (!purpurSelectedMcVersion.value || !purpurSelectedBuild.value) return
  loading.value.purpur = true
  hasError.value.purpur = false
  isCorsError.value.purpur = false
  try {
    const resp = await fetch(`https://api.purpurmc.org/v2/purpur/${purpurSelectedMcVersion.value}/${purpurSelectedBuild.value}`)
    if (!resp.ok) throw new Error('无法加载 Purpur 构建详情')
    purpurBuildDetail.value = await resp.json()
  } catch (e: any) {
    hasError.value.purpur = true
    errorMessage.value = e.message || '未知错误'
    isCorsError.value.purpur = e.message?.includes('CORS')
  } finally {
    loading.value.purpur = false
  }
}
// Purpur 下载
const handlePurpurDownload = () => {
  if (!purpurSelectedMcVersion.value || !purpurSelectedBuild.value) return
  const url = `https://api.purpurmc.org/v2/purpur/${purpurSelectedMcVersion.value}/${purpurSelectedBuild.value}/download`
  const filename = `purpur-${purpurSelectedMcVersion.value}-${purpurSelectedBuild.value}.jar`
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.target = '_blank'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
// Purpur 选择变化
const handlePurpurMcVersionChange = async (val: string) => {
  purpurSelectedMcVersion.value = val
  await fetchPurpurBuilds()
}
const handlePurpurBuildChange = async (val: string) => {
  purpurSelectedBuild.value = val
  await fetchPurpurBuildDetail()
}
// 处理下载
const handleDownload = async (e: MouseEvent, name: string, versionUrl: string, type: string) => {
  if (!versionUrl) return
  e.preventDefault()
  loading.value[type] = true
  try {
    if (type === 'native') {
      // 第一步：获取版本`JSON`数据
      const resp = await fetch(versionUrl)
      if (!resp.ok) {
        throw new Error(`无法加载版本数据: ${resp.statusText}`)
      }
      const versionData = await resp.json()
      // 第二步：解析`JSON`数据获取下载地址
      const serverUrl = versionData?.downloads?.server?.url
      if (!serverUrl) {
        throw new Error(`未找到符合的下载地址: ${serverUrl}`)
      }
      // 第三步：触发动态下载
      await blob(name, serverUrl)
    }
    // 其他类型直接下载
    else {
      await blob(name, versionUrl)
    }
    notification.success({
      duration: 4000,
      content: '下载成功',
      keepAliveOnHover: true
    })
  } catch (error) {
    notification.error({
      duration: 4000,
      content: '下载出错',
      meta: error.message,
      keepAliveOnHover: true
    })
  } finally {
    loading.value[type] = false
  }
}
// 下载文件
const blob = async (name: string, url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`网络响应不正常: ${response.status}`)
  }
  const blob = await response.blob()
  const tempLink = document.createElement('a')
  tempLink.download = name
  tempLink.style.display = 'none'
  tempLink.href = window.URL.createObjectURL(blob)
  document.body.appendChild(tempLink)
  tempLink.click()
  document.body.removeChild(tempLink)
  window.URL.revokeObjectURL(tempLink.href)
}
// 获取数据
const fetchData = async (type: string) => {
  if (loading.value[type]) return
  loading.value[type] = true
  hasError.value[type] = false
  try {
    await {
      native: fetchNativeVersions,
      fabric: fetchFabricVersions,
      forge: fetchForgeVersions,
      neoForge: fetchNeoForgeVersions,
      purpur: fetchPurpurMinecraftVersions
    }[type]()
  } catch (error) {
    hasError.value[type] = true
    // 判断是否为`CORS`错误
    if (error instanceof TypeError) {
      errorMessage.value = ''
      isCorsError.value[type] = true
    } else {
      errorMessage.value = error.message
    }
  } finally {
    loading.value[type] = false
  }
}
// 获取分页数据
const getPaginatedData = (type: string) => {
  const {pageNum, pageSize} = pager.value[type]
  return versionData.value[type].slice(0, pageNum * pageSize)
}
// 处理标签页切换
const handleTabChange = (activeTab: string) => {
  const type = activeTab as 'native' | 'fabric' | 'forge' | 'neoForge' | 'purpur'
  if (!versionData.value[type].length && !loading.value[type]) {
    fetchData(type)
  }
}
// 加载更多
const loadMore = (type: string) => {
  if (pager.value[type].pageNum * pager.value[type].pageSize < pager.value[type].total) {
    pager.value[type].pageNum += 1
  }
}
// 卡片分页自适应
const rowsPerPage = 3
const cardsPerRow = ref(4)
let cardGridObserver: ResizeObserver | null = null
const cardGridRef = ref<HTMLElement | null>(null)
const updateCardsPerRow = () => {
  nextTick(() => {
    const grid = cardGridRef.value
    if (!grid || !(grid instanceof HTMLElement)) return
    const style = window.getComputedStyle(grid)
    const colCount = style.gridTemplateColumns.split(' ').length
    if (colCount > 0) {
      cardsPerRow.value = colCount
      // 动态调整每页数量
      types.forEach(type => {
        pager.value[type].pageSize = colCount * rowsPerPage
        pager.value[type].pageNum = 1
      })
    }
  })
}
// 监听窗口变化和 DOM 变化
onMounted(() => {
  fetchData('native')
  fetchPurpurMinecraftVersions()
  window.addEventListener('resize', updateCardsPerRow)
  nextTick(() => {
    if (cardGridRef.value && cardGridRef.value instanceof HTMLElement) {
      cardGridObserver = new ResizeObserver(() => {
        updateCardsPerRow()
      })
      cardGridObserver.observe(cardGridRef.value)
    }
  })
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCardsPerRow)
  if (cardGridObserver) {
    cardGridObserver.disconnect()
    cardGridObserver = null
  }
})
watch(cardGridRef, (val) => {
  if (cardGridObserver) {
    cardGridObserver.disconnect()
  }
  if (val && val instanceof HTMLElement) {
    cardGridObserver = new ResizeObserver(() => {
      updateCardsPerRow()
    })
    cardGridObserver.observe(val)
  }
}, {flush: 'post'})
// 计算每页需要补齐的空卡片数，避免 RangeError
const emptyCardCount = (type: string) => {
  const len = getPaginatedData(type).length
  if (!cardsPerRow.value || len === 0) return 0
  const mod = len % cardsPerRow.value
  return mod === 0 ? 0 : cardsPerRow.value - mod
}
</script>