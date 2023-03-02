<script lang="ts" setup>
// const viewport = useViewport()
</script>

<template>
<div
  id="info-fishery"
  class="info-fishery container"
>
  <div
    class="info-fishery__inner"
  >
    <h3
      class="title"
    >
      Lokalizacja
    </h3>

    <p>
      Łowisko położone jest 3km od Wschowy, którą przecina DK-12 na odcinku 
      Leszno - Głogów a bliskość węzłów S5 - Lasocice (15km) 
      oraz S3 - Jerzmanowa (35km) gwarantuje sprawny dojazd z dalszych 
      miejscowości (<NuxtLink href="https://goo.gl/maps/n9wTkt9nA8YWmWCh7" target="_blank">sprawdź jak dojechać</NuxtLink>).
    </p>
  </div>

  <div
    class="info-fishery__inner"
  >
    <h3
      class="title"
    >
      Specyfika łowiska
    </h3>

    <p>
      Powierzchnia stawu to 2 ha lustra wody, na której znajdują 
      się dwie wyspy. Akwen powstał po zamkniętej kopalni piasku dzięki czemu
      dno jest piaszczyste z licznymi dołkami. Głębokość średnia to 3 metry a
      maksymalna ok 5 m.
    </p>

    <p>
      W obsadzie ryb dominuje <span>karp</span> (pospolity i pełnołuski, rekord 18 kg), 
      <span>amur</span> (rekord 15 kg), <span>karaś</span> (srebrzysty i pospolity), 
      <span>leszcz</span>, płoć oraz <span>lin</span> (rekord 4 kg). 
      Jak i większość białorybu. Fanów spinningu ucieszy ładny okoń i szczupak.
    </p>

    <p>
      Otoczenie polami i lasami sprawia, że na wędkarskiej zasiadce
      panuje cisza i spokój a pobliska stadnina koni, umożliwia podziwianie
      koni na wybiegu, które są prawie na wyciągnięcie ręki.
    </p>
  </div>

  <NuxtImg
    v-if="$viewport.isGreaterOrEquals('desktop-small')"
    class="info-fishery__cloud"
    src="/images/cloud.svg" 
    loading="lazy"
    height="112"
    width="201"
    alt="Chmura"
  />
</div>
</template>

<style lang="scss" scoped>
.info-fishery {
  position: relative;

  @include breakpoint-to('desktop') {
    font-size: 1.1rem;
  }

  &__inner {
    &:first-child {
      margin-bottom: 2rem;
    }

    @include breakpoint-to('desktop-small') {
      &:first-child {
        max-width: 60%;
      }

      max-width: 80%;
    }
  }

  span {
    color: var(--c-primary-darker)
  }

  &__cloud {
    position: absolute;
    right: 5rem;
    top: 5rem;

    @include breakpoint-to('desktop') {
      right: 9rem;
    }
  }
}
</style>