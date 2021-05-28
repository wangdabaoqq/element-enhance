##### 基础

::: demo 使用 `ele-icon-picker`，并传入 data 数据，自动生成选项

<template>
    <ele-icon-picker v-model="icon" @select="select"></ele-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const icon = ref('el-icon-search')

    const select = function(value) {
      icon.value = value
    }

    return {
      icon, select
    }
  }
}
</script>

:::

##### 配置

| 参数    | 说明   | 类型  | 可选值                                                      | 默认值 |
| :------ | :----- | :---- | :---------------------------------------------------------- | :----- |
| v-model | 绑定值 | array | [图标集合](https://element-plus.org/#/zh-CN/component/icon) |

##### 事件

| 事件   | 说明                   | 参数           |
| :----- | :--------------------- | -------------- |
| select | 绑定值变化时触发的事件 | 选中的 Icon 值 |
