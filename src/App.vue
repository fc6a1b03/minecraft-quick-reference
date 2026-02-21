<template>
  <div id="app" class="game-app">
    <!-- 粒子背景 -->
    <ParticleBackground/>
    <!-- 扫描线效果 -->
    <div class="scanlines-overlay"></div>
    <!-- 主要内容 -->
    <router-view v-slot="{ Component }">
      <transition name="page-fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
    <!-- 全局加载器 -->
    <GameLoader :visible="globalLoading" :show-progress="false"/>
  </div>
</template>

<script lang="ts" setup>
import {provide, ref} from 'vue'
import ParticleBackground from '@/components/ParticleBackground.vue'
import GameLoader from '@/components/GameLoader.vue'

/**
 * 全局加载状态
 */
const globalLoading = ref(false)

/**
 * 设置全局加载状态
 * @param loading 是否加载中
 */
const setGlobalLoading = (loading: boolean): void => {
  globalLoading.value = loading
}

// 提供给子组件使用
provide('setGlobalLoading', setGlobalLoading)
provide('globalLoading', globalLoading)
</script>

<style>
#app {
  min-height: 100vh;
  position: relative;
}

.game-app {
  min-height: 100vh;
  position: relative;
  z-index: 1;
}

/* 扫描线覆盖层 */
.scanlines-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9998;
  background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.02) 0px,
      rgba(0, 0, 0, 0.02) 1px,
      transparent 1px,
      transparent 3px
  );
  opacity: 0.5;
}

/* 页面过渡动画 */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.98);
}

/* 全局游戏风格样式覆盖 */
.n-config-provider {
  --n-primary-color: #00F5FF !important;
  --n-primary-color-hover: #4AEDD7 !important;
  --n-primary-color-pressed: #00C8CC !important;
}

/* 滚动条游戏风格 */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: #25253d;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #4cc9f0, #4895ef);
  border-radius: 5px;
  border: 2px solid #25253d;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #4895ef, #4cc9f0);
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .scanlines-overlay {
    display: none;
  }

  .page-fade-enter-active,
  .page-fade-leave-active {
    transition: none;
  }

  .page-fade-enter-from,
  .page-fade-leave-to {
    opacity: 1;
    transform: none;
  }
}
</style>
