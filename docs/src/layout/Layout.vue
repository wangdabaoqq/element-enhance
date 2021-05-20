<template>
  <ele-layout>
    <template #logo />
    <template #header-left>
      <ele-breadcrumb />
    </template>
    <template #header-bottom>
      <ele-tabs />
    </template>
  </ele-layout>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
</script>
