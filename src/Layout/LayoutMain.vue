<template>
  <router-view v-slot="{ Component, route }">
    <transition
      :name="transition"
      mode="out-in"
    >
      <el-scrollbar
        :key="route.path"
        class="ele-main"
      >
        <slot name="top" />
        <keep-alive v-if="route.meta?.keepAlive">
          <component :is="Component" />
        </keep-alive>
        <component
          :is="Component"
          v-else
        />
        <slot name="bottom" />
      </el-scrollbar>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, toRefs } from 'vue'
import { ElScrollbar, ElBacktop } from 'element-plus'

const props = defineProps<{ transition?: string }>()
const { transition } = toRefs(props)
</script>

<style lang="postcss">
.ele-main {
  border-radius: 4px;
  margin: var(--main-margin);
  padding: var(--main-padding);
  border: 1px solid whitesmoke;
  background: var(--c-aside-background);
  &.el-scrollbar .el-scrollbar__wrap {
    margin-bottom: 0 !important;
    overflow-x: hidden;
  }
  @media (--xs-medium) {
    margin: var(--xs-main-margin);
    padding: var(--xs-main-padding);
    &.el-scrollbar .el-scrollbar__wrap {
      margin-right: 0 !important;
    }
  }
}
</style>
