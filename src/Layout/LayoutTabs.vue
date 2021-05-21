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
    />
  </el-tabs>
</template>

<script setup lang="ts">
import { ElTabs, ElTabPane } from 'element-plus'
import { useTabs } from '../composables'

const { active, list, to, close } = useTabs()
</script>

<style lang="postcss">
.ele-tabs.el-tabs--card > .el-tabs__header {
  margin: 0px !important;
}
.ele-tabs.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  border-bottom: 1px transparent solid !important;
}
.ele-tabs.el-tabs--card > .el-tabs__header .el-tabs__nav {
  border-radius: 0px;
}
.ele-tabs.el-tabs--card > .el-tabs__header .el-tabs__nav-prev {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.ele-tabs.el-tabs--card > .el-tabs__header .el-tabs__nav-next {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.ele-tabs.el-tabs--card > .el-tabs__header .el-tabs__nav-wrap.is-scrollable {
  padding: 0 40px;
}
</style>
