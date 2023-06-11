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
@import '@/assets/css/components/LayerOverflow';
</style>