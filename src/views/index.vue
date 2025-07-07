<!--suppress ExceptionCaughtLocallyJS, JSValidateTypes -->
<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="theme.themeOverrides">
    <n-layout style="padding: 0 5%;height: 100vh;overflow-y: auto;">
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
              <n-data-table
                  :columns="columns"
                  :data="getPaginatedData(type)"
                  :size="'small'"
                  :striped="true"
              />
              <div style="margin-top: 1rem; text-align: center">
                <n-button
                    :disabled="pager[type].pageNum * pager[type].pageSize > pager[type].total" ghost type="info"
                    @click="loadMore(type)">
                  加载更多
                </n-button>
              </div>
            </template>
          </n-spin>
        </n-tab-pane>
      </n-tabs>
    </n-layout>
  </n-config-provider>
</template>
<style>
.cool-link {
  color: #6298ff;
  cursor: pointer;
  font-size: 14px;
  display: inline;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
}

.cool-link:hover {
  color: #4a76e6;
  text-decoration: underline;
  transform: translateX(2px);
}
</style>
<script lang="tsx" setup>
import {h, onMounted, ref} from 'vue'
import {
  createDiscreteApi,
  darkTheme,
  NAlert,
  NButton,
  NConfigProvider,
  NDataTable,
  NLayout,
  NSpin,
  NTabPane,
  NTabs
} from 'naive-ui'
// 错误信息
const errorMessage = ref('');
// 类型数组
const types = ['native', 'fabric', 'forge'];
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
  forge: []
});
// 分页信息
const pager = ref({
  native: {pageNum: 1, pageSize: 15, total: 0},
  fabric: {pageNum: 1, pageSize: 15, total: 0},
  forge: {pageNum: 1, pageSize: 15, total: 0}
});
// 加载状态
const loading = ref({
  native: false,
  fabric: false,
  forge: false
});
// 错误状态
const hasError = ref({
  native: false,
  fabric: false,
  forge: false
});
// `Cors`错误状态
const isCorsError = ref({
  native: false,
  fabric: false,
  forge: false
});
// 表格列配置
const columns = [
  {
    title: '服务',
    key: 'name',
    minWidth: 60,
    fixed: 'center',
    render(row: any) {
      return h(
          'a',
          {
            class: 'cool-link',
            onClick: (e: MouseEvent) => handleDownload(e, row.name, row.url, row.type)
          },
          row.name
      );
    }
  },
  {
    title: '版本',
    key: 'version',
    minWidth: 50,
    fixed: 'center',
    render(row: any) {
      return row.version || '';
    }
  },
  {
    title: '日期',
    key: 'date',
    minWidth: 50,
    fixed: 'center',
    render(row: any) {
      return row.date || '';
    }
  }
];
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
      forge: fetchForgeVersions
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
  const type = activeTab as 'native' | 'fabric' | 'forge';
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
// 初始化
onMounted(() => fetchData('native'));
</script>