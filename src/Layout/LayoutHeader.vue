<template>
  <header class="ele-header">
    <div class="header-slot">
      <span
        class="header-fold-btn"
        @click="toggleCollapse"
      >
        <i class="el-icon-eleme" />
      </span>
      <slot name="left" />
    </div>
    <div class="header-slot">
      <slot name="right" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, defineEmit, defineProps, toRefs } from 'vue'

const emit = defineEmit(['toggle-collapse'])

function toggleCollapse() {
  emit('toggle-collapse')
}
</script>

<style lang="postcss">
.ele-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: var(--header-height);
  min-height: var(--header-height);
  border-bottom: 1px solid var(--c-border);
  background: var(--c-header-background);
  & .header-slot {
    display: flex;
    align-items: center;
    & .header-fold-btn {
      font-size: 20px;
      display: inline-block;
      margin-right: 20px;
      width: 20px;
      height: 20px;
      line-height: 20px;
      cursor: pointer;
    }
  }
}
</style>
