<!--suppress ExceptionCaughtLocallyJS, JSValidateTypes, JSUnresolvedReference -->
<template>
  <div class="main-center-wrapper">
    <n-config-provider :theme="darkTheme" :theme-overrides="theme.themeOverrides">
      <n-layout class="main-center-content" style="height: 900px; width: 1200px;">
        <n-tabs animated justify-content="center" size="large" type="line" @update:value="handleTabChange">
          <n-tab-pane v-for="type in types" :key="type" :name="type"
                      :tab="`${type.charAt(0).toUpperCase()}${type.slice(1)}`">
            <n-spin :show="loading[type]" stroke="rgba(255,255,255, 0.4)">
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
                  <div style="max-width: 600px; margin: 0 auto;">
                    <n-space vertical size="large">
                      <n-space align="center">
                        <span>选择 Minecraft 版本：</span>
                        <n-select
                          style="min-width: 160px"
                          :options="purpurMinecraftVersions.map(v => ({ label: v, value: v }))"
                          v-model:value="purpurSelectedMcVersion"
                          @update:value="handlePurpurMcVersionChange"
                          :loading="loading.purpur"
                        />
                        <span>选择 Purpur 构建：</span>
                        <n-select
                          style="min-width: 120px"
                          :options="purpurBuilds.map(b => ({ label: b, value: b }))"
                          v-model:value="purpurSelectedBuild"
                          @update:value="handlePurpurBuildChange"
                          :loading="loading.purpur"
                        />
                      </n-space>
                      <n-card v-if="purpurBuildDetail" size="small" :bordered="false" style="background:rgba(255,255,255,0.04);">
                        <template #header>
                          <span>构建详情</span>
                        </template>
                        <div>
                          <div>项目: {{ purpurBuildDetail.project }}</div>
                          <div>MC版本: {{ purpurBuildDetail.version }}</div>
                          <div>构建号: {{ purpurBuildDetail.build }}</div>
                          <div>构建时间: {{ purpurBuildDetail.timestamp ? new Date(purpurBuildDetail.timestamp).toLocaleString() : '' }}</div>
                          <div>提交数: {{ purpurBuildDetail.commits?.length || 0 }}</div>
                          <div v-if="purpurBuildDetail.commits && purpurBuildDetail.commits.length">
                            <n-collapse>
                              <n-collapse-item title="提交记录" name="commits">
                                <ul style="padding-left: 1em;">
                                  <li v-for="c in purpurBuildDetail.commits" :key="c.hash">
                                    <div><b>{{ c.author }}</b> ({{ c.email }})</div>
                                    <div style="font-size:12px;white-space:pre-line;">{{ c.description }}</div>
                                    <div style="font-size:12px;color:#aaa;">{{ c.hash }} | {{ c.timestamp ? new Date(c.timestamp).toLocaleString() : '' }}</div>
                                  </li>
                                </ul>
                              </n-collapse-item>
                            </n-collapse>
                          </div>
                        </div>
                        <template #footer>
                          <n-button type="primary" @click="handlePurpurDownload" :disabled="!purpurSelectedMcVersion || !purpurSelectedBuild">
                            下载
                          </n-button>
                        </template>
                      </n-card>
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
                      <div v-if="row.date && row.date !== '无' && row.date !== '--'" class="modern-card-meta">日期：{{ row.date }}</div>
                      <n-button type="primary" size="small" class="modern-card-btn" @click="handleDownload($event, row.name, row.url, row.type)">
                        下载
                      </n-button>
                    </div>
                    <div
                      v-for="n in emptyCardCount(type)"
                      :key="'empty-'+n+'-'+pager[type].pageNum"
                      class="modern-card empty-card"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div style="text-align: center">
                    <n-button
                        :disabled="pager[type].pageNum * pager[type].pageSize > pager[type].total" ghost type="info"
                        @click="loadMore(type)">
                      加载更多
                    </n-button>
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
import "@/common/css/index.css";
import {onMounted, ref, watch, nextTick, onBeforeUnmount} from 'vue'
import {
  createDiscreteApi,
  darkTheme,
  NAlert,
  NButton,
  NConfigProvider,
  NLayout,
  NSpin,
  NTabPane,
  NTabs
} from 'naive-ui'
// 错误信息
const errorMessage = ref('');
// 类型数组
const types = ['native', 'fabric', 'forge', 'purpur'];
// 主题配置
const theme = {
  // 主题覆盖
  themeOverrides: {
    common: {
      primaryColor: '#1866B6'
    }
  },
  // 表格配置
  table: {
    size: 'small',
    striped: true,
  }
};
// 通知组件
const {notification} = createDiscreteApi(['notification'], {
  configProviderProps: {
    theme: darkTheme,
    themeOverrides: theme.themeOverrides
  }
});
// 数据结构
const versionData = ref({
  native: [],
  fabric: [],
  forge: [],
  purpur: []
});
// 分页信息
const pager = ref({
  native: {pageNum: 1, pageSize: 15, total: 0},
  fabric: {pageNum: 1, pageSize: 15, total: 0},
  forge: {pageNum: 1, pageSize: 15, total: 0},
  purpur: {pageNum: 1, pageSize: 15, total: 0}
});
// 加载状态
const loading = ref({
  native: false,
  fabric: false,
  forge: false,
  purpur: false
});
// 错误状态
const hasError = ref({
  native: false,
  fabric: false,
  forge: false,
  purpur: false
});
// `Cors`错误状态
const isCorsError = ref({
  native: false,
  fabric: false,
  forge: false,
  purpur: false
});
// Purpur 相关状态
const purpurMinecraftVersions = ref<string[]>([]);
const purpurSelectedMcVersion = ref<string>('');
const purpurBuilds = ref<string[]>([]);
const purpurSelectedBuild = ref<string>('');
const purpurBuildDetail = ref<any>(null);
// 获取原版信息
const fetchNativeVersions = async () => {
  const response = await fetch('https://launchermeta.mojang.com/mc/game/version_manifest.json');
  if (!response.ok) {
    throw new Error(`无法加载原版数据：${response.statusText}`);
  }
  const manifest = await response.json();
  if (!manifest.versions || !manifest.versions.length) {
    throw new Error('原版数据格式错误，无法解析');
  }
  const versions = manifest.versions
      // 定义列表结构
      .map((v: any) => ({
        name: `minecraft-server-${v.id}.jar`,
        version: `${v.type.charAt(0).toUpperCase()}${v.type.slice(1)}`,
        date: new Date(v.releaseTime).toLocaleDateString(),
        type: types[0],
        url: v.url
      }));
  versionData.value.native = versions;
  pager.value.native.total = versions.length;
}
// 获取 Fabric 信息
const fetchFabricVersions = async () => {
  const versionsResponse = await fetch('https://meta.fabricmc.net/v2/versions/');
  if (!versionsResponse.ok) {
    throw new Error(`无法加载 Fabric 数据：${versionsResponse.statusText}`);
  }
  const versionsData = await versionsResponse.json();
  if (!versionsData.game || !versionsData.game.length || !versionsData.loader || !versionsData.installer) {
    throw new Error('Fabric 数据格式错误，无法解析');
  }
  // 组合列表数据
  const stableLoaderVersions = versionsData.loader.filter((lv: any) => lv.stable) || [];
  const stableInstallerVersions = versionsData.installer.filter((iv: any) => iv.stable) || [];
  const fabricVersions = (versionsData.game.filter((gv: any) => gv.stable) || [])
      // 定义列表结构
      .map((gameVersion: any) => {
        const serverVersion = gameVersion.version;
        const loaderVersion = stableLoaderVersions.find((lv: any) => lv.version.startsWith(serverVersion))?.version || stableLoaderVersions[0].version;
        const installerVersion = stableInstallerVersions[0].version;
        return {
          name: `fabric-server-mc.${serverVersion}-loader.${loaderVersion}-launcher.${installerVersion}.jar`,
          version: serverVersion,
          date: '无',
          type: types[1],
          url: `https://meta.fabricmc.net/v2/versions/loader/${serverVersion}/${loaderVersion}/${installerVersion}/server/jar`
        };
      })
      // 排序列表
      .sort((a: any, b: any) => b.version.localeCompare(a.version, undefined, {
        numeric: true,
        sensitivity: 'base'
      }));
  versionData.value.fabric = fabricVersions;
  pager.value.fabric.total = fabricVersions.length;
}
// 获取 Forge 信息
const fetchForgeVersions = async () => {
  const response = await fetch('https://files.minecraftforge.net/net/minecraftforge/forge/promotions_slim.json');
  if (!response.ok) {
    throw new Error(`无法加载 Forge 数据：${response.statusText}`);
  }
  const promotions = await response.json();
  if (!promotions.promos) {
    throw new Error('Forge 数据格式错误，无法解析');
  }
  // 组合列表数据
  const forgeVersions = Object.entries(promotions.promos)
      .filter(([key]: [string, any]) => key.endsWith('-latest'))
      // 定义列表结构
      .map(([key, value]) => {
        const minecraftVersion = key.split('-')[0] || '';
        return {
          name: `forge-server-mc.${minecraftVersion}-${value}-installer.jar`,
          version: minecraftVersion,
          date: '无',
          type: types[2],
          url: `https://maven.minecraftforge.net/net/minecraftforge/forge/${minecraftVersion}-${value}/forge-${minecraftVersion}-${value}-installer.jar`
        };
      })
      // 排序列表
      .sort((a: any, b: any) => b.version.localeCompare(a.version, undefined, {numeric: true, sensitivity: 'base'}));
  versionData.value.forge = forgeVersions;
  pager.value.forge.total = forgeVersions.length;
}
// 获取 Purpur 支持的 Minecraft 版本
const fetchPurpurMinecraftVersions = async () => {
  loading.value.purpur = true;
  hasError.value.purpur = false;
  isCorsError.value.purpur = false;
  try {
    const resp = await fetch('https://api.purpurmc.org/v2/purpur');
    if (!resp.ok) throw new Error('无法加载 Purpur 版本列表');
    const data = await resp.json();
    purpurMinecraftVersions.value = data.versions || [];
    purpurSelectedMcVersion.value = data.metadata?.current || (data.versions?.[0] || '');
    await fetchPurpurBuilds();
  } catch (e: any) {
    hasError.value.purpur = true;
    errorMessage.value = e.message || '未知错误';
    isCorsError.value.purpur = e.message?.includes('CORS');
  } finally {
    loading.value.purpur = false;
  }
};
// 获取 Purpur 构建号
const fetchPurpurBuilds = async () => {
  if (!purpurSelectedMcVersion.value) return;
  loading.value.purpur = true;
  hasError.value.purpur = false;
  isCorsError.value.purpur = false;
  try {
    const resp = await fetch(`https://api.purpurmc.org/v2/purpur/${purpurSelectedMcVersion.value}`);
    if (!resp.ok) throw new Error('无法加载 Purpur 构建号');
    const data = await resp.json();
    purpurBuilds.value = data.builds?.all || [];
    purpurSelectedBuild.value = data.builds?.latest || (data.builds?.all?.[0] || '');
    await fetchPurpurBuildDetail();
  } catch (e: any) {
    hasError.value.purpur = true;
    errorMessage.value = e.message || '未知错误';
    isCorsError.value.purpur = e.message?.includes('CORS');
  } finally {
    loading.value.purpur = false;
  }
};
// 获取 Purpur 构建详情
const fetchPurpurBuildDetail = async () => {
  if (!purpurSelectedMcVersion.value || !purpurSelectedBuild.value) return;
  loading.value.purpur = true;
  hasError.value.purpur = false;
  isCorsError.value.purpur = false;
  try {
    const resp = await fetch(`https://api.purpurmc.org/v2/purpur/${purpurSelectedMcVersion.value}/${purpurSelectedBuild.value}`);
    if (!resp.ok) throw new Error('无法加载 Purpur 构建详情');
    purpurBuildDetail.value = await resp.json();
  } catch (e: any) {
    hasError.value.purpur = true;
    errorMessage.value = e.message || '未知错误';
    isCorsError.value.purpur = e.message?.includes('CORS');
  } finally {
    loading.value.purpur = false;
  }
};
// Purpur 下载
const handlePurpurDownload = () => {
  if (!purpurSelectedMcVersion.value || !purpurSelectedBuild.value) return;
  const url = `https://api.purpurmc.org/v2/purpur/${purpurSelectedMcVersion.value}/${purpurSelectedBuild.value}/download`;
  const filename = `purpur-${purpurSelectedMcVersion.value}-${purpurSelectedBuild.value}.jar`;
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
// Purpur 选择变化
const handlePurpurMcVersionChange = async (val: string) => {
  purpurSelectedMcVersion.value = val;
  await fetchPurpurBuilds();
};
const handlePurpurBuildChange = async (val: string) => {
  purpurSelectedBuild.value = val;
  await fetchPurpurBuildDetail();
};
// 处理下载
const handleDownload = async (e: MouseEvent, name: string, versionUrl: string, type: string) => {
  if (!versionUrl) return;
  e.preventDefault();
  loading.value[type] = true
  try {
    if (type === 'native') {
      // 第一步：获取版本`JSON`数据
      const resp = await fetch(versionUrl);
      if (!resp.ok) {
        throw new Error(`无法加载版本数据: ${resp.statusText}`);
      }
      const versionData = await resp.json();
      // 第二步：解析`JSON`数据获取下载地址
      const serverUrl = versionData?.downloads?.server?.url;
      if (!serverUrl) {
        throw new Error(`未找到符合的下载地址: ${serverUrl}`);
      }
      // 第三步：触发动态下载
      await blob(name, serverUrl);
    }
    // 其他类型直接下载
    else {
      await blob(name, versionUrl);
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
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`网络响应不正常: ${response.status}`);
  }
  const blob = await response.blob();
  const tempLink = document.createElement('a');
  tempLink.download = name;
  tempLink.style.display = 'none';
  tempLink.href = window.URL.createObjectURL(blob);
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  window.URL.revokeObjectURL(tempLink.href);
};
// 获取数据
const fetchData = async (type: string) => {
  if (loading.value[type]) return;
  loading.value[type] = true;
  hasError.value[type] = false;
  try {
    await {
      native: fetchNativeVersions,
      fabric: fetchFabricVersions,
      forge: fetchForgeVersions,
      purpur: fetchPurpurMinecraftVersions
    }[type]();
  } catch (error) {
    hasError.value[type] = true;
    // 判断是否为`CORS`错误
    if (error instanceof TypeError) {
      errorMessage.value = '';
      isCorsError.value[type] = true;
    } else {
      errorMessage.value = error.message;
    }
  } finally {
    loading.value[type] = false;
  }
};
// 获取分页数据
const getPaginatedData = (type: string) => {
  const {pageNum, pageSize} = pager.value[type];
  return versionData.value[type].slice(0, pageNum * pageSize);
}
// 处理标签页切换
const handleTabChange = (activeTab: string) => {
  const type = activeTab as 'native' | 'fabric' | 'forge' | 'purpur';
  if (!versionData.value[type].length && !loading.value[type]) {
    fetchData(type);
  }
}
// 加载更多
const loadMore = (type: string) => {
  if (pager.value[type].pageNum * pager.value[type].pageSize < pager.value[type].total) {
    pager.value[type].pageNum += 1;
  }
}
// 卡片分页自适应
const rowsPerPage = 3;
const cardsPerRow = ref(4);
let cardGridObserver: MutationObserver | null = null;
const cardGridRef = ref<HTMLElement | null>(null);
const updateCardsPerRow = () => {
  nextTick(() => {
    const grid = cardGridRef.value;
    if (!grid || !(grid instanceof HTMLElement)) return;
    const style = window.getComputedStyle(grid);
    const colCount = style.gridTemplateColumns.split(' ').length;
    if (colCount > 0) {
      cardsPerRow.value = colCount;
      // 动态调整每页数量
      types.forEach(type => {
        pager.value[type].pageSize = colCount * rowsPerPage;
        pager.value[type].pageNum = 1;
      });
    }
  });
};
// 监听窗口变化和 DOM 变化
onMounted(() => {
  fetchData('native');
  fetchPurpurMinecraftVersions();
  window.addEventListener('resize', updateCardsPerRow);
  nextTick(() => {
    if (cardGridRef.value && cardGridRef.value instanceof HTMLElement) {
      cardGridObserver = new MutationObserver(() => updateCardsPerRow());
      cardGridObserver.observe(cardGridRef.value, { childList: true, subtree: false });
    }
  });
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCardsPerRow);
  if (cardGridObserver) {
    cardGridObserver.disconnect();
    cardGridObserver = null;
  }
});
watch(cardGridRef, (val) => {
  updateCardsPerRow();
  if (cardGridObserver) {
    cardGridObserver.disconnect();
    cardGridObserver = null;
  }
  if (val && val instanceof HTMLElement) {
    cardGridObserver = new MutationObserver(() => updateCardsPerRow());
    cardGridObserver.observe(val, { childList: true, subtree: false });
  }
});

// 计算每页需要补齐的空卡片数，避免 RangeError
function emptyCardCount(type: string) {
  const len = getPaginatedData(type).length;
  if (!cardsPerRow.value || len === 0) return 0;
  const mod = len % cardsPerRow.value;
  return mod === 0 ? 0 : cardsPerRow.value - mod;
}
</script>