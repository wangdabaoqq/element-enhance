<template>
  <el-menu
    :default-active="route.path"
    class="ele-menu"
    :class="theme"
    :background-color="menuBackground"
    :text-color="menuForeground"
    :unique-opened="uniqueOpened"
    @select="handleSelect"
  >
    <template
      v-for="menu in routes"
      :key="menu.path"
    >
      <ele-menu-item
        v-if="!menu.meta.hidden"
        :item="menu"
      >
        <template #default="item">
          <slot v-bind="item">
            <i
              v-if="item.meta?.icon"
              :class="item.meta.icon"
            />
            <span v-if="item.meta?.title">{{ item.meta.title }}</span>
          </slot>
        </template>
      </ele-menu-item>
    </template>
  </el-menu>
</template>
<script setup lang="ts">
import { computed, defineProps, toRaw, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMenu } from 'element-plus'
import { useCurrentRoutes } from '../composables/index'
import { checkUrl } from '../utils/index'
import EleMenuItem from './MenuItem.vue'
import type { IRouteRecordRaw } from '../types/index'

const props = defineProps<{
  routes?: IRouteRecordRaw[]
  theme: string
  uniqueOpened: boolean
}>()
const { theme, uniqueOpened } = toRefs(props)
const route = useRoute()
const router = useRouter()
const routes = useCurrentRoutes(props)

const menuBackground = computed(() => {
  return theme && theme.value === 'black' ? '#191a23' : '#ffffff'
})
const menuForeground = computed(() => {
  return theme && theme.value === 'black' ? '#ffffff' : '#191a23'
})

function handleSelect(path: string) {
  if (checkUrl(path)) {
    window.open(path)
  } else {
    router.push(path)
  }
}
</script>
<style lang="postcss">
.ele-menu.el-menu {
  border-right: 0;
}
.ele-menu.black .el-submenu .el-menu {
  background-color: #191a23 !important;
}
.ele-menu.black .el-submenu .el-menu .el-menu-item {
  background-color: #191a23 !important;
}
.ele-menu.black .el-submenu .el-menu .el-menu-item.is-active {
  background-color: #409eff !important;
  color: white !important;
}
</style>
