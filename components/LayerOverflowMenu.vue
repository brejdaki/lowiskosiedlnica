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
@import '@/assets/css/components/LayerOverflowMenu';
</style>