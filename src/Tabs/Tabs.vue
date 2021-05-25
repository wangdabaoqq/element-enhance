<template>
  <el-tabs
    v-model="active"
    type="card"
    :closable="list.length > 1"
    class="ele-tabs"
    @tab-click="to"
    @tab-remove="close"
  >
    <el-tab-pane
      v-for="item in list"
      :key="item.path"
      :name="item.path"
      :label="item.title"
    >
      <template #label>
        {{ item.title }}
      </template>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ElTabs, ElTabPane } from 'element-plus'
import { useTabs } from '../composables'
import { useRoute } from 'vue-router'
import { computed } from '@vue/runtime-core'
const { active, list, to, close } = useTabs()

const route = useRoute()
</script>

<style lang="postcss">
.ele-tabs.el-tabs--card > .el-tabs__header {
  margin: 0px !important;
  padding-right: 10px;
  padding-left: 10px;
  border: none;
}
.ele-tabs.el-tabs--card > .el-tabs__header .el-tabs__item {
  background: white;
  margin-right: 6px;
  margin-top: 6px;
  line-height: 34px;
  height: 34px;
  border: none;
  border-radius: 3px;
  padding-left: 16px !important;
  padding-right: 16px !important;
}
.ele-tabs.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  border-bottom: 1px transparent solid !important;
}
.ele-tabs.el-tabs--card > .el-tabs__header .el-tabs__nav {
  border-radius: 0px;
  border: none;
}
.ele-tabs.el-tabs--card > .el-tabs__header .el-tabs__nav-prev {
  width: 34px;
  height: 34px;
  margin-top: 6px;
  line-height: 34px;
  text-align: center;
}
.ele-tabs.el-tabs--card > .el-tabs__header .el-tabs__nav-next {
  width: 32px;
  height: 32px;
  margin-top: 4px;
  line-height: 32px;
  text-align: center;
}
.ele-tabs.el-tabs--card > .el-tabs__header .el-tabs__nav-wrap.is-scrollable {
  padding: 0 34px;
}

.ele-tabs.el-tabs--card
  > .el-tabs__header
  .el-tabs__item.is-active.is-closable
  .el-icon-close:hover {
  background-color: transparent;
  color: #303133;
}

.ele-tabs.el-tabs--card > .el-tabs__header .el-tabs__nav-next i,
.ele-tabs.el-tabs--card > .el-tabs__header .el-tabs__nav-prev i {
  font-weight: 600 !important;
}
</style>
