<script setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'

const { isLayerOverflowVisible } = storeToRefs(useMainStore())
</script>

<template>
  <NavbarBase />

  <main>
    <slot />
  </main>

  <FooterPage />

  <LayerOverflow 
    v-if="isLayerOverflowVisible"
  />
</template>

<style lang="scss">
</style>