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
@import '@/assets/css/components/LinkFacebook';
</style>
