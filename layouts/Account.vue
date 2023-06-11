<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'

useHead({
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

const { 
  isLayerOverflowVisible 
} = storeToRefs(useMainStore()) 
</script>

<template>
  <NuxtLoadingIndicator />

  <NavbarBase />

  <main>
    <slot />
  </main>

  <FooterPage />

  <ClientOnly>
    <Transition name="fade">
      <LayerOverflow 
        v-if="isLayerOverflowVisible"
      />
    </Transition>
  </ClientOnly>
</template>

<style lang="scss">
main {
  padding-top: 4rem;
  min-height: calc(100vh - 600px);

  @include breakpoint-to('desktop-small') {
    min-height: calc(100vh - 200px);
  }
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