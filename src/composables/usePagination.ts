import {computed, nextTick, ref} from 'vue'
import type {Pager, ServerType} from '@/types'

const ROWS_PER_PAGE = 3

/**
 * 使用分页功能
 * @param type 服务器类型
 * @param initialPageSize 初始每页大小
 */
export const usePagination = (type: ServerType, initialPageSize: number = 15) => {
    const pager = ref<Pager>({
        pageNum: 1,
        pageSize: initialPageSize,
        total: 0
    })
    const cardsPerRow = ref(4)
    /**
     * 获取分页数据
     * @param data 完整数据数组
     */
    const getPaginatedData = <T>(data: T[]): T[] => {
        const {pageNum, pageSize} = pager.value
        return data.slice(0, pageNum * pageSize)
    }
    /**
     * 加载更多
     */
    const loadMore = (): void => {
        if (pager.value.pageNum * pager.value.pageSize < pager.value.total) {
            pager.value.pageNum += 1
        }
    }
    /**
     * 重置分页
     */
    const resetPager = (): void => {
        pager.value.pageNum = 1
    }
    /**
     * 设置总数
     * @param total 总数
     */
    const setTotal = (total: number): void => {
        pager.value.total = total
    }
    /**
     * 更新每页数量（根据卡片布局）
     * @param gridRef 网格元素引用
     * @param reset 是否重置页码（初始加载时为 true）
     */
    const updatePageSize = async (gridRef: HTMLElement | null, reset: boolean = false): Promise<void> => {
        await nextTick(() => {
            const grid = gridRef
            if (!grid || !(grid instanceof HTMLElement)) return
            const colCount = window.getComputedStyle(grid).gridTemplateColumns.split(' ').length
            if (colCount > 0) {
                const newPageSize = colCount * ROWS_PER_PAGE
                // 只在 pageSize 变化或显式重置时才更新
                if (cardsPerRow.value !== colCount || pager.value.pageSize !== newPageSize) {
                    cardsPerRow.value = colCount
                    pager.value.pageSize = newPageSize
                    if (reset) {
                        pager.value.pageNum = 1
                    }
                }
            }
        })
    }
    /**
     * 计算空卡片数量（用于填充最后一行）
     * @param currentLength 当前数据长度
     */
    const emptyCardCount = (currentLength: number): number => {
        const cardsPerRowValue = cardsPerRow.value || 4
        if (!cardsPerRowValue || currentLength === 0) return 0
        const mod = currentLength % cardsPerRowValue
        return mod === 0 ? 0 : cardsPerRowValue - mod
    }
    /**
     * 是否还有更多数据
     */
    const hasMore = computed(() => pager.value.pageNum * pager.value.pageSize < pager.value.total)
    return {
        pager,
        cardsPerRow,
        getPaginatedData,
        loadMore,
        resetPager,
        setTotal,
        updatePageSize,
        emptyCardCount,
        hasMore
    }
}

/**
 * 创建分页记录
 * @param types 类型数组
 * @param initialPageSize 初始每页大小
 */
export const createPagerRecord = (types: ServerType[], initialPageSize: number = 15) => {
    const record = {} as Record<ServerType, Pager>
    types.forEach(type => record[type] = {pageNum: 1, pageSize: initialPageSize, total: 0})
    return record
}
