<template>
  <el-checkbox-group
    :model-value="modelValue || []"
    class="ele-checkbox"
    @change="upData"
  >
    <el-checkbox
      v-for="item in data"
      :key="item.value"
      :name="item.name"
      :label="item.value"
      :disabled="item.disabled"
    >
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script setup name="ProCheckbox" lang="ts">
import { defineEmit, defineProps, toRefs } from 'vue'
import { ElCheckboxGroup, ElCheckbox } from 'element-plus'
import { useSelectData } from '../composables/index'

const props = defineProps<{
  modelValue?: string[] | number[] | boolean[]
  data: Record<string, boolean | string | number>[]
  config?: {
    value?: string
    label?: string
    name?: string
    disabled?: string
  }
}>()
const emit = defineEmit(['update:modelValue'])
const { modelValue } = toRefs(props)
const data = useSelectData(props)

function upData(value: unknown) {
  emit('update:modelValue', value)
}
</script>
