## Element - Enhance

> a component library for vue-next base on element-plus

[DOCUMENT](https://gitee.com/Jmysy/element-enhance) | [CHANGELOG](./CHANGELOG.md)

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
  <ele-layout multi-tab="true" breadcrumb="true">
    <template #logo></template>
  </ele-layout>
</template>
```

### Contribution
