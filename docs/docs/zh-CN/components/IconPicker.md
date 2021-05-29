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

##### 尺寸

::: demo 使用 `ele-icon-picker`，并传入 data 数据，自动生成选项

<template>
    <ele-icon-picker v-model="icon1" @select="select1" size="medium"></ele-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const icon1 = ref('el-icon-search')

    const select1 = function(value) {
      icon1.value = value
    }

    return {
      icon1, select1
    }
  }
}
</script>

:::

##### 触发

::: demo 使用 `ele-icon-picker`，并传入 data 数据，自动生成选项

<template>
    <ele-icon-picker v-model="icon2" @select="select2" trigger="click" placeholder="点击"></ele-icon-picker>
    <br/>
    <ele-icon-picker v-model="icon2" @select="select2" trigger="hover" placeholder="移入"></ele-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const icon2 = ref('el-icon-search')

    const select2 = function(value) {
      icon2.value = value
    }

    return {
      icon2, select2
    }
  }
}
</script>

:::

##### 定义

::: demo 使用 `ele-icon-picker`，并传入 data 数据，自动生成选项

<template>
    <ele-icon-picker :data="data3" v-model="icon3" @select="select3"></ele-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const icon3 = ref('el-icon-search')
    const data3 = ref(['el-icon-search','el-icon-phone'])

    const select3 = function(value) {
      icon3.value = value
    }

    return {
      icon3, data3, select3
    }
  }
}
</script>

:::

##### 配置

| 参数        | 说明           | 类型   | 可选值                                                      | 默认值 |
| :---------- | :------------- | :----- | :---------------------------------------------------------- | :----- |
| v-model     | 绑定值         | array  | [图标集合](https://element-plus.org/#/zh-CN/component/icon) |
| size        | 尺寸           | string | medium / small / mini                                       | small  |
| trigger     | 触发方式       | string | click / hover                                               | hover  |
| placeholder | 提示信息       | string | -                                                           | -      |
| data        | 自定义图标集合 | array  | -                                                           | -      |

##### 事件

| 事件   | 说明                   | 参数           |
| :----- | :--------------------- | -------------- |
| select | 绑定值变化时触发的事件 | 选中的 Icon 值 |
