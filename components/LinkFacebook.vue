<script lang="ts" setup>
defineProps({
  size: {
    type: Number,
    default() {
      return 36
    }
  },
  
  isDescription: {
    type: Boolean,
    default() {
      return true
    }
  }
})
</script>

<template>
<NuxtLink
  href="https://www.facebook.com/groups/504530429732131"
  target="_blank"
  :class="[
    'link-facebook',
    { 'link-facebook--desc': isDescription }
  ]"
>
  <NuxtImg 
    src="/icons/facebook.svg"
    loading="lazy"
    :width="size"
    :height="size"
    alt="Logo facebook"
  />

  <div
    v-if="isDescription"
  >
    Facebook grupa
  </div>
</NuxtLink>
</template>

<style lang="scss" scoped>
.link-facebook {
  // transition: all 250ms;

  &::before {
    display: none;
  }

  &:hover {
    @include breakpoint-to('desktop') {
      color: var(--c-white);
      background-color: var(--c-facebook);

      img {
        filter: brightness(100);
      }
    }
  }

  &--desc {
    display: flex;
    width: fit-content;
    gap: 1rem;
    padding: .25rem 1rem .25rem .25rem;
    align-items: center;
    border: 1px solid var(--c-facebook);
    border-radius: .25rem;
    color: var(--c-facebook);
    font-size: 0.875rem;
  }
}
</style>
