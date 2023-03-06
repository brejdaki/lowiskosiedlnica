<script lang="ts" setup>
import { toRef } from 'vue';
import { useField } from 'vee-validate';

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
});

// use `toRef` to create reactive references to `name` prop which is passed to `useField`
// this is important because vee-validte needs to know if the field name changes
// https://vee-validate.logaretm.com/v4/guide/composition-api/caveats
const name = toRef(props, 'name');

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<template>
<div
  :class="[
    'input',
    { 'has-error': !!errorMessage, success: meta.valid }
  ]"
>
  <label :for="name">
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
    />

    <div 
      :class="[
        'input__icon',
        { 'input__icon--success': meta.valid },
        { 'input__icon--error': errorMessage },
      ]"
      v-show="errorMessage || meta.valid"
    >
      <span v-if="errorMessage">
        !
      </span>
      <span v-else>
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
