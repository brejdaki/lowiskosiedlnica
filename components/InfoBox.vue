<script lang="ts" setup>
const viewport = useViewport()
</script>

<template>
<div
  id="aktualnosci"
  class="container"
>
  <div
    class="info-box"
  >
    <h3
      class="title"
    >
      Aktualności
    </h3>

    <p>
      Otwarcie sezonu 2023 - 1 kwiecień.
    </p>

    <ul>
      <li>
        W kwietniu łowisko czynne tylko w weekendy,
      </li>

      <li>
        Od 1 maja 2023 godziny otwarcia pozostają bez zmian,
      </li>

      <li>
        <strong>UWAGA!</strong> Zmieniły się opłaty, zalecamy sprawdzić 
        <NuxtLink to="#cennik">cennik</NuxtLink>,
      </li>

      <li>
        <strong>UWAGA!</strong> Od sezonu 2023 zakaz używania plecionek.
      </li>
    </ul>

    <NuxtImg 
      preload
      class="info-box__birds"
      src="/images/birds.svg"
      width="201"
      height="108"
      alt="Grafika ptaków"
    />

    <NuxtImg 
      v-if="$viewport.isLessThan('desktop-small')" 
      preload
      class="info-box__cloud"
      src="/images/cloud.svg"
      width="117"
      height="65"
      alt="Grafika chmury"
    />
  </div>
</div>
</template>

<style lang="scss" scoped>
.info-box {
  padding: 5rem 0;
  position: relative;

  @include breakpoint-to('mobile-xlarge') {
    padding: 5rem 8rem 5rem 0;
  }

  @include breakpoint-to('desktop-small') {
    padding: 7rem 8rem 7rem 0;
  }
  
  @include breakpoint-to('desktop') {
    padding: 7rem 15rem 7rem 0;
    font-size: 1.25rem;
  }

  ul {
    list-style-type: circle;
    padding-left: 1.1rem;

    @include breakpoint-to('desktop-small') {
      padding-left: 1.3rem;
    }

    li {
      &::marker {
        color: var(--c-black-alpha);
      }

      &:not(:last-child) {
        margin-bottom: .75rem;
      }
    }
  }

  &__birds {
    position: absolute;
    right: -1rem;
    top: -2.5rem;
    opacity: .5;

    @include breakpoint-to('mobile-xlarge') {
      right: 0rem;
      top: 0.5rem;
    }

    @include breakpoint-to('desktop-small') {
      top: 15rem;
      right: 2rem;
      height: 12rem;
      width: auto;
    }

    @include breakpoint-to('desktop') {
      height: 15rem;
    }
  }

  &__cloud {
    position: absolute;
    right: 0;
    top: 3rem;
    opacity: .7;

    @include breakpoint-to('mobile-xlarge') {
      top: 7rem;
    }
  }
}
</style>