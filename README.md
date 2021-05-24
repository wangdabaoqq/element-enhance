## Element - Enhance

> a component library for vue-next base on element-plus

[DOCUMENT](https://jmysy.github.io/element-enhance/) | [CHANGELOG](./CHANGELOG.md)

### Install

```sh
npm i element-enhance
```

### Use

```js
import { createApp } from 'vue'
import App from './App.vue'
import ElementEnhance from 'element-enhance'
import 'element-enhance/lib/style.css'

createApp(App).use(ElementEnhance).mount('#app')
```

```vue
<template>
  <ele-layout theme="black" multi-tab="true" breadcrumb="true">
    <template #logo></template>
  </ele-layout>
</template>
```
### Star

[![Giteye chart](https://chart.giteye.net/gitee/Jmysy/element-enhance/9X8CXNEY.png)](https://giteye.net/chart/9X8CXNEY)

### Contribution

[![Giteye chart](https://chart.giteye.net/gitee/Jmysy/element-enhance/57W94KFG.png)](https://giteye.net/chart/57W94KFG)
