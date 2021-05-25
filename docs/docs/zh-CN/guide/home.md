<img src="../../../src/assets/logo.svg" style="width:400px;margin:50px" />

##### 理念

Element Plus 定义了基础的设计规范，对应也提供了大量的基础组件。但是对于中后台类应用，我们希望提供更高程度的抽象，提供更上层的设计规范，并且对应提供相应的组件使得开发者可以快速搭建出高质量的页面。

在 Element Enhance 中我们内置了一系列的设计规范，预设了常用的逻辑。在这个基础上我们同样提供了灵活的支持，比如对于 EleTable 来说你也可以把它完全当做 Element Plus 的 Table 来用，对于 EleForm 来说你也可以直接使用 Element Plus 的基础组件或者你的自定义组件。我们希望通过 Enhance 系列组件提供快速高效大家高质量中后台应用的能力，进一步扩展 Element Plus 的能力，欢迎使用并提出宝贵的意见。

##### 起因

对于中后台开发来说，大部分的表格表单等页面都可以复用，通过将非业务逻辑的部分封装起来成组件能够更加方便使用。同时组件可以和路由等绑定，减少传值。以及实现一些 `element-plus` 上没有后台常用的功能等

虽然 `element-plus` 的封装已经很好了，但对于 `el-table` 或 `el-form` 的使用必不可少的需要写大量 `el-table-column` 或 `el-form-item` 代码。我们将它转换成 `column` 配置，通过传入一个数组动态生成这些数据。如果你传入的是具有响应式的数据，在改变 `column` 时，表格或表单会随之改变。根据这个特性你可以按照喜欢的方式去实现权限等功能

##### 模版

对于快速开发，或许模版更加方便，但模版并不一定十分适合你。你可能不习惯模版的 `prettier` 或 `eslint` 配置、你可能用不上模版的部分依赖、你可能会在意还没有写页面打包就 1M+ 的大小...

组件化的优势就是，你可以自己搭建开发环境。想用 `vite` 构建就用、想不用 `eslint` 就不用...

##### 特性

该组件库的开发理念就是面向未来，如果查看源码你就会发现像是 vue 3 的 [script setup](https://github.com/vuejs/rfcs/pull/227.) 实验性功能、像是 CSSNext 的 [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)。在保证大部分浏览器的兼容性的情况下，会更多的使用新特性、新功能来开发

##### 贡献

组件库还处于早期开发阶段，功能还需要完善。如果你希望参与贡献，欢迎 [Pull Request](https://github.com/Jmysy/element-enhance/pulls)。如果只是简单的文档相关的错误修正，你可以直接 PR，但如果是当前组件的 BUG 或者新功能、新组件等，最好优先提 [issues](https://github.com/Jmysy/element-enhance/issues)
