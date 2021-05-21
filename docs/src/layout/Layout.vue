<template>
  <ele-layout
    :theme="theme"
    :breadcrumb="breadcrumb"
    :multi-tab="multiTab"
    :unique-opened="uniqueOpened"
  >
    <template #logo>
      <img
        class="logo"
        src="../assets/logo.svg"
      >
    </template>
    <template #header-right />
  </ele-layout>
</template>
<script>
import { ref } from '@vue/runtime-core'
export default {
  setup() {
    const theme = ref('white')
    const multiTab = ref(false)
    const breadcrumb = ref(false)
    const uniqueOpened = ref(false)

    return {
      theme,
      multiTab,
      breadcrumb,
      uniqueOpened,
    }
  },
}
</script>

<style>
.logo {
  height: 30px;
  margin: auto;
  margin-top: 15px;
  margin-left: 40px;
}
</style>
