<template>
  <div class="ele-tree-select">
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
      </el-input>
      <template #dropdown>
        <el-dropdown-menu class="ele-tree-select-content">
          <el-tree
            :accordion="accordion"
            :empty-text="emptyText"
            :data="data"
            :props="defaultProps"
          >
            <template #default="{ node }">
              <span class="ele-tree-select-content-node">
                <span>{{ node.label }}</span>
                <span v-if="node.id == modelValue">
                  <i class="el-icon-check" />
                </span>
              </span>
            </template>
          </el-tree>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { ElTree } from 'element-plus'
import elementList from '../Resource/icon/element.js'
import { defineProps, ref, toRefs, useContext } from '@vue/runtime-core'
const props = defineProps<{
  modelValue?: string
  size?: string
  trigger?: string
  placeholder?: string
  data?: string[]
  defaultProps?: string
  emptyText?: string
  accordion?: boolean
}>()

const context = useContext()

const empty = function () {
  context.emit('update:modelValue')
}
</script>
<style>
.ele-tree-select-content {
  padding: 10px !important;
  width: 216px !important;
  height: 300px !important;
}
.ele-tree-select-content-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.ele-tree-select-content-node i:last-child {
  color: #409eff !important;
}
</style>
