# ColumnSetting

> Control the sorting and display of columns in the table, use whit Table or Crud

## Use

### Whit Table

::: demo 通过 `v-model` 绑定数据，默认点击多选框切换列的显隐，直接拖动实现切换排序

<template>
  <pro-column-setting
    v-model="columns"
    style="float:right;margin-bottom:10px"
  />
  <pro-table
    :data="data"
    :columns="columns"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns = ref([
      {
        label: '日期',
        prop: 'date',
      },
      {
        label: '姓名',
        prop: 'name',
      },
      {
        label: '地址',
        prop: 'address',
      },
    ])
    const data = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])

    return {
      data,
      columns,
    }
  }
}
</script>

:::

### Whit Crud

::: demo 推荐通过 `action` 插槽使用，可以绑定 `Crud` 的 `columns` 和 `table-columns`

<template>
  <pro-crud
    v-model="form"
    v-model:search="serachForm"
    :columns="columns1"
    :menu="{ label: '操作' }"
    :data="data"
    @search="search"
    @submit="submit"
    @delete="deleteRow"
  >
    <template #action>
      <pro-column-setting v-model="columns1" />
    </template>
  </pro-crud>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form = ref({})
    const serachForm = ref({})
    const columns1 = ref([
      {
        label: '日期',
        prop: 'date',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
      },
      {
        label: '姓名',
        prop: 'name',
        component: 'el-input',
        add: true,
        search: true,
      },
      {
        label: '地址',
        prop: 'address',
        component: 'el-input',
        add: true,
        edit: true,
      },
    ])
    const data = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])

    const search = (done, isValid, invalidFields) => {
      console.log('search', isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }

    const submit = (close, done, formType, isValid, invalidFields) => {
      console.log('submit', formType, isValid, invalidFields)
      setTimeout(() => {
        isValid ? close() : done()
      }, 1000)
    }

    const deleteRow = (row) => {
      console.log('deleteRow', row)
    }

    return {
      form,
      serachForm,
      data,
      columns1,
      search,
      submit,
      deleteRow,
    }
  }
}
</script>

:::

::: tip 提示
如果 `ColumnSetting` 直接绑定 `Crud` 的 `columns`，排序变动会影响表单组件和搜索组件。通过绑定 `table-columns` 可以单独绑定表格进而避免影响表单组件和搜索组件。
:::

### 点击触发弹窗

::: demo 通过 `trigger` 控制触发方式，支持 `hover` `click` `contextmenu`-鼠标右键

<template>
  <pro-crud
    v-model="form"
    v-model:search="serachForm"
    :columns="columns2"
    :table-columns="tableColumns"
    :menu="{ label: '操作' }"
    :data="data"
    @search="search"
    @submit="submit"
    @delete="deleteRow"
  >
    <template #action>
      <pro-column-setting v-model="tableColumns" trigger="click" />
    </template>
  </pro-crud>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form = ref({})
    const serachForm = ref({})
    const columns2 = ref([
      {
        label: '日期',
        prop: 'date',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
      },
      {
        label: '姓名',
        prop: 'name',
        component: 'el-input',
        add: true,
        search: true,
      },
      {
        label: '地址',
        prop: 'address',
        component: 'el-input',
        add: true,
        edit: true,
      },
    ])
    const tableColumns = ref(JSON.parse(JSON.stringify(columns2.value)))
    const data = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])

    const search = (done, isValid, invalidFields) => {
      console.log('search', isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }

    const submit = (close, done, formType, isValid, invalidFields) => {
      console.log('submit', formType, isValid, invalidFields)
      setTimeout(() => {
        isValid ? close() : done()
      }, 1000)
    }

    const deleteRow = (row) => {
      console.log('deleteRow', row)
    }

    return {
      form,
      serachForm,
      data,
      columns2,
      tableColumns,
      search,
      submit,
      deleteRow,
    }
  }
}
</script>

:::

### 支持多级表头

::: demo 支持对多级表头的操作，可以将列拖入或拖出子表头

<template>
  <pro-column-setting
    v-model="columns3"
    default-expand-all
    style="float:right;margin-bottom:10px"
  />
  <pro-table
    :data="data"
    :columns="columns3"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns3 = ref([
      {
        label: '日期',
        prop: 'date',
      },
      {
        label: '用户',
        prop: 'user',
        children: [
          {
            label: '姓名',
            prop: 'name',
          },
          {
            label: '地址',
            prop: 'address',
          },
        ],
      },
    ])
    const data = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])

    return {
      data,
      columns3,
    }
  }
}
</script>

:::

### Props

| Name                 | Description                                                                                                                                                                                                                                                                                                                                                                 | Type                                   | Options                                                        | Default    |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------- | :------------------------------------------------------------- | :--------- |
| v-model              | binding value of `columns`                                                                                                                                                                                                                                                                                                                                                  | array                                  | -                                                              | -          |
| size                 | button size                                                                                                                                                                                                                                                                                                                                                                 | string                                 | medium / small / mini                                          | -          |
| placement            | placement of pop menu                                                                                                                                                                                                                                                                                                                                                       | string                                 | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-end |
| trigger              | how to trigger                                                                                                                                                                                                                                                                                                                                                              | string                                 | hover / click / contextmenu                                    | hover      |
| empty-text           | text displayed when data is void                                                                                                                                                                                                                                                                                                                                            | string                                 | -                                                              | -          |
| render-after-expand  | whether to render child nodes only after a parent node is expanded for the first time                                                                                                                                                                                                                                                                                       | boolean                                | -                                                              | true       |
| highlight-current    | whether current node is highlighted                                                                                                                                                                                                                                                                                                                                         | boolean                                | -                                                              | false      |
| default-expand-all   | whether to expand all nodes by default                                                                                                                                                                                                                                                                                                                                      | boolean                                | -                                                              | false      |
| expand-on-click-node | whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.                                                                                                                                                                                                                                  | boolean                                | -                                                              | true       |
| check-on-click-node  | whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox.                                                                                                                                                                                                                                | boolean                                | -                                                              | false      |
| auto-expand-parent   | whether to expand father node when a child node is expanded                                                                                                                                                                                                                                                                                                                 | boolean                                | -                                                              | true       |
| filter-node-method   | this function will be executed on each node when use filter method. if return `false`, tree node will be hidden.                                                                                                                                                                                                                                                            | Function(value, data, node)            | -                                                              | -          |
| accordion            | whether only one node among the same level can be expanded at one time                                                                                                                                                                                                                                                                                                      | boolean                                | -                                                              | false      |
| indent               | horizontal indentation of nodes in adjacent levels in pixels                                                                                                                                                                                                                                                                                                                | number                                 | -                                                              | 16         |
| icon-class           | custome tree node icon                                                                                                                                                                                                                                                                                                                                                      | string                                 | -                                                              | -          |
| allow-drag           | this function will be executed before dragging a node. If `false` is returned, the node can not be dragged                                                                                                                                                                                                                                                                  | Function(node)                         | -                                                              | -          |
| allow-drop           | this function will be executed before the dragging node is dropped. If `false` is returned, the dragging node can not be dropped at the target node. `type` has three possible values: 'prev' (inserting the dragging node before the target node), 'inner' (inserting the dragging node to the target node) and 'next' (inserting the dragging node after the target node) | Function(draggingNode, dropNode, type) | -                                                              | -          |
