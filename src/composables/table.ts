import { ComputedRef, computed, Ref, unref, ref } from 'vue'
import { useProOptions } from './index'
import {
  filterFlat,
  filterDeep,
  isObject,
  objectDeepMerge,
} from '../utils/index'
import type {
  TableColumn,
  ITableColumns,
  TableColumnsProps,
  ITableExpose,
  IPagination,
  UnknownObject,
  StringObject,
  DeepTypeof,
} from '../types/index'

export function useTableColumns(
  props: Readonly<{ columns: ITableColumns }>
): ComputedRef<ITableColumns> {
  return computed<ITableColumns>(() => {
    return filterDeep(props.columns || [], 'hide', false)
  })
}

interface TableSlot extends TableColumn {
  header: string
}

export function useTableSlotList(
  columns: ITableColumns | Ref<ITableColumns>
): ComputedRef<TableSlot[]> {
  return computed(() => {
    const _columns = unref(columns)

    return filterFlat<ITableColumns, TableSlot[]>(
      _columns,
      'slot',
      true,
      (item) => {
        item.header = item.prop + '-header'
        return item as TableSlot
      }
    )
  })
}

export function useTableDefaultBind(
  props: Readonly<TableColumnsProps>
): ComputedRef<TableColumnsProps> {
  return computed(() => ({
    showOverflowTooltip: props.showOverflowTooltip || false,
    align: props.align,
    headerAlign: props.headerAlign,
  }))
}

interface ColumnsBind extends StringObject {
  slot?: boolean
  children?: unknown
}

export function useTableBind<T extends ColumnsBind>(
  currentBind?: boolean | T | Ref<boolean | undefined | T>,
  defaultBind?: TableColumnsProps | Ref<TableColumnsProps>
): ComputedRef<T> {
  return computed(() => {
    const _currentBind = unref(currentBind)
    const _defaultBind = unref(defaultBind)
    const _option = isObject(_currentBind) ? { ..._currentBind } : undefined

    if (_option) {
      _option.slot && (_option.slot = undefined)
      _option.children && delete _option.children
    }

    return Object.assign({} as T, _defaultBind, _option)
  })
}

export function useTableMethods<T = UnknownObject>(): {
  table: Ref<ITableExpose<T>>
} & ITableExpose<T> {
  const table = ref<ITableExpose<T>>({} as ITableExpose<T>)

  function clearSelection() {
    table.value.clearSelection()
  }

  function toggleRowSelection(row: T, selected?: boolean) {
    table.value.toggleRowSelection(row, selected)
  }

  function toggleAllSelection() {
    table.value.toggleAllSelection()
  }

  function toggleRowExpansion(row: T, expanded?: boolean) {
    table.value.toggleRowExpansion(row, expanded)
  }

  function setCurrentRow(row?: T) {
    table.value.setCurrentRow(row)
  }

  function clearSort() {
    table.value.clearSort()
  }

  function clearFilter(columnKeys?: DeepTypeof<T> | Array<DeepTypeof<T>>) {
    table.value.clearFilter(columnKeys)
  }

  function doLayout() {
    table.value.doLayout()
  }

  function sort(prop: DeepTypeof<T>, order: string) {
    table.value.sort(prop, order)
  }

  return {
    table,
    clearSelection,
    toggleRowSelection,
    toggleAllSelection,
    toggleRowExpansion,
    setCurrentRow,
    clearSort,
    clearFilter,
    doLayout,
    sort,
  }
}

export function usePagination(
  props: Readonly<{ pagination?: IPagination }>,
  emit: (
    event:
      | 'update:currentPage'
      | 'update:pageSize'
      | 'size-change'
      | 'current-change'
      | 'prev-click'
      | 'next-click',
    ...args: unknown[]
  ) => void
): {
  pagination: ComputedRef<IPagination>
  sizeChange: (size: number) => void
  currentChange: (current: number) => void
  prevClick: (current: number) => void
  nextClick: (current: number) => void
} {
  const pagination = computed(() => {
    const options = useProOptions()

    return props.pagination
      ? objectDeepMerge<IPagination>(options.pagination, props.pagination)
      : options.pagination
  })

  function sizeChange(size: number) {
    emit('update:pageSize', size)
    emit('size-change', size)
  }

  function currentChange(current: number) {
    emit('update:currentPage', current)
    emit('current-change', current)
  }

  function prevClick(current: number) {
    emit('current-change', current)
  }

  function nextClick(current: number) {
    emit('current-change', current)
  }

  return {
    pagination,
    sizeChange,
    currentChange,
    prevClick,
    nextClick,
  }
}
