# Element - Enhance

> a component library for Vue 3 base on element-plus

[Documentation](https://gitee.com/Jmysy/element-enhance) | [Changelog](./CHANGELOG.md)

## Install

```sh
npm i element-enhance
```

## Use

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
