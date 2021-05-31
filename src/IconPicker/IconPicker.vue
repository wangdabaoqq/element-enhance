<template>
  <div class="ele-icon-picker">
    <el-dropdown :trigger="trigger">
      <el-input
        v-model="modelValue"
        :size="size"
        :placeholder="placeholder"
      >
        <template #suffix>
          <i
            v-if="modelValue"
            class="el-input__icon el-icon-error"
            @click="empty"
          />
        </template>
        <template
          v-if="prepend"
          #prepend
        >
          <i :class="modelValue" />
        </template>
      </el-input>
      <template #dropdown>
        <el-dropdown-menu class="ele-icon-picker-content">
          <el-dropdown-menu-item
            v-for="(item, index) in data ? data : elementList"
            :key="index"
            class="ele-icon-picker-content-icon"
            :class="modelValue == item ? 'active' : ''"
            @click="select(item)"
          >
            <i :class="item" />
          </el-dropdown-menu-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import elementList from '../Resource/icon/element.js'
import { defineProps, ref, toRefs, useContext } from '@vue/runtime-core'
const props = defineProps<{
  modelValue?: string
  size?: string
  trigger?: string
  placeholder?: string
  data?: string[]
  prepend?: {
    type: boolean
    default: true
  }
}>()
const context = useContext()

const select = function (value: string) {
  context.emit('update:modelValue', value)
}

const empty = function () {
  context.emit('update:modelValue')
}
</script>
<style>
.ele-icon-picker-content {
  width: 270px !important;
  height: 300px !important;
}
.ele-icon-picker-content-icon {
  border-radius: 4px;
  margin: 5px;
  padding-left: 10px;
  padding-right: 10px;
  display: block;
  font-size: 20px;
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
