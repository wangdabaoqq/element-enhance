##### 基础

::: demo 使用 `ele-radio`，并传入 data 数据，自动生成选项

<template>
  <ele-radio
    v-model="radio"
    :data="data"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const radio = ref('')
    const data = ref([
      { value: '1', label: '一' },
      { value: '2', label: '二' },
      { value: '3', label: '三' },
      { value: '4', label: '四' },
      { value: '5', label: '五' },
    ])

    return {
      radio,
      data,
    }
  }
}
</script>

:::

##### 可选

::: demo 将传入 data 数据中的某项设置为 `disabled: true` 即可

<template>
  <ele-radio
    v-model="radio1"
    :data="list"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const radio1 = ref('')
    const list = ref([
      { value: '1', label: '一' },
      { value: '2', label: '二' },
      { value: '3', label: '三' },
      { value: '4', label: '四' },
      { value: '5', label: '五' },
    ])

    return {
      radio1,
      list,
    }
  }
}
</script>

:::

##### 字段

::: demo 通过 config 配置数据键值。`value`- v-model 绑定的键值、`label`-显示键值、`disabled`-控制不可选的键值、`name`-原生 name 的键值

<template>
  <ele-radio
    v-model="radio2"
    :data="data"
    :config="config"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const radio2 = ref('')
    const config = ref({ value: 'value', label: 'label' })
    const data = ref([
      { value: '1', label: '一' },
      { value: '2', label: '二' },
      { value: '3', label: '三' },
      { value: '4', label: '四' },
      { value: '5', label: '五' },
    ])

    return {
      radio2,
      config,
      data,
    }
  }
}
</script>

:::

##### 按钮

::: demo 使用 `ele-radio-button` 显示按钮样式的多选框组

<template>
  <ele-radio-button
    v-model="radiobutton"
    :data="data"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const radiobutton = ref('')
    const data = ref([
      { value: '1', label: '一' },
      { value: '2', label: '二' },
      { value: '3', label: '三' },
      { value: '4', label: '四' },
      { value: '5', label: '五' },
    ])

    return {
      radiobutton,
      data,
    }
  }
}
</script>

:::

##### 配置

| 参数       | 说明                           | 类型    | 可选值                | 默认值                                                                 |
| :--------- | :----------------------------- | :------ | :-------------------- | :--------------------------------------------------------------------- |
| v-model    | 绑定值                         | array   | -                     | -                                                                      |
| data       | 绑定数据                       | array   | -                     | -                                                                      |
| config     | 配置绑定数据键值               | object  | -                     | { value: 'value', label: 'label', disabled: 'disabled', name: 'name' } |
| size       | 尺寸                           | string  | medium / small / mini | -                                                                      |
| disabled   | 是否禁用                       | boolean | -                     | false                                                                  |
| text-color | 按钮形式激活时的文本颜色       | string  | -                     | #ffffff                                                                |
| fill       | 按钮形式激活时的填充色和边框色 | string  | -                     | #409EFF                                                                |

##### 事件

| 名称   | 说明                   | 回调参数              |
| ------ | ---------------------- | --------------------- |
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

##### 配置

| 参数       | 说明                           | 类型    | 可选值                | 默认值                                                                 |
| :--------- | :----------------------------- | :------ | :-------------------- | :--------------------------------------------------------------------- |
| v-model    | 绑定值                         | array   | -                     | -                                                                      |
| data       | 绑定数据                       | array   | -                     | -                                                                      |
| config     | 配置绑定数据键值               | object  | -                     | { value: 'value', label: 'label', disabled: 'disabled', name: 'name' } |
| size       | 尺寸                           | string  | medium / small / mini | -                                                                      |
| disabled   | 是否禁用                       | boolean | -                     | false                                                                  |
| text-color | 按钮形式激活时的文本颜色       | string  | -                     | #ffffff                                                                |
| fill       | 按钮形式激活时的填充色和边框色 | string  | -                     | #409EFF                                                                |

##### 事件

| 名称   | 说明                   | 回调参数              |
| ------ | ---------------------- | --------------------- |
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |
