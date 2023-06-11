<script lang="ts" setup>
// const viewport = useViewport()
</script>

<template>
<div 
  :class="[
    'hero',
    { 'container-fluid': $viewport.isLessThan('mobile-xlarge') },
    { 'container' : $viewport.isGreaterOrEquals('mobile-xlarge') }
  ]"
>
  <div 
    class="hero__image"
  >
    <NuxtImg 
      preload
      src="/images/hero.svg"
      height="280"
      alt="Łowisko"
    />
  </div>

  <div
    :class="[
      'hero__container',
    ]"
  >
    <div
      class="hero__inner"
    >
      <h1 
        class="hero__title"
      >
        Łowisko wędkarskie Siedlnica
      </h1>

      <span 
        class="hero__desc"
      >
        Mała wielka woda.
      </span> 
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/components/HeroBase';
</style>