##### 基础

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

##### 主题

::: Layout 提供 `theme` 属性配置侧边主题

<template>
  <ele-layout theme="black" class="demo-layout" />
</template>

<style>
.demo-layout {
  border: 1px solid whitesmoke;
  height: 460px;
}
</style>

:::

##### 更多

::: demo 组件默认将从 `vue-router` 中获取路由生成路由，[格式参考](https://github.com/Jmysy/element-enhance/blob/master/docs/src/router/zh-CN.ts)

<template>
  <ele-layout 
    class="demo-layout" 
    multi-tab=true 
    breadcrumb=true>
    <template #logo></template>
  </ele-layout>
</template>

<style>
.demo-layout {
  border: 1px solid whitesmoke;
  height: 460px;
}
</style>

:::

##### 插槽

::: demo 通过插槽实现更高级的页面

<template>
  <ele-layout class="demo-layout">
    <template #logo="{ collapse }">
      <span style="line-height: 54px">{{ collapse ? '图标' : '图标' }}</span>
    </template>
    <template #header-left>
      <span>左侧</span>
    </template>
    <template #header-right>
      <span>右侧</span>
    </template>
  </ele-layout>
</template>

<style>
.demo-layout {
  border: 1px solid whitesmoke;
  height: 460px;
}
</style>

:::

#### 路由

::: demo 通过传入 `routes` 实现自定义路由显示

<template>
  <ele-layout :routes="routes" class="demo-layout" />
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
.demo-layout {
  border: 1px solid whitesmoke;
  height: 460px;
}
</style>

:::

##### 配置

| 参数          | 说明                       | 类型    | 默认值                 |
| :------------ | :------------------------- | :------ | :--------------------- |
| routes        | 当前程序路由               | array   | 从 `vue-router` 中获取 |
| transition    | 定义页面过度渐变动画       | string  | -                      |
| collapse      | 默认是否收起菜单           | boolean | false                  |
| unique-opened | 是否只保持一个子菜单的展开 | boolean | false                  |
| theme         | 切换布局主题               | string  | white                  |

##### 插槽

| name         | 说明                                                         |
| :----------- | :----------------------------------------------------------- |
| logo         | 自定义 Logo，参数为 { collapse } collapse-当前菜单栏是否折叠 |
| menu         | 控制菜单显示内容，参数为 { meta, path, redirect } 等         |
| footer       | 页脚内容                                                     |
| header-left  | 头部左侧内容                                                 |
| header-right | 头部右侧内容                                                 |
| main-top     | 主体顶部内容                                                 |
| main-bottom  | 主体底部内容                                                 |

##### 参考

```ts
interface IRouteMeta extends RouteMeta {
  title?: string // 用于显示菜单标题
  icon?: string // 用于显示菜单图标
  hidden?: boolean // 用于判断是否显示 (仅适用于默认路由)
  keepAlive?: boolean // 控制 keepAlive
}
```
