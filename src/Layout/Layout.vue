<template>
  <section class="ele-layout">
    <ele-layout-aside
      v-bind="attrs"
      :collapse="show"
      :unique-opened="uniqueOpened"
      :theme="theme"
      @toggle-collapse="toggleShow"
    >
      <template
        v-if="slots.logo"
        #logo="{ collapse }"
      >
        <slot
          :collapse="collapse"
          name="logo"
        />
      </template>
      <template
        v-if="slots.menu"
        #menu="item"
      >
        <slot
          v-bind="item"
          name="menu"
        />
      </template>
    </ele-layout-aside>
    <section class="ele-container">
      <ele-layout-header
        :collapse="show"
        :breadcrumb="breadcrumb"
        @toggle-collapse="toggleShow"
      >
        <template #left>
          <slot name="left-header" />
          <slot name="header-left" />
        </template>
        <template #right>
          <slot name="right-header" />
          <slot name="header-right" />
        </template>
      </ele-layout-header>
      <ele-layout-tabs v-if="multiTab" />
      <ele-layout-main :transition="transition">
        <template #top>
          <slot name="main-top" />
          <slot name="top-main" />
        </template>
        <template #bottom>
          <slot name="main-bottom" />
          <slot name="bottom-main" />
        </template>
      </ele-layout-main>
      <slot name="footer" />
    </section>
  </section>
</template>

<script setup lang="ts">
import { defineProps, toRefs, useContext } from 'vue'
import EleLayoutAside from './LayoutAside.vue'
import EleLayoutHeader from './LayoutHeader.vue'
import EleLayoutMain from './LayoutMain.vue'
import EleLayoutTabs from './LayoutTabs.vue'
import { useAttrs, useShow } from '../composables/index'

const props = defineProps<{
  collapse?: boolean
  transition?: string
  theme?: string
  multiTab?: boolean
  uniqueOpened?: boolean
  breadcrumb?: boolean
}>()

const {
  collapse,
  transition,
  multiTab,
  uniqueOpened,
  breadcrumb,
  theme,
} = toRefs(props)
const attrs = useAttrs()
const { slots } = useContext()
const { show, toggleShow } = useShow(collapse?.value)
</script>

<style lang="postcss">
.ele-layout {
  display: flex;
  height: var(--layout-height);
  overflow: hidden;
  & .ele-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: calc(100% - var(--aside-width));
    background: var(--c-page-background);
  }
  & .aside-collapse + .ele-container {
    width: calc(100% - var(--aside-collapse-width));
  }
}
</style>
