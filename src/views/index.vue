<template>
  <div class="main-center-wrapper">
    <n-config-provider :theme="darkTheme" :theme-overrides="theme.themeOverrides">
      <n-layout class="main-center-content">
        <div class="game-header">
          <h1 class="game-title">
            <span class="title-highlight">MINECRAFT</span>
            <span class="title-sub">QUICK REFERENCE</span>
          </h1>
          <div class="title-decoration">
            <span class="decoration-line"></span>
            <span class="decoration-diamond">◆</span>
            <span class="decoration-line"></span>
          </div>
        </div>
        <n-tabs
            animated
            :justify-content="isMobile ? 'flex-start' : 'space-evenly'"
            size="large"
            type="bar"
            class="game-tabs"
            :class="{ 'game-tabs--mobile': isMobile }"
            @update:value="handleTabChange"
        >
          <n-tab-pane
              v-for="(type, index) in types"
              :key="type"
              :name="type"
              :tab="formatTabName(type)"
          >
            <template v-if="type === 'paper' || type === 'purpur' || type === 'folia'">
              <ErrorAlert
                  v-if="hasError[type]"
                  :is-cors-error="isCorsError[type]"
                  :error-message="errorMessage[type]"
              />
              <transition name="tab-content" mode="out-in">
                <PaperTab
                    v-if="type === 'paper'"
                    @error="(msg: string, cors: boolean) => handleError('paper', msg, cors)"
                    :key="'paper-tab'"
                />
                <PurpurTab
                    v-else-if="type === 'purpur'"
                    @error="(msg: string, cors: boolean) => handleError('purpur', msg, cors)"
                    :key="'purpur-tab'"
                />
                <FoliaTab
                    v-else
                    @error="(msg: string, cors: boolean) => handleError('folia', msg, cors)"
                    :key="'folia-tab'"
                />
              </transition>
            </template>
            <n-spin v-else :show="loading[type]" class="game-spinner">
              <template #description>
                <div class="custom-spinner">
                  <div class="spinner-cube"></div>
                </div>
              </template>
              <ErrorAlert
                  v-if="hasError[type]"
                  :is-cors-error="isCorsError[type]"
                  :error-message="errorMessage[type]"
              />
              <template v-else>
                <transition name="tab-content" mode="out-in">
                  <NativeTab
                      v-if="type === 'native'"
                      @update:loading="(v: boolean) => loading.native = v"
                      @error="(msg: string, cors: boolean) => handleError('native', msg, cors)"
                      :key="'native-tab'"
                  />
                  <FabricTab
                      v-else-if="type === 'fabric'"
                      @update:loading="(v: boolean) => loading.fabric = v"
                      @error="(msg: string, cors: boolean) => handleError('fabric', msg, cors)"
                      :key="'fabric-tab'"
                  />
                  <ForgeTab
                      v-else-if="type === 'forge'"
                      @update:loading="(v: boolean) => loading.forge = v"
                      @error="(msg: string, cors: boolean) => handleError('forge', msg, cors)"
                      :key="'forge-tab'"
                  />
                  <NeoForgeTab
                      v-else-if="type === 'neoForge'"
                      @update:loading="(v: boolean) => loading.neoForge = v"
                      @error="(msg: string, cors: boolean) => handleError('neoForge', msg, cors)"
                      :key="'neoForge-tab'"
                  />
                  <BiologyTab
                      v-else-if="type === 'biology'"
                      @update:loading="(v: boolean) => loading.biology = v"
                      :key="'biology-tab'"
                  />
                  <StructureTab
                      v-else-if="type === 'structure'"
                      @update:loading="(v: boolean) => loading.structure = v"
                      :key="'structure-tab'"
                  />
                </transition>
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
import {defineAsyncComponent, onMounted, onUnmounted, ref} from 'vue'
import {darkTheme, NConfigProvider, NLayout, NSpin, NTabPane, NTabs} from 'naive-ui'
import ErrorAlert from '@/components/ErrorAlert.vue'
import type {ServerType} from '@/types'

const PaperTab = defineAsyncComponent(() => import('./tabs/PaperTab.vue'))
const FoliaTab = defineAsyncComponent(() => import('./tabs/FoliaTab.vue'))
const ForgeTab = defineAsyncComponent(() => import('./tabs/ForgeTab.vue'))
const NativeTab = defineAsyncComponent(() => import('./tabs/NativeTab.vue'))
const FabricTab = defineAsyncComponent(() => import('./tabs/FabricTab.vue'))
const PurpurTab = defineAsyncComponent(() => import('./tabs/PurpurTab.vue'))
const BiologyTab = defineAsyncComponent(() => import('./tabs/BiologyTab.vue'))
const NeoForgeTab = defineAsyncComponent(() => import('./tabs/NeoForgeTab.vue'))
const StructureTab = defineAsyncComponent(() => import('./tabs/StructureTab.vue'))

