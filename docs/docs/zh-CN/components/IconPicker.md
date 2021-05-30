##### 基础

::: demo 使用 `ele-icon-picker`，并传入 data 数据，自动生成选项

<template>
    <ele-icon-picker v-model="icon"></ele-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const icon = ref('el-icon-search')

    return {
      icon
    }
  }
}
</script>

:::

##### 尺寸

::: demo 使用 `ele-icon-picker`，并传入 data 数据，自动生成选项

<template>
    <ele-icon-picker v-model="icon1" size="medium"></ele-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const icon1 = ref('el-icon-search')

    return {
      icon1
    }
  }
}
</script>

:::

##### 触发

::: demo 使用 `ele-icon-picker`，并传入 data 数据，自动生成选项

<template>
    <ele-icon-picker v-model="icon2"  trigger="click" placeholder="点击"></ele-icon-picker>
    <br/>
    <ele-icon-picker v-model="icon2"  trigger="hover" placeholder="移入"></ele-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const icon2 = ref('el-icon-search')

    return {
      icon2
    }
  }
}
</script>

:::

##### 定义

::: demo 使用 `ele-icon-picker`，并传入 data 数据，自动生成选项

<template>
    <ele-icon-picker :data="data3" v-model="icon3"></ele-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const icon3 = ref('el-icon-search')
    const data3 = ref(['el-icon-search','el-icon-phone'])

    return {
      icon3, data3
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
