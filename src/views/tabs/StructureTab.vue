<template>
  <div class="structure-search-wrapper">
    <n-input
        v-model:value="searchQuery"
        placeholder="搜索结构..."
        clearable
        class="structure-search-input"
    />
  </div>
  <div class="card-grid" ref="gridRef">
    <StructureCard
        v-for="structure in paginatedData"
        :key="structure.name"
        :name="structure.name"
        :category="structure.category"
        :image="structure.image"
        :short-description="structure.shortDescription"
        @click="showDetail(structure)"
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
  <StructureModal :show="showModal" @update:show="showModal = $event" :data="currentStructure"/>
</template>

<script lang="ts" setup>
import {computed, nextTick, onBeforeUnmount, onMounted, ref, watch} from 'vue'
import {NButton, NInput} from 'naive-ui'
import StructureCard from '@/components/StructureCard.vue'
import StructureModal from '@/components/StructureModal.vue'
import {usePagination} from '@/composables/usePagination'
import {structures} from '@/common/data/structure'
import type {ServerType, StructureDataItem} from '@/types'

/**
 * 组件事件
 */
interface Emits {
  /** 更新加载状态 */
  (e: 'update:loading', value: boolean): void
}

defineEmits<Emits>()
const type: ServerType = 'structure'
const searchQuery = ref<string>('')
const showModal = ref<boolean>(false)
const allData = ref<StructureDataItem[]>(structures)
const filteredData = ref<StructureDataItem[]>(structures)
const currentStructure = ref<StructureDataItem>({
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
    filteredData.value = allData.value.filter(structure =>
        structure.name.toLowerCase().includes(search) ||
        structure.category.toLowerCase().includes(search) ||
        structure.shortDescription.toLowerCase().includes(search)
    )
  }
  pager.value.pageNum = 1
  setTotal(filteredData.value.length)
}

/**
 * 显示详情
 */
const showDetail = (structure: StructureDataItem): void => {
  currentStructure.value = structure
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
