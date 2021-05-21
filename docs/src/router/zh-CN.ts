import BaseLayout from '../layout/Layout.vue'
import type { IRouteRecordRaw } from '/@src/index'

const zhCN: IRouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/zh-CN/guide/',
    component: BaseLayout,
    meta: { title: '指南', icon: 'el-icon-house' },
    children: [
      {
        path: '/zh-CN/guide/introduction',
        component: () => import('../../docs/zh-CN/guide/home.md'),
        meta: { title: '介绍' },
      },
      {
        path: '/zh-CN/guide/',
        component: () => import('../../docs/zh-CN/guide/index.md'),
        meta: { title: '安装' },
      },
    ],
  },
  {
    path: '/zh-CN/components/',
    redirect: '/zh-CN/components/layout',
    component: BaseLayout,
    meta: { title: '组件', icon: 'el-icon-takeaway-box' },
    children: [
      {
        path: '/zh-CN/components/layout',
        component: () => import('../../docs/zh-CN/components/Layout.md'),
        meta: { title: '布局' },
      },
      {
        path: '/zh-CN/components/menu',
        component: () => import('../../docs/zh-CN/components/Menu.md'),
        meta: { title: '菜单' },
      },
      {
        path: '/zh-CN/components/form',
        component: () => import('../../docs/zh-CN/components/Form.md'),
        meta: { title: '表单' },
      },
      {
        path: '/zh-CN/components/radio',
        component: () => import('../../docs/zh-CN/components/Radio.md'),
        meta: { title: '单选' },
      },
      {
        path: '/zh-CN/components/checkbox',
        component: () => import('../../docs/zh-CN/components/Checkbox.md'),
        meta: { title: '多选' },
      },
      {
        path: '/zh-CN/components/select',
        component: () => import('../../docs/zh-CN/components/Select.md'),
        meta: { title: '下拉' },
      },
      {
        path: '/zh-CN/components/input-tag',
        component: () => import('../../docs/zh-CN/components/InputTag.md'),
        meta: { title: '标签' },
      },
      {
        path: '/zh-CN/components/table',
        component: () => import('../../docs/zh-CN/components/Table.md'),
        meta: { title: '表格' },
      },
      {
        path: '/zh-CN/components/crud',
        component: () => import('../../docs/zh-CN/components/Crud.md'),
        meta: { title: '增删改查' },
      },
      {
        path: '/zh-CN/components/ColumnSetting',
        component: () => import('../../docs/zh-CN/components/ColumnSetting.md'),
        meta: { title: '列配置' },
      },
    ],
  },
]

export default zhCN
