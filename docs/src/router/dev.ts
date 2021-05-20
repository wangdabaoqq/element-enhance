import BaseLayout from '../layout/Layout.vue'
import Layout from '../views/Layout.vue'
import Table from '../views/Table.vue'
import Form from '../views/Form.vue'
import Crud from '../views/Crud.vue'
import type { IRouteRecordRaw } from '/@src/index'

const routes: IRouteRecordRaw[] = [
  {
    path: '/dev',
    redirect: '/dev/Layout',
    component: BaseLayout,
    meta: { title: '开发', icon: 'el-icon-edit' },
    children: [
      {
        path: '/dev/Layout',
        component: Layout,
        meta: { title: '布局' },
      },
      {
        path: '/dev/Table',
        component: Table,
        meta: { title: '表格' },
      },
      {
        path: '/dev/Form',
        component: Form,
        meta: { title: '表单' },
      },
      {
        path: '/dev/Crud',
        component: Crud,
        meta: { title: '通用' },
      },
    ],
  },
]

export default routes
