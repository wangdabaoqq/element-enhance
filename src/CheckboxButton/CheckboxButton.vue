<template>
  <el-checkbox-group
    :model-value="modelValue || []"
    class="ele-checkbox-button"
    @change="upData"
  >
    <el-checkbox-button
      v-for="item in data"
      :key="item.value"
      :name="item.name"
      :label="item.value"
      :disabled="item.disabled"
    >
      {{ item.label }}
    </el-checkbox-button>
  </el-checkbox-group>
</template>

<script setup name="ProCheckboxButton" lang="ts">
import { defineEmit, defineProps, toRefs } from 'vue'
import { ElCheckboxGroup, ElCheckboxButton } from 'element-plus'
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
