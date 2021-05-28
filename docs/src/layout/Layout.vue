<template>
  <ele-layout
    :theme="theme"
    :multi-tab="multiTab"
    :breadcrumb="breadcrumb"
    :unique-opened="uniqueOpened"
  >
    <template #logo="{ collapse }">
      <img
        v-if="collapse"
        class="collapseLogo"
        src="../assets/logo.png"
      >
      <img
        v-else
        class="logo"
        src="../assets/logo.svg"
      >
    </template>
    <template #header-right>
      <a
        target="_black"
        href="https://github.com/Jmysy/element-enhance"
      >
        <img
          class="github"
          src="../assets/github.svg"
        >
      </a>
    </template>
  </ele-layout>
</template>
<script>
import { computed, onMounted, ref, provide } from 'vue'
export default {
  setup() {
    const theme = ref('black')
    const multiTab = ref(false)
    const breadcrumb = ref(true)
    const uniqueOpened = ref(true)

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
  margin-left: 56px;
}
.collapseLogo {
  height: 34px;
  width: 34px;
  margin-left: 16px;
  margin-top: 13px;
}
.admin {
  margin-right: 20px;
}
.github {
  height: 30px;
  width: 30px;
}
</style>
