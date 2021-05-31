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
          <el-dropdown-item
            v-for="(item, index) in data ? data : datas"
            :key="index"
            class="ele-icon-picker-content-icon"
            :class="modelValue == item ? 'active' : ''"
            @click="select(item)"
          >
            <i :class="item" />
          </el-dropdown-item>
          <div
            v-if="elementList.length > 0"
            class="icon__footer"
          >
            <span class="icon__count">共 {{ elementList.length }} 条</span>
            <el-button
              size="mini"
              class="btn-prev"
              :disabled="isPrev"
              @click="prev"
            >
              <i class="el-icon el-icon-arrow-left" />
            </el-button>
            <el-button
              size="mini"
              class="btn-next"
              :disabled="isNext"
              @click="next"
            >
              <i class="el-icon el-icon-arrow-right" />
            </el-button>
          </div>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { ElDropdownMenu, ElDropdownItem } from 'element-plus'
import elementList from '../Resource/icon/element.js'
import { defineProps, ref, toRefs, useContext } from '@vue/runtime-core'
const props = defineProps<{
  modelValue?: string
  size?: string
  trigger?: string
  placeholder?: string
  data?: string[]
  prepend: {
    type: boolean
    default: true
  }
}>()
let pageNumber = 1
let isPrev = ref(true)
let isNext = ref(false)

const datas = ref([] as any)
const initPage = (index = 0, pageSize = 25) => {
  datas.value = elementList.slice(index, pageSize)
}
// 初始化
initPage()
// 上一页
const prev = () => {
  pageNumber -= 1
  isNext.value = false
  let start = pageNumber * 25
  initPage(start, 25 * (1 + pageNumber))
  if (pageNumber === 0) {
    isPrev.value = true
    return false
  }
}
// 下一页
const next = () => {
  pageNumber += 1
  isPrev.value = false
  let start = pageNumber * 25
  initPage(start, 25 * (1 + pageNumber))
  if (pageNumber === Math.ceil(elementList.length / 25) - 1) {
    isNext.value = true
    return false
  }
}
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
  /* height: 300px !important; */
}
.ele-icon-picker-content-icon {
  border-radius: 4px !important;
  margin: 5px !important;
  padding-left: 10px !important;
  padding-right: 5px !important;
  font-size: 20px !important;
  display: inline-block !important;
  border: 1px solid whitesmoke !important;
  color: #606266 !important;
}
.ele-icon-picker-content-icon:hover,
.ele-icon-picker-content-icon.active {
  color: white !important;
  background-color: #409eff !important;
}
.icon__footer {
  margin: 10px 0;
  text-align: center;
  color: #515a6e;
}
.icon__count {
  margin-right: 10px;
}
.btn-prev,
.btn-next {
  width: 30px;
  padding: 0 !important;
  border: 0 !important;
  background: #f4f4f5 !important;
}
</style>
