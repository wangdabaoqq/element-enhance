<template>
  <ele-form
    v-model="form"
    :columns="columns"
    :menu="menu"
    label-width="180px"
    :gutter="20"
    size="small"
    @submit="submitForm"
  >
    <template #slot-label>
      <i class="el-icon-time" />
      <span>Slot</span>
    </template>
    <template #slot="{ item, value, setValue }">
      <span>{{ item }} - {{ value }} - {{ setValue }}</span>
    </template>
  </ele-form>
  <ele-form
    ref="ruleForm"
    v-model="form1"
    :columns="columns1"
    :rules="rules"
    label-width="180px"
  >
    <template #address="{ value, setValue }">
      <ele-input-tag
        :model-value="value"
        @update:modelValue="setValue"
      />
    </template>
  </ele-form>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type {
  IFormColumns,
  IFormMenuColumns,
  IFormExpose,
  StringObject,
  IFormSubmit,
} from '/@src/index'

interface RuleForm {
  date: string
  user: {
    name: string
    address: string
  }
}

const form = ref<StringObject>({})
const form1 = ref<RuleForm>({} as RuleForm)
const menu = ref<IFormMenuColumns>({
  submitText: 'Create',
  submitProps: {
    type: 'primary',
    loading: false,
  },
  reset: false,
})
const ruleForm = ref<IFormExpose<RuleForm>>({} as IFormExpose<RuleForm>)
const rules = ref({
  date: { required: true, message: 'please input data', trigger: 'blur' },
  user: { required: true, message: 'please input user', trigger: 'blur' },
})
const list = [
  { value: 'Go', tag: 'go', disabled: true },
  { value: 'JavaScript', tag: 'javascript' },
  { value: 'Python', tag: 'python' },
]
const columns = ref<IFormColumns>([
  {
    // label: 'Slot',
    prop: 'slot',
    component: 'el-input',
    slot: true,
  },
  {
    label: 'el-input',
    prop: 'input',
    component: 'el-input',
    span: 12,
    props: {
      clearable: true,
      placeholder: 'placeholder',
      onChange: (e: string) => console.log(e),
    },
  },
  {
    label: 'ele-input-tag',
    prop: 'inputTag',
    component: 'ele-input-tag',
    span: 12,
    props: {
      placeholder: 'Click the space after input',
    },
  },
  {
    label: 'ele-autocomplete-tag',
    prop: 'autocompleteTag',
    component: 'ele-autocomplete-tag',
    span: 8,
    props: {
      fetchSuggestions: querySearch,
      placeholder: 'Click the space after input',
    },
  },
  {
    label: 'ele-radio',
    prop: 'radio',
    component: 'ele-radio',
    span: 8,
    props: {
      data: list,
      config: { label: 'tag' },
    },
  },
  {
    label: 'ele-radio-button',
    prop: 'radioButton',
    component: 'ele-radio-button',
    span: 8,
    props: {
      data: list,
      config: { label: 'tag' },
    },
  },
  {
    label: 'ele-checkbox',
    prop: 'checkbox',
    component: 'ele-checkbox',
    span: 12,
    props: {
      data: list,
      config: { label: 'tag' },
    },
  },
  {
    label: 'ele-checkbox-button',
    prop: 'checkboxButton',
    component: 'ele-checkbox-button',
    xs: { span: 24, offset: 2 },
    sm: { span: 12, pull: 2 },
    md: 12,
    props: {
      data: list,
      config: { label: 'tag' },
    },
  },
  {
    label: 'ele-select',
    prop: 'select',
    component: 'ele-select',
    span: 12,
    props: {
      data: list,
      config: { label: 'tag' },
    },
  },
])
const columns1 = ref<IFormColumns<RuleForm>>([
  {
    label: 'Date',
    prop: 'date',
    component: 'el-input',
  },
  {
    label: 'User',
    prop: 'user',
    // max: 3,
    size: 'mini',
    children: [
      {
        label: 'Name',
        prop: 'name',
        component: 'el-input',
        span: 12,
        rules: {
          required: true,
          message: 'please input name',
          trigger: 'blur',
        },
      },
      {
        label: 'Address',
        prop: 'address',
        component: 'el-input',
        slot: true,
        span: 12,
      },
    ],
  },
])
const submitForm: IFormSubmit = (done, isValid, invalidFields) => {
  console.log(isValid, invalidFields)
  setTimeout(() => {
    done()
  }, 1000)
}

onMounted(() => {
  console.log(ruleForm.value)
})

function querySearch(queryString: string, cb: (...arg: unknown[]) => void) {
  cb(
    queryString
      ? list.filter((i) => {
          return i.value.indexOf(queryString.toLowerCase()) === 0
        })
      : list
  )
}
</script>
