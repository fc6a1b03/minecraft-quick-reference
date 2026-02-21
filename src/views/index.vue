<template>
  <div class="main-center-wrapper">
    <n-config-provider :theme="darkTheme" :theme-overrides="theme.themeOverrides">
      <n-layout class="main-center-content">
        <n-tabs
            animated
            justify-content="space-evenly"
            size="large"
            type="bar"
        >
          <n-tab-pane
              v-for="type in types"
              :key="type"
              :name="type"
              :tab="formatTabName(type)"
          >
            <template v-if="type === 'purpur' || type === 'folia'">
              <ErrorAlert
                  v-if="hasError[type]"
                  :is-cors-error="isCorsError[type]"
                  :error-message="errorMessage[type]"
              />
              <PurpurTab
                  v-if="type === 'purpur'"
                  @error="(msg: string, cors: boolean) => handleError('purpur', msg, cors)"
              />
              <FoliaTab
                  v-else
                  @error="(msg: string, cors: boolean) => handleError('folia', msg, cors)"
              />
            </template>
            <n-spin v-else :show="loading[type]" stroke="rgba(76, 201, 240, 0.7)">
              <ErrorAlert
                  v-if="hasError[type]"
                  :is-cors-error="isCorsError[type]"
                  :error-message="errorMessage[type]"
              />
              <template v-else>
                <NativeTab
                    v-if="type === 'native'"
                    @update:loading="(v: boolean) => loading.native = v"
                    @error="(msg: string, cors: boolean) => handleError('native', msg, cors)"
                />
                <FabricTab
                    v-else-if="type === 'fabric'"
                    @update:loading="(v: boolean) => loading.fabric = v"
                    @error="(msg: string, cors: boolean) => handleError('fabric', msg, cors)"
                />
                <ForgeTab
                    v-else-if="type === 'forge'"
                    @update:loading="(v: boolean) => loading.forge = v"
                    @error="(msg: string, cors: boolean) => handleError('forge', msg, cors)"
                />
                <NeoForgeTab
                    v-else-if="type === 'neoForge'"
                    @update:loading="(v: boolean) => loading.neoForge = v"
                    @error="(msg: string, cors: boolean) => handleError('neoForge', msg, cors)"
                />
                <BiologyTab
                    v-else-if="type === 'biology'"
                    @update:loading="(v: boolean) => loading.biology = v"
                />
              </template>
            </n-spin>
          </n-tab-pane>
        </n-tabs>
      </n-layout>
    </n-config-provider>
  </div>
</template>

<script lang="ts" setup>
import '@/common/css/index.css'
import {defineAsyncComponent, ref} from 'vue'
import {darkTheme, NConfigProvider, NLayout, NSpin, NTabPane, NTabs} from 'naive-ui'
import ErrorAlert from '@/components/ErrorAlert.vue'
import type {ServerType} from '@/types'

const FoliaTab = defineAsyncComponent(() => import('./tabs/FoliaTab.vue'))
const ForgeTab = defineAsyncComponent(() => import('./tabs/ForgeTab.vue'))
const NativeTab = defineAsyncComponent(() => import('./tabs/NativeTab.vue'))
const FabricTab = defineAsyncComponent(() => import('./tabs/FabricTab.vue'))
const PurpurTab = defineAsyncComponent(() => import('./tabs/PurpurTab.vue'))
const BiologyTab = defineAsyncComponent(() => import('./tabs/BiologyTab.vue'))
const NeoForgeTab = defineAsyncComponent(() => import('./tabs/NeoForgeTab.vue'))

/** 服务器类型列表 */
const types: ServerType[] = ['native', 'fabric', 'forge', 'neoForge', 'purpur', 'folia', 'biology']

/** 主题配置 */
const theme = {
  themeOverrides: {
    common: {
      primaryColor: '#1866B6'
    }
  }
}

/** 错误信息 */
const errorMessage = ref<Record<ServerType, string>>({
  native: '',
  fabric: '',
  forge: '',
  neoForge: '',
  purpur: '',
  folia: '',
  biology: ''
})

/** 加载状态 */
const loading = ref<Record<ServerType, boolean>>({
  native: false,
  fabric: false,
  forge: false,
  neoForge: false,
  purpur: false,
  folia: false,
  biology: false
})

/** 错误状态 */
const hasError = ref<Record<ServerType, boolean>>({
  native: false,
  fabric: false,
  forge: false,
  neoForge: false,
  purpur: false,
  folia: false,
  biology: false
})

/** CORS 错误状态 */
const isCorsError = ref<Record<ServerType, boolean>>({
  native: false,
  fabric: false,
  forge: false,
  neoForge: false,
  purpur: false,
  folia: false,
  biology: false
})

/**
 * 格式化页签名称
 * @param type 服务器类型
 */
const formatTabName = (type: ServerType): string => {
  const nameMap: Record<ServerType, string> = {
    native: 'Native',
    fabric: 'Fabric',
    forge: 'Forge',
    neoForge: 'NeoForge',
    purpur: 'Purpur',
    folia: 'Folia',
    biology: 'Biology'
  }
  return nameMap[type] || type
}

/**
 * 处理错误
 * @param type 服务器类型
 * @param message 错误信息
 * @param isCors 是否为 CORS 错误
 */
const handleError = (type: ServerType, message: string, isCors: boolean): void => {
  errorMessage.value[type] = message
  hasError.value[type] = true
  isCorsError.value[type] = isCors
}
</script>
