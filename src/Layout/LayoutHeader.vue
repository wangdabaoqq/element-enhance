<template>
  <header class="ele-header">
    <div class="header-slot">
      <span
        class="header-fold-btn"
        @click="toggleCollapse"
      >
        <i class="el-icon-eleme" />
      </span>
      <ele-layout-breadcrumb v-if="breadcrumb" />
      <slot name="left" />
    </div>
    <div class="header-slot">
      <slot name="right" />
    </div>
  </header>
</template>

<script setup lang="ts">
import EleLayoutBreadcrumb from './LayoutBreadcrumb.vue'
import { computed, defineEmit, defineProps, toRefs } from 'vue'

const props = defineProps<{
  breadcrumb?: boolean
}>()

const emit = defineEmit(['toggle-collapse'])

function toggleCollapse() {
  emit('toggle-collapse')
}
</script>

<style lang="postcss">
.ele-header {
  z-index: 998;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: var(--header-height);
  min-height: var(--header-height);
  background: var(--c-header-background);
  & .header-slot {
    display: flex;
    align-items: center;
    & .header-fold-btn {
      font-size: 20px;
      display: inline-block;
      margin-right: 20px;
      width: 20px;
      height: 56px;
      line-height: 56px;
      cursor: pointer;
    }
  }
}
</style>
