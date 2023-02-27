<script lang="ts" setup>
const viewport = useViewport()
</script>

<template>
<div 
  :class="[
    'hero',
    { 'container-fluid': $viewport.isLessThan('mobile-xlarge') },
    { 'container' : viewport.isGreaterOrEquals('mobile-xlarge') }
  ]"
>
  <div 
    class="hero__image"
  >
    <img 
      src="/images/hero.svg"
      fetchpriority="high"
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
.hero {
  position: relative;

  &__image {
    width: calc(100% + 3.5rem);
    margin: 0 -2rem 0 -1.5rem;

    @include breakpoint-to('desktop-small') {
      width: inherit;
    } 

    img {
      height: auto;
      width: 100%;

      @include breakpoint-to('mobile-xlarge') {
        height: 20rem;
        width: auto;
        margin-left: auto;
      } 

      @include breakpoint-to('desktop-small') {
        height: 30rem;
      } 

      @include breakpoint-to('desktop') {
        height: 35rem;
      } 
    }
  }

  &__container {
    margin-top: -1rem;
    padding-left: 1.5rem;
    position: relative;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%);

    @include breakpoint-to('mobile-xlarge') {
      padding-left: 0;
      margin-top: -20rem;
      background: none;
    } 

    @include breakpoint-to('desktop-small') {
      margin-top: -24rem;
    } 

    @include breakpoint-to('desktop') {
      margin-top: -28rem;
    } 
  }

  &__inner {
    @include breakpoint-to('mobile-xlarge') {
      padding: 6rem 0 2rem;
      background: linear-gradient(90deg, rgba(255,255,255, .7) 0%, rgba(255,255,255, .2) 60%, rgba(255,255,255,0) 100%);
    }

    @include breakpoint-to('desktop-small') {
      padding: 0;
      background: none;
    } 
  }

  &__title {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    width: 20rem;

    @include breakpoint-to('desktop-small') {
      font-size: 4rem;
      width: 25rem;
    } 

    @include breakpoint-to('desktop') {
      font-size: 5rem;
      line-height: 1.1;
      width: 30rem;
    } 
  }

  &__desc {
    color: var(--c-secondary);

    @include breakpoint-to('desktop-small') {
      font-size: 1.5rem;
    } 

    @include breakpoint-to('desktop') {
      font-size: 2rem;
    }
  }
}
</style>