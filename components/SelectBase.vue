<script lang="ts" setup>
import { useField } from 'vee-validate';

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

const name = toRef(props, 'name')
const select = ref()
const isFocus = ref(false)

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
      @focusin="isFocus = true"
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
</div>

<div 
  ref="select"
  v-if="isFocus"
  class="input__select"
>
  <div 
    v-for="item in data"
    @click="inputValue = item, isFocus = false"
  >
    {{ item }}
  </div>
</div>

<div
  v-if="isFocus"
  class="input__select-overflow"
  @click="isFocus = false"
/>
</template>

<style lang="scss" scoped>
.input {
  $self: &;
  position: relative;
  margin-bottom: 1rem;
  width: 100%;

  @include breakpoint-to('mobile-xlarge') {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    width: 100%;

    span {
      color: var(--c-from-error);
      margin-right: 0.25rem
    }
  }

  input {
    @include reset-input;
      
    &:focus {
      border-color: var(--primary-color);
    }
  }

  &__inner {
    position: relative;
  }

  &__icon {
    position: absolute;
    display: flex;
    align-items: center;
    padding-right: 1rem;
    right: 0;
    top: 0;
    height: 3rem;

    &--success {
      color: var(--c-form-succes);
    }

    &--error {
      color: var(--c-from-error);
      font-weight: 500;
    }
  }

  &__message {
    font-size: 0.75rem;
    padding-left: 1rem;
  }

  &__select {
    position: fixed;
    z-index: var(--z-modal);
    border-radius: 0.25rem;
    background-color: var(--c-white);
    width: calc(100% - 3rem);
    max-height: 75vh;
    overflow-y: auto;
    padding: 1rem;
    font-size: 1.2rem;
    letter-spacing: 1px;
    top: 50%;
    transform: translateY(-50%);
    
    div {
      &:not(:last-child) {
        margin-bottom: 0.75rem;
      }
    }

    &-overflow {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: var(--z-overlayer-menu);
      background-color: var(--c-black-alpha);
      backdrop-filter: blur(1px);
      -webkit-backdrop-filter: blur(1px);
    }
  }

  &.has-error {
    input {
      border-color: var(--c-from-error);
      color: var(--c-from-error);

      &:focus {
        border-color: var(--c-from-error);
      }
    }

    #{$self}__message {
      color: var(--c-from-error);
    }
  }

  &.success {
    input {
      border-color: var(--c-form-succes);

      &:focus {
        border-color: var(--c-form-succes);
      }
    }

    #{$self}__message {
      color: var(--c-form-succes);
    }
  }
}
</style>
