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
@import '@/assets/css/components/ButtonBase';
</style>