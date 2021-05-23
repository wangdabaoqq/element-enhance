<template>
  <aside
    class="ele-aside"
    :class="[
      theme == 'black' ? 'ele-aside-black' : 'ele-aside-white',
      collapse && 'aside-collapse',
    ]"
  >
    <div
      class="mask"
      @click="toggleCollapse"
    />
    <div
      class="ele-aside-wrapper"
      :class="[
        theme == 'black'
          ? 'ele-aside-wrapper-black'
          : 'ele-aside-wrapper-white',
      ]"
    >
      <div
        v-if="slots.logo"
        class="ele-aside-logo"
        :class="[
          theme == 'black' ? 'ele-aside-logo-black' : 'ele-aside-logo-white',
        ]"
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
          :unique-opened="uniqueOpened"
          :theme="theme"
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
import EleMenu from '../Menu/index'
import type { IRouteRecordRaw } from '../types/index'

const props = defineProps<{
  collapse: boolean
  theme: string
  uniqueOpened: boolean
}>()

const { collapse, theme, uniqueOpened } = toRefs(props)
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
.ele-aside-wrapper-black {
  background-color: #191a23 !important;
}
.ele-aside-wrapper-white {
  background-color: #ffffff !important;
}
.ele-aside-black {
  box-shadow: 2px 0 6px rgb(0 21 41 / 35%) !important;
}
.ele-aside-white {
  box-shadow: 2px 0 6px 0 rgba(29, 35, 41, 0.05) !important;
}
.ele-aside-logo-black {
  border-bottom: 1px solid #101117;
  background-color: #191a23 !important;
}
.ele-aside-logo-white {
  border-bottom: 1px solid #f8f8f9;
  background-color: #ffffff !important;
}
.ele-aside {
  z-index: 999;
  & .mask {
    display: none;
  }
  & .ele-aside-wrapper {
    display: flex;
    flex-direction: column;
    width: var(--aside-width);
    height: 100%;
    background: var(--c-aside-background);
    transition: width var(--t-duration) var(--t-timing-function);
    & .ele-aside-logo {
      padding-left: 20px;
      height: var(--header-height);
      min-height: var(--header-height);
      overflow: hidden;
    }
    & .el-scrollbar {
      flex: 1;
      background-color: transparent;
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
