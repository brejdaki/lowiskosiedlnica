<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'

const store = useMainStore()
const { isMenuMobileVisible } = storeToRefs(useMainStore()) 

function handleButton() {
  store.setMobileMenuVisible(!isMenuMobileVisible.value)
}
</script>

<template>
<button
  @click="handleButton"
  :class="[
    'navbar__hamburger',
    { 'navbar__hamburger--active' : isMenuMobileVisible }
  ]"
  aria-label="Menu"
>
  <svg>
    <defs>
      <filter id="gooeyness">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />
        <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
      </filter>
    </defs>
  </svg>

  <svg class="hamburger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
    <path class="line line1" d="M 30,35 H 60 C 63.595663,35 65,32.357023 65,30 C 65,27.642977 62.357023,25 60,25 C 57.642977,25 55,25.933659 55,30 V 77.828008" />
    <path class="line line2" d="M 70,35 H 50 C 46.404337,35 45,32.357023 45,30 C 45,27.642977 47.642977,25 50,25 C 52.357023,25 55,25.933659 55,30 V 77.828008" />
    <path class="line line3" d="M 30,50 H 55 C 58.595665,50 60.000005,47.357023 60.000005,45 C 60.000005,42.642977 57.357025,40 55,40 C 52.642977,40 50,40.933659 50,45 V 92.828008" />
    <path class="line line4" d="M 70,50 H 45 C 41.404337,50 40,47.357023 40,45 C 40,42.642977 42.642977,40 45,40 C 47.357023,40 50,40.933659 50,45 V 92.828008" />
    <path class="line line5" d="M 30,65 H 50 C 53.595665,65 55.000005,62.357023 55.000005,60 C 55.000005,57.642977 52.357025,55 50,55 C 47.642977,55 45,55.933659 45,60 V 107.82801" />
    <path class="line line6" d="M 70,65 H 40 C 36.404337,65 35,62.357023 35,60 C 35,57.642977 37.642977,55 40,55 C 42.357023,55 45,55.933659 45,60 V 107.82801" />
  </svg>
  <svg class="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
    <path class="line" d="M 34,32 L 66,68" />
    <path class="line" d="M 66,32 L 34,68" />
  </svg>
</button>
</template>

<style lang="scss" scoped>
@import '@/assets/css/components/NavbarHamburger';
</style>