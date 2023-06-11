<script lang="ts" setup>
import { useField } from 'vee-validate';
import { useScrollLock } from '@vueuse/core'

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },

  data: {
    type: Array,
    default: [],
  },

  value: {
    type: String,
    default: '',
  },

  name: {
    type: String,
    required: true,
  },

  label: {
    type: String,
    required: true,
  },

  successMessage: {
    type: String,
    default: '',
  },

  placeholder: {
    type: String,
    default: '',
  },

  isRequired: {
    type: Boolean,
    default: true,
  },
});

const select = ref()
const isFocus = ref(false)
const el = ref<HTMLElement | null>(document.querySelector('body'))

const name = toRef(props, 'name')

const isLocked = useScrollLock(el)

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});

defineExpose({ inputValue });
</script>

<template>
<div
  :class="[
    'input',
    { 'has-error': isRequired && !!errorMessage },
    { 'success': isRequired && meta.valid}
  ]"
>
  <label :for="name">
    <span v-if="isRequired">*</span>
    
    {{ label }}
  </label>

  <div class="input__inner">
    <input
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
      autocomplete="off"
      @focusin="isFocus = true, isLocked = true"
      readonly
      inputmode="none"
    />

    <div 
      :class="[
        'input__icon',
        { 'input__icon--success': isRequired && meta.valid },
        { 'input__icon--error': isRequired && errorMessage },
      ]"
      v-show="errorMessage || meta.valid"
    >
      <span v-if="isRequired && errorMessage">
        !
      </span>
      <span v-else-if="isRequired && !errorMessage">
        &#10003;
      </span>
    </div>
  </div>

  <p 
    class="input__message" 
    v-show="errorMessage"
  >
    {{ errorMessage }}
  </p>

  <div 
    ref="select"
    v-if="isFocus"
    class="input__select"
  >
    <span class="title">
      Wybierz gatunek
    </span>

    <div 
      v-for="item in data"
      @click="[
        inputValue = item, 
        isFocus = false, 
        isLocked = false,
        $emit('changeValue', item)
      ]"
    >
      {{ item }}
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/components/SelectBase';
</style>
