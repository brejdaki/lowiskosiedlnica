<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'

const store = useMainStore()
const { 
  isModalVisible, 
  isLayerOverflowVisible 
} = storeToRefs(useMainStore()) 

function handleOverflowLayer() {
  store.setOverflowLayerVisible(!isLayerOverflowVisible.value)
}
</script>

<template>
<div 
  :class="[
    'overflow-layer',
    { 'overflow-layer--modal' : isModalVisible }
  ]"
  @click.once.prevent="handleOverflowLayer"
/>
</template>

<style lang="scss" scoped>
.overflow-layer {
  position: fixed;
  top: 3.875rem;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: var(--z-top);
  background-color: var(--c-black-alpha);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);

  &--modal {
    top: 0;
    z-index: var(--z-overlayer);
  }

  @include breakpoint-to('mobile-xlarge') {
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
  }
}
</style>