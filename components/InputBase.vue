<script lang="ts" setup>
import { useField } from 'vee-validate';
// import { storeToRefs } from 'pinia'
// import { useMainStore } from '@/stores/main'

// const store = useMainStore()
// const { isModalVisible } = storeToRefs(useMainStore()) 

const props = defineProps({
  type: {
    type: String,
    default: 'text',
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

  isSelectedFile: {
    type: Boolean,
    default: true,
  },
});

const name = toRef(props, 'name');
const file = ref()

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
      v-if="type !== 'file'"
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
      autocomplete="off"
    />

    <div
      v-else
      class="input__file"
    >
      <input
        ref="file"
        :name="name"
        :id="name"
        :type="type"
        @input="handleChange"
        @blur="handleBlur"
      />

      <label :for="name">
        <div v-if="!isSelectedFile">
          Wybierz zdjęcie
        </div>

        <div v-else>
          Wybrane zdjęcie:
        </div>
        
        <span v-if="isSelectedFile">
          {{ file.files[0].name }}
        </span>
      </label>
    </div>

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
</div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/components/InputBase';
</style>
