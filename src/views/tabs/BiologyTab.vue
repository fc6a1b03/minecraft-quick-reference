<template>
  <div class="biology-search-wrapper">
    <n-input
        v-model:value="searchQuery"
        placeholder="搜索生物..."
        clearable
        class="biology-search-input"
    />
  </div>
  <div class="card-grid" ref="gridRef">
    <BiologyCard
        v-for="mob in paginatedData"
        :key="mob.name"
        :name="mob.name"
        :category="mob.category"
        :image="mob.image"
        :short-description="mob.shortDescription"
        @click="showDetail(mob)"
    />
    <div
        v-for="n in emptySlots"
        :key="`empty-${n}`"
        class="modern-card modern-card--empty"
        aria-hidden="true"
    />
  </div>
  <div class="load-more-container">
    <n-button
        class="load-more-button"
        @click="loadMore"
        :disabled="!hasMore"
    >
      加载更多
    </n-button>
  </div>
  <BiologyModal :show="showModal" @update:show="showModal = $event" :data="currentMob"/>
</template>

<script lang="ts" setup>
import {computed, nextTick, onBeforeUnmount, onMounted, ref, watch} from 'vue'
import {NButton, NInput} from 'naive-ui'
import BiologyCard from '@/components/BiologyCard.vue'
import BiologyModal from '@/components/BiologyModal.vue'
import {usePagination} from '@/composables/usePagination'
import {biology} from '@/common/data/biology'
import type {BiologyDataItem, ServerType} from '@/types'

/**
 * 组件事件
 */
interface Emits {
  /** 更新加载状态 */
  (e: 'update:loading', value: boolean): void
}

defineEmits<Emits>()
const type: ServerType = 'biology'
const searchQuery = ref<string>('')
const showModal = ref<boolean>(false)
const allData = ref<BiologyDataItem[]>(biology)
const filteredData = ref<BiologyDataItem[]>(biology)
const currentMob = ref<BiologyDataItem>({
  name: '',
  category: '',
  image: '',
  shortDescription: '',
  description: '',
  link: ''
})
const gridRef = ref<HTMLElement | null>(null)
let resizeObserver: ResizeObserver | null = null

const {
  pager,
  getPaginatedData,
  loadMore,
  setTotal,
  updatePageSize,
  hasMore
} = usePagination(type)

const paginatedData = computed(() => getPaginatedData(filteredData.value))

/** 当前实际列数 */
const currentCols = ref(4)

/** 计算空卡片数量 */
const emptySlots = computed(() => {
  const dataCount = paginatedData.value.length
  if (dataCount === 0 || currentCols.value <= 1) return 0
  const mod = dataCount % currentCols.value
  return mod === 0 ? 0 : currentCols.value - mod
})

/**
 * 过滤数据
 */
const filterData = (): void => {
  if (!searchQuery.value) {
    filteredData.value = allData.value
  } else {
    const search = searchQuery.value.toLowerCase()
    filteredData.value = allData.value.filter(mob =>
        mob.name.toLowerCase().includes(search) ||
        mob.category.toLowerCase().includes(search) ||
        mob.shortDescription.toLowerCase().includes(search)
    )
  }
  pager.value.pageNum = 1
  setTotal(filteredData.value.length)
}

/**
 * 显示详情
 */
const showDetail = (mob: BiologyDataItem): void => {
  currentMob.value = mob
  showModal.value = true
}

/**
 * 监听网格大小变化
 */
const handleResize = async (): Promise<void> => {
  await updatePageSize(gridRef.value, false)
  // 更新当前列数用于空卡片计算
  await nextTick(() => {
    if (gridRef.value) {
      const colCount = window.getComputedStyle(gridRef.value).gridTemplateColumns.split(' ').length
      if (colCount > 0) {
        currentCols.value = colCount
      }
    }
  })
}

/**
 * 设置 ResizeObserver
 */
const setupResizeObserver = (): void => {
  if (gridRef.value) {
    resizeObserver = new ResizeObserver(() => handleResize())
    resizeObserver.observe(gridRef.value)
  }
}

/**
 * 清理 ResizeObserver
 */
const cleanupResizeObserver = (): void => {
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
}

onMounted(() => {
  setTotal(allData.value.length)
  nextTick(() => {
    setupResizeObserver()
    handleResize()
  })
})

onBeforeUnmount(() => cleanupResizeObserver())

watch(searchQuery, () => filterData())
</script>
