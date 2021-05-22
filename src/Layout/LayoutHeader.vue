<template>
  <header class="ele-header">
    <div class="header-slot">
      <span
        class="header-fold-btn"
        @click="toggleCollapse"
      >
        <i
          v-if="collapse"
          class="ele-icon ele-icon-toggle-right"
        />
        <i
          v-else
          class="ele-icon ele-icon-toggle-left"
        />
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
  collapse?: boolean
}>()

const { collapse } = toRefs(props)

const emit = defineEmit(['toggle-collapse'])

function toggleCollapse() {
  emit('toggle-collapse')
}
</script>

<style lang="postcss">
.ele-header {
  z-index: 998;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: var(--header-height);
  min-height: var(--header-height);
  background: var(--c-header-background);
  & .header-slot {
    display: flex;
    align-items: center;
    & .header-fold-btn:hover {
      background-color: #f7f7f7;
    }
    & .header-fold-btn {
      & i {
        font-size: 18px;
      }
      width: 20px;
      height: 56px;
      color: #303133;
      cursor: pointer;
      line-height: 56px;
      margin-right: 10px;
      padding-left: 10px;
      padding-right: 10px;
      display: inline-block;
    }
  }
}
</style>
