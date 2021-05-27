<img src="/docs/src/assets/logo.svg" style="width:400px;margin:50px" />

##### 📖 概述

Element Enhance 是基于 Element Plus 而开发的模板组件，提供了更高级别的抽象支持，开箱即用，更加专注于页面。

##### 📢 理念

Element Plus 定义了基础的设计规范，对应也提供了大量的基础组件。但是对于中后台类应用，我们希望提供更高程度的抽象，提供更上层的设计规范，并且对应提供相应的组件使得开发者可以快速搭建出高质量的页面。

列表页应该可以用 EleLayout + EleTable 完成，编辑页应该使用 EleLayout + EleForm 完成，详情页可以用 EleLayout + EleDescriptions 完成。 一个页面在开发工程中只需要关注几个重型组件，降低心智负担，专注于更核心的业务逻辑。

##### 🎯 起因

对于中后台开发来说，大部分的表格表单等页面都可以复用，通过将非业务逻辑的部分封装起来成组件能够更加方便使用。同时组件可以和路由等绑定，减少传值。以及实现一些 `element-plus` 上没有后台常用的功能等

虽然 `element-plus` 的封装已经很好了，但对于 `el-table` 或 `el-form` 的使用必不可少的需要写大量 `el-table-column` 或 `el-form-item` 代码。我们将它转换成 `column` 配置，通过传入一个数组动态生成这些数据。如果你传入的是具有响应式的数据，在改变 `column` 时，表格或表单会随之改变。根据这个特性你可以按照喜欢的方式去实现权限等功能

##### ⚡ 设计

在实际开发中我们也经常会碰到一些设计问题，比如经典的按钮应该放在左面还是右面，查询表单怎么布局，日期怎么格式化，数字的对齐问题，在重型组件中都进行了抽象，对于各种行为与样式我们都经过了设计师的讨论与设计可以达到默认好看及好用。

如果你还是想自定义相关渲染可以通过自定义 ModelValue 的方式来实现。默认的不一定是最好的，但是一定不差，如果你要自定义最好考虑一下投入产出比，毛坯房里雕花真的好吗？

##### ✒️ 特性

该组件库的开发理念就是面向未来，如果查看源码你就会发现像是 vue 3 的 [script setup](https://github.com/vuejs/rfcs/pull/227.) 实验性功能、像是 CSSNext 的 [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)。在保证大部分浏览器的兼容性的情况下，会更多的使用新特性、新功能来开发

##### ☁️ 入门

安装

```
npm install element-enhance --save
```

引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import ElementEnhance from 'element-enhance'
import 'element-enhance/lib/style.css'

const app = createApp(App)

app.use(ElementEnhance)
app.mount('#app')
```

使用

```vue
<template>
  <ele-layout multi-tab="true" breadcrumb="true">
    <template #logo></template>
  </ele-layout>
</template>
```

##### 🍚 贡献

组件库还处于早期开发阶段，功能还需要完善。如果你希望参与贡献，欢迎 [Pull Request](https://github.com/Jmysy/element-enhance/pulls)。如果只是简单的文档相关的错误修正，你可以直接 PR，但如果是当前组件的 BUG 或者新功能、新组件等，最好优先提 [issues](https://github.com/Jmysy/element-enhance/issues)

[![Giteye chart](https://chart.giteye.net/gitee/Jmysy/element-enhance/57W94KFG.png)](https://giteye.net/chart/57W94KFG)
