<template>
  <ele-layout
    :theme="theme"
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
        class="admin"
        target="_black"
        href="https://github.com/Jmysy/element-enhance-admin"
      >Admin</a>
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
import { ref } from '@vue/runtime-core'
export default {
  setup() {
    const theme = ref('black')
    const uniqueOpened = ref(true)

    return {
      theme,
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
