<template>
<div
  id="info-fishery"
  class="container"
>
  <div
    class="info-fishery"
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
        Łowisko połozone jest 3km od Wschowy, którą przecina DK-12 na odcinku 
        Leszno - Głogów a poblize węzłów S5 - Lasocice (15km) 
        oraz S3 - Jerzmanowa (35km) gwarantuje sprawny dojazd z dalszych 
        odległości (<NuxtLink href="https://goo.gl/maps/EgvQcAN4GqUazeGNA" target="_blank">sprawdź jak dojechać</NuxtLink>).
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
        Powierzchnia stawu wynosi 2 ha lustra wody. Na zbiorniku znajdują 
        się dwie wyspy. Akwen powstawł po kopalnii piasku dzięki czemu
        dno jest piaszczyste z licznymi dołkami. Głębokość średnia 3 m,
        maksymalna ok 5 m.
      </p>

      <p>
        Otoczenie polami i lasami sprawia, ze na wędkarskiej zasiadce
        panuje cisza i spokój a pobliska stadnina koni sprawia, ze konie
        na wybiegu są prawie "na wyciągnięcie ręki".
      </p>

      <p>
        W obsadzie ryb dominuje karp (pospolity i pełnołuski, rekord 18 kg), 
        amur (rekord 15 kg), karaś (srebrzysty i pospolity), leszcz, płoć, 
        lin (rekord 4 kg) i płoć. Jak i większość białorybu. Dla fanów
        spinningu jest ładny okoń i szczupak.
      </p>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.info-fishery {
  padding: 0 0 5rem;

  &__inner {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
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
}
</style>