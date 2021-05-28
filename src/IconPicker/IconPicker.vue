<template>
  <div class="ele-icon-picker">
    <el-dropdown>
      <el-input
        v-model="modelValue"
        placeholder="请选择图标"
      >
        <template #prepend>
          <i :class="modelValue" />
        </template>
      </el-input>
      <template #dropdown>
        <el-dropdown-menu>
          <div class="ele-icon-picker-content">
            <div
              v-for="(item, index) in elementList"
              :key="index"
              class="ele-icon-picker-content-icon"
              :class="modelValue == item ? 'active' : ''"
              @click="select(item)"
            >
              <i :class="item" />
            </div>
          </div>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import elementList from '../Resource/icon/element.js'
import { defineProps, toRefs, useContext } from '@vue/runtime-core'
const props = defineProps<{
  modelValue?: string
}>()
const context = useContext()

const select = function (value: string) {
  context.emit('select', value)
}
</script>
<style>
.ele-icon-picker-content {
}
.ele-icon-picker-content-icon {
  margin: 5px;
  padding-left: 10px;
  padding-right: 10px;
  display: block;
  font-size: 20px;
  border-radius: 2px;
  display: inline-block;
  border: 1px solid whitesmoke;
  color: #606266;
}
.ele-icon-picker-content-icon:hover,
.ele-icon-picker-content-icon.active {
  color: white;
  background-color: #409eff;
}
</style>
