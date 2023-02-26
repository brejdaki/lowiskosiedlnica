<script lang="ts" setup>
const viewport = useViewport()

const setIconName = computed((): string => {
  return viewport.isGreaterOrEquals('desktop-small') ? 'scroll-mouse' : 'scroll-hand'
})
</script>

<template>
<img 
  class="scroll-icon"
  :src="`/icons/${setIconName}.svg`"
  loading="lazy"
  width="36"
  height="36"
/>
</template>

<style lang="scss" scoped>
.scroll-icon {
  opacity: 0.5;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
</style>