/** 服务器类型列表 */
const types: ServerType[] = ['native', 'fabric', 'forge', 'neoForge', 'paper', 'purpur', 'folia', 'biology', 'structure']

/** 主题配置 */
const theme = {
  themeOverrides: {
    common: {
      primaryColor: '#00F5FF',
      primaryColorHover: '#4AEDD7',
      primaryColorPressed: '#00C8CC',
    }
  }
}

/** 错误信息 */
const errorMessage = ref<Record<ServerType, string>>({
  native: '',
  fabric: '',
  forge: '',
  neoForge: '',
  paper: '',
  purpur: '',
  folia: '',
  biology: '',
  structure: ''
})

/** 加载状态 */
const loading = ref<Record<ServerType, boolean>>({
  native: false,
  fabric: false,
  forge: false,
  neoForge: false,
  paper: false,
  purpur: false,
  folia: false,
  biology: false,
  structure: false
})

/** 错误状态 */
const hasError = ref<Record<ServerType, boolean>>({
  native: false,
  fabric: false,
  forge: false,
  neoForge: false,
  paper: false,
  purpur: false,
  folia: false,
  biology: false,
  structure: false
})

/** CORS 错误状态 */
const isCorsError = ref<Record<ServerType, boolean>>({
  native: false,
  fabric: false,
  forge: false,
  neoForge: false,
  paper: false,
  purpur: false,
  folia: false,
  biology: false,
  structure: false
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
    paper: 'Paper',
    purpur: 'Purpur',
    folia: 'Folia',
    biology: 'Biology',
    structure: 'Structure'
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

/**
 * 处理Tab切换
 * @param value 当前Tab值
 */
const handleTabChange = (value: string): void => {
  // Tab切换时的特效可以在这里添加
  console.log('Tab changed to:', value)
}

/** 是否为移动端 */
const isMobile = ref<boolean>(false)

/**
 * 检查是否为移动端
 */
const checkMobile = (): void => {
  isMobile.value = window.innerWidth <= 768
}

// 监听窗口大小变化
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
/* 游戏风格头部 */
.game-header {
  text-align: center;
  padding: 24px 20px 16px;
  position: relative;
}

.game-title {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.title-highlight {
  font-family: 'Rajdhani', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: var(--primary-color);
  text-shadow: 0 0 10px rgba(76, 201, 240, 0.5);
  letter-spacing: 0.15em;
  animation: title-glow 3s ease-in-out infinite alternate;
}

.title-sub {
  font-family: 'Rajdhani', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: var(--secondary-color);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  text-shadow: none;
}

.title-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 12px;
}

.decoration-line {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
}

.decoration-diamond {
  color: var(--primary-color);
  font-size: 12px;
  animation: diamond-pulse 2s ease-in-out infinite;
}

@keyframes title-glow {
  from {
    text-shadow: 0 0 10px rgba(76, 201, 240, 0.5);
  }
  to {
    text-shadow: 0 0 15px rgba(76, 201, 240, 0.8);
  }
}

@keyframes diamond-pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.8);
  }
}

/* Tab切换动画 */
.tab-content-enter-active,
.tab-content-leave-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.tab-content-enter-from {
  opacity: 0;
  transform: translateX(-20px) scale(0.98);
}

.tab-content-leave-to {
  opacity: 0;
  transform: translateX(20px) scale(0.98);
}

/* 自定义加载动画 */
.game-spinner :deep(.n-spin-description) {
  margin-top: 16px;
}

.game-spinner :deep(.n-base-loading) {
  display: none !important;
}

.custom-spinner {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
}

.spinner-cube {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-hover-color));
  animation: cube-rotate 1.5s infinite ease-in-out;
  border-radius: 4px;
  box-shadow: 0 0 15px rgba(76, 201, 240, 0.5);
}

@keyframes cube-rotate {
  0% {
    transform: perspective(100px) rotateX(0deg) rotateY(0deg);
  }
  25% {
    transform: perspective(100px) rotateX(90deg) rotateY(0deg);
  }
  50% {
    transform: perspective(100px) rotateX(90deg) rotateY(90deg);
  }
  75% {
    transform: perspective(100px) rotateX(180deg) rotateY(90deg);
  }
  100% {
    transform: perspective(100px) rotateX(360deg) rotateY(180deg);
  }
}

/* 响应式 */
@media (max-width: 768px) {
  .game-header {
    padding: 16px 12px 12px;
  }

  .title-highlight {
    font-size: 24px;
    letter-spacing: 0.1em;
  }

  .title-sub {
    font-size: 11px;
    letter-spacing: 0.2em;
  }

  .decoration-line {
    width: 40px;
  }

  .title-decoration {
    gap: 12px;
    margin-top: 8px;
  }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .title-highlight,
  .decoration-diamond {
    animation: none;
  }

  .tab-content-enter-active,
  .tab-content-leave-active {
    transition: none;
  }

  .spinner-cube {
    animation: none;
  }
}
</style>
