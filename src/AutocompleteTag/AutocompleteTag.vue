<template>
  <div class="ele-autocomplete-tag ele-input-tag">
    <el-tag
      v-for="(item, index) in list"
      :key="index"
      :size="size"
      :type="type"
      :hit="hit"
      :color="color"
      :effect="effect"
      closable
      @close="close(index)"
    >
      {{ item }}
    </el-tag>
    <el-autocomplete
      v-model="input"
      v-bind="attrs"
      :size="size"
      @select="add"
      @blur="add"
      @keyup="keyup"
    />
  </div>
</template>

<script setup lang="ts">
import { toRefs, defineEmit, defineProps } from 'vue'
import { ElTag, ElAutocomplete } from 'element-plus'
import { useInputTag, useFormSize, useAttrs } from '../composables/index'

const props = defineProps<{
  modelValue?: string[]
  trigger?: 'space' | 'enter'
  size?: 'medium' | 'small' | 'mini'
  type?: 'success' | 'info' | 'warning' | 'danger'
  hit?: boolean
  color?: string
  effect?: 'light' | 'dark' | 'plain'
}>()
const emit = defineEmit(['update:modelValue'])
const { type, hit, color, effect } = toRefs(props)
const attrs = useAttrs()
const size = useFormSize(props)
const { input, list, add, close, keyup } = useInputTag(props, emit)
</script>

<style lang="postcss">
.ele-input-tag {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid var(--c-border);
  border-radius: 4px;
  background-color: var(--c-background);
  & .el-tag {
    margin: 3px;
  }
  & .el-autocomplete {
    flex: 1;
    min-width: 80px;
  }
  & .el-input .el-input__inner {
    border: 0;
  }
}
</style>
