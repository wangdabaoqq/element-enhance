## Element - Enhance

> A component library for vue-next base on element-plus

[在线文档](https://jmysy.github.io/element-enhance/) | [更新日志](./CHANGELOG.md)

### 安装

```sh
npm i element-enhance
```

### 引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import ElementEnhance from 'element-enhance'
import 'element-enhance/lib/style.css'

createApp(App).use(ElementEnhance).mount('#app')
```

### 使用

```vue
<template>
  <ele-layout theme="black" multi-tab="true" breadcrumb="true">
    <template #logo></template>
  </ele-layout>
</template>
```

### 趋势

[![Giteye chart](https://chart.giteye.net/gitee/Jmysy/element-enhance/9X8CXNEY.png)](https://giteye.net/chart/9X8CXNEY)

### 贡献

[![Giteye chart](https://chart.giteye.net/gitee/Jmysy/element-enhance/57W94KFG.png)](https://giteye.net/chart/57W94KFG)
