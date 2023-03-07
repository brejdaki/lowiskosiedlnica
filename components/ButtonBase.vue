<script lang="ts" setup>
const props = defineProps({
  color: {
    type: String,
    default: 'blue',
  },

  isIcon: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button 
    :class="[
      'button',
      `button--${color}`
    ]"
    :disabled="disabled"
    @click="$emit('clicked')"
  >
    <div class="button__content">
      <slot name="text" />
    </div>

    <div 
      v-if="isIcon"
      class="button__icon"
    >
      <slot name="icon" />
    </div>
  </button>
</template>

<style lang="scss" scoped>
.button {
  @include reset-button;
  padding: .5rem 1rem;
  border: 1px solid var(--c-secondary);
  background-color: var(--c-secondary);
  color: var(--c-white);
  border-radius: 0.25rem;
  width: 100%;
  min-height: 3rem;
  letter-spacing: 1px;
  transition: all 250ms;

  @include breakpoint-to('mobile-xlarge') {
    &:hover {
      color: var(--c-secondary);
      background-color: var(--c-white);
    }
  }

  &[disabled] {
    color: var(--c-white);
    background-color: var(--c-black-alpha);
    cursor: not-allowed;
  }
}
</style>