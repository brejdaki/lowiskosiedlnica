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

  <Transition name="fade">
    <LayerOverflow 
      v-if="isLayerOverflowVisible"
    />
  </Transition>
</template>

<style lang="scss">
main {
  padding-top: 4rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>