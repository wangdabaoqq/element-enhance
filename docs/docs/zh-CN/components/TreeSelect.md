##### 基础

::: demo 使用 `ele-icon-picker`，并传入 data 数据，自动生成选项

<template>
    <ele-tree-select v-model="check" :data="data"></ele-tree-select>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const check = ref("1")
    const data = ref( [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }])

    return {
      data,
      check,
    }
  }
}
</script>

:::

##### 配置

| 参数         | 说明       | 类型         | 可选值                | 默认值     |
| :----------- | :--------- | :----------- | :-------------------- | :--------- |
| v-model      | 绑定值     | string array |                       |
| size         | 尺寸       | string       | medium / small / mini | small      |
| trigger      | 触发方式   | string       | click / hover         | hover      |
| placeholder  | 提示信息   | string       | -                     | -          |
| data         | 选中值     | string array | -                     | -          |
| defaultProps | 字段定义   | object       | -                     | -          |
| empty-text   | 空数据描述 | string       | -                     | "not data" |
| accordion    | 手风琴     | boolean      | -                     | false      |
