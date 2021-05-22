<template>
  <el-breadcrumb class="ele-breadcrumb">
    <el-breadcrumb-item
      v-for="item in list"
      :key="item.path"
    >
      <router-link :to="item.path">
        {{ item.meta.title }}
      </router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { findRouterItemListByPath } from '../utils/index'
import { useCurrentRoutes } from '../composables/index'
import type { IRouteRecordRaw } from '../types/index'

const props = defineProps<{ routes?: IRouteRecordRaw[] }>()
const route = useRoute()
const routes = useCurrentRoutes(props)
const list = computed(() => {
  return findRouterItemListByPath(routes.value, route.path)
})
</script>
<style>
.ele-breadcrumb .el-breadcrumb__inner a,
.ele-breadcrumb .el-breadcrumb__separator {
  color: #606266 !important;
  font-weight: 500 !important;
  text-decoration: none !important;
}
</style>
