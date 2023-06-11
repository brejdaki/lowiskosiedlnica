<script lang="ts" setup>
const viewport = useViewport()

const setIconName = computed((): string => {
  return viewport.isGreaterOrEquals('desktop-small') ? 'scroll-mouse' : 'scroll-hand'
})
</script>

<template>
<NuxtImg 
  class="scroll-icon"
  :src="`/icons/${setIconName}.svg`"
  loading="lazy"
  width="36"
  height="36"
  alt="Ikona łapki"
/>
</template>

<style lang="scss" scoped>
@import '@/assets/css/components/IconScroll';
</style>