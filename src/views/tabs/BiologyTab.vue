<template>
  <div style="padding: 0 20px">
    <n-input
        v-model:value="searchQuery"
        placeholder="搜索生物..."
        clearable
        style="margin-bottom: 20px; width: 100%"
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
        v-for="n in emptyCount"
        :key="`empty-${n}`"
        class="modern-card"
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
import {computed, nextTick, onMounted, ref, watch} from 'vue'
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

defineEmits<Emits>();
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
  emptyCardCount,
  hasMore
} = usePagination(type)

const paginatedData = computed(() => getPaginatedData(filteredData.value))
const emptyCount = computed(() => emptyCardCount(paginatedData.value.length))

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
 * 监听窗口大小变化
 */
const handleResize = (): void => {
  nextTick(() => {
    if (gridRef.value) {
      const colCount = window.getComputedStyle(gridRef.value).gridTemplateColumns.split(' ').length
      if (colCount > 0) {
        pager.value.pageSize = colCount * 3
      }
    }
  })
}

onMounted(() => {
  setTotal(allData.value.length)
  window.addEventListener('resize', handleResize)
  nextTick(() => {
    if (gridRef.value) {
      new ResizeObserver(() => handleResize()).observe(gridRef.value)
    }
    handleResize()
  })
})

watch(searchQuery, () => filterData())
</script>
