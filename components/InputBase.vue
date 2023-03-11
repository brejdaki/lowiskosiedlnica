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

    &[type="number"] {
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
      -moz-appearance: textfield;
    }
  }

  &__file {
    input {
      width: 0;
      height: 0;
      min-height: 0;
      display: none
    }

    label {
      @include reset-input;
      cursor: pointer;
      display: flex;
      align-items: center;

      div {
        display: inline-flex;
        white-space: nowrap;
      }

      span {
        margin-left: 1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-right: 1rem;
        color: var(--c-black)
      }
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

    #{$self}__file {
      label {
        border-color: var(--c-from-error);
        color: var(--c-from-error);
      }
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

    #{$self}__file {
      label {
        border-color: var(--c-form-succes);

        &:focus {
          border-color: var(--c-form-succes);
        }
      }
    }
  }
}
</style>
