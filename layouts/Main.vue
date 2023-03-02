<script setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'

const { isLayerOverflowVisible } = storeToRefs(useMainStore())

useHead({
  htmlAttrs: { 
    lang: 'pl' 
  },
  title: 'Łowisko wędkarskie Siedlnica',
  meta: [
    { 
      name: 'description',
      content: 'Wędkarskie łowisko komercyjne Siedlnica zaprasza zawody wędkarskie dla zakładów pracy i grup zorganizowanych, łowienie rekreacyjne.'
    },
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ],
})
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