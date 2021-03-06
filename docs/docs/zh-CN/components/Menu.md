##### 基础

::: demo 组件默认将从 `vue-router` 中获取路由生成路由，[格式参考](./Layout#参考)

<template>
  <ele-menu class="demo-menu"/>
</template>

<style>
.demo-menu {
  width: 240px;
}
</style>

:::

##### 主题

::: demo 组件默认将从 `vue-router` 中获取路由生成路由，[格式参考](./Layout#参考)

<template>
  <ele-menu class="demo-menu" theme="black"/>
</template>

<style>
.demo-menu {
  width: 240px;
}
</style>

:::

##### 模式

::: demo 通过传入 `mode` 实现自定义菜单模式

<template>
  <ele-menu mode="horizontal"/>
</template>

<style>
.demo-menu {
  width: 240px;
}
</style>

:::

##### 仅仅

::: demo 通过传入 `unique-opened` 实现手风琴模式

<template>
  <ele-menu class="demo-menu" unique-opened=true />
</template>

<style>
.demo-menu {
  width: 240px;
}
</style>

:::

##### 路由

::: demo 通过传入 `routes` 实现自定义路由显示

<template>
  <ele-menu :routes="routes"  class="demo-menu"/>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const routes = computed(() => {
      const _routes = router.options.routes
      return _routes.find(item => item.path === '/zh-CN/components/').children
    })

    return {
      routes,
    }
  }
}
</script>

<style>
.demo-menu {
  width: 240px;
}
</style>

:::

##### 配置

| 参数                | 说明                                                 | 类型    | 可选值                | 默认值                 |
| :------------------ | :--------------------------------------------------- | :------ | :-------------------- | :--------------------- |
| routes              | 当前程序路由                                         | array   | -                     | 从 `vue-router` 中获取 |
| mode                | 模式                                                 | string  | horizontal / vertical | vertical               |
| collapse            | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用） | boolean | -                     | false                  |
| background-color    | 菜单的背景色（仅支持 hex 格式）                      | string  | -                     | #ffffff                |
| text-color          | 菜单的文字颜色（仅支持 hex 格式）                    | string  | -                     | #303133                |
| active-text-color   | 当前激活菜单的文字颜色（仅支持 hex 格式）            | string  | -                     | #409EFF                |
| default-openeds     | 当前打开的 sub-menu 的 index 的数组                  | Array   | -                     | -                      |
| unique-opened       | 是否只保持一个子菜单的展开                           | boolean | -                     | false                  |
| menu-trigger        | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效) | string  | hover / click         | hover                  |
| collapse-transition | 是否开启折叠动画                                     | boolean | -                     | true                   |

##### 插槽

| name | 说明                                                 |
| :--- | :--------------------------------------------------- |
| -    | 控制菜单显示内容，参数为 { meta, path, redirect } 等 |
