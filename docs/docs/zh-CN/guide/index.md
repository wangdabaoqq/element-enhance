##### 🔨 安装

```
npm install element-enhance --save
```

##### 🔧 引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import ElementEnhance from 'element-enhance'
import 'element-enhance/lib/style.css'

const app = createApp(App)

app.use(ElementEnhance)
app.mount('#app')
```

##### 🔎 使用

```vue
<template>
  <ele-layout multi-tab="true" breadcrumb="true">
    <template #logo></template>
  </ele-layout>
</template>
```

##### 🔉 Hello World

::: demo 组件默认将从 `vue-router` 中获取路由生成路由，[格式参考](https://github.com/Jmysy/element-enhance/blob/master/docs/src/router/zh-CN.ts)

<template>
  <ele-layout class="demo-layout" />
</template>

<style>
.demo-layout {
  border: 1px solid whitesmoke;
  height: 460px;
}
</style>

:::
