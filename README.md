# element-enhance (Beta)

> a component library for Vue 3 base on element-plus

[Documentation](https://gitee.com/Jmysy/element-enhance) | [Changelog](./CHANGELOG.md)

## Installation

```sh
yarn add element-enhance
# or
npm i element-enhance
```

## Usage

```js
import { createApp } from 'vue'
import App from './App.vue'
import ElementEnhance from 'element-enhance'
import 'element-enhance/lib/style.css'

createApp(App).use(ElementEnhance).mount('#app')
```

```vue
<template>
  <ele-layout />
</template>
```
