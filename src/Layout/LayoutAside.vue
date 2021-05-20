<template>
  <aside
    :class="collapse && 'aside-collapse'"
    class="ele-aside"
  >
    <div
      class="mask"
      @click="toggleCollapse"
    />
    <div class="ele-aside-wrapper">
      <div
        v-if="slots.logo"
        class="ele-aside-logo"
      >
        <slot
          :collapse="menuCollapse"
          name="logo"
        />
      </div>
      <el-scrollbar>
        <ele-menu
          v-bind="attrs"
          :collapse="menuCollapse"
        >
          <template
            v-if="slots.menu"
            #default="item"
          >
            <slot
              v-bind="item"
              name="menu"
            />
          </template>
        </ele-menu>
      </el-scrollbar>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { toRefs, defineEmit, defineProps, useContext, computed } from 'vue'
import { ElScrollbar } from 'element-plus'
import { useAttrs, useScreenSize } from '../composables/index'
import ProMenu from '../Menu/index'
import type { IRouteRecordRaw } from '../types/index'

const props = defineProps<{ collapse: boolean }>()
const { collapse } = toRefs(props)
const emit = defineEmit(['toggle-collapse'])
const { slots } = useContext()
const attrs = useAttrs()
const size = useScreenSize()
const menuCollapse = computed(() => {
  return size.value === 'xs' ? false : collapse.value
})

function toggleCollapse() {
  emit('toggle-collapse')
}
</script>

<style lang="postcss">
.ele-aside {
  & .mask {
    display: none;
  }
  & .ele-aside-wrapper {
    display: flex;
    flex-direction: column;
    width: var(--aside-width);
    height: 100%;
    border-right: 1px solid var(--c-border);
    background: var(--c-aside-background);
    transition: width var(--t-duration) var(--t-timing-function);
    & .ele-aside-logo {
      padding-left: 20px;
      height: var(--header-height);
      min-height: var(--header-height);
      border-bottom: 1px solid var(--c-border);
      background: var(--c-aside-background);
      overflow: hidden;
    }
    & .el-scrollbar {
      flex: 1;
      & .el-scrollbar__wrap {
        overflow-x: hidden;
      }
    }
  }
  &.aside-collapse .ele-aside-wrapper {
    width: var(--aside-collapse-width);
  }
  @media (--xs-medium) {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    z-index: var(--z-index-sidebar);
    &.aside-collapse {
      width: 100%;
    }
    & .mask {
      display: block;
      position: absolute;
      opacity: 0;
      transition: opacity var(--t-duration) var(--t-timing-function);
    }
    &.aside-collapse .mask {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: var(--c-mask-background);
      opacity: 1;
    }
    & .ele-aside-wrapper {
      transform: translateX(-100%);
      transition: transform var(--t-duration) var(--t-timing-function);
    }
    &.aside-collapse .ele-aside-wrapper {
      width: var(--aside-width);
      transform: translateX(0);
    }
  }
}
</style>
