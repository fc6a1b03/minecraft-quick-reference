<template>
  <n-alert show-icon title="加载失败！" type="error">
    <template #default>
      <div>
        <div v-if="isCorsError">
          <p><strong>加载数据时发生 CORS 错误。</strong></p>
          <p>您可以尝试以下解决方法：</p>
          <ul>
            <li>
              安装<a
                class="cool-link"
                href="https://webextension.org/listing/access-control.html"
                target="_blank"
              >CORS Unblock</a>浏览器插件并对该网站激活后刷新页面
            </li>
            <li>
              下载地址：
              <n-space vertical>
                <n-button
                  class="cool-link"
                  href="https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino"
                  tag="a"
                  target="_blank"
                  text
                >
                  Google Chrome
                </n-button>
                <n-button
                  class="cool-link"
                  href="https://microsoftedge.microsoft.com/addons/detail/cors-unblock/hkjklmhkbkdhlgnnfbbcihcajofmjgbh"
                  tag="a"
                  target="_blank"
                  text
                >
                  Microsoft Edge
                </n-button>
                <n-button
                  class="cool-link"
                  href="https://addons.mozilla.org/zh-CN/firefox/addon/cors-unblock/"
                  tag="a"
                  target="_blank"
                  text
                >
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

<script lang="ts" setup>
import {NAlert, NSpace, NButton} from 'naive-ui'

/**
 * 组件属性
 */
interface Props {
  /** 是否为 CORS 错误 */
  isCorsError: boolean
  /** 错误信息 */
  errorMessage: string
}

defineProps<Props>()
</script>
