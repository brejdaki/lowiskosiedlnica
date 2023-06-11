<script lang="ts" setup>
// const viewport = useViewport()
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
        <NuxtLink no-rel to="#cennik">cennik</NuxtLink>,
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
@import '@/assets/css/components/InfoBox';
</style>