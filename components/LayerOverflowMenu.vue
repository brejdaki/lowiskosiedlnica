<script lang="ts" setup>
import { useMainStore } from '@/stores/main'
import { storeToRefs } from 'pinia'

const store = useMainStore()
const { 
  isMenuLayerOverflowVisible
} = storeToRefs(useMainStore()) 

function handleOverflowLayer() {
  store.setMenuOverflowLayerVisible(!isMenuLayerOverflowVisible.value)
}
</script>

<template>
<div 
  class="overflow-layer"
  @click.stop.prevent="handleOverflowLayer"
/>
</template>

<style lang="scss" scoped>
.overflow-layer {
  position: absolute;
  top: 4rem;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: var(--z-overlayer-menu);
  background-color: var(--c-black-alpha);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);

  @include breakpoint-to('mobile-xlarge') {
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
  }
}
</style>