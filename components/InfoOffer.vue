<template>
<div
  id="oferta"
  class="container"
>
  <div
    class="info-offer"
  >
    <h3
      class="title"
    >
      Oferta
    </h3>

    <p>
      Wędkowanie, spotkania integracyjne, zawody wędkarskie dla 
      zakładów pracy i grup zorganizowanych oraz łowienie rekreacyjne.
    </p>

    <ul>
      <li>
        30 stanowisk,
      </li>
      
      <li>
        pole niamotowe,
      </li>

      <li>
        dostępność palenisk na ognisko,
      </li>

      <li>
        możliwość rozpalenia grilla,
      </li>

      <li>
        duży parking,
      </li>

      <li>
        teren monitorowany,
      </li>

      <li>
        dwie zadbane totalety <span>(toi-toi)</span>,
      </li>

      <li>
        namiot integracyjny,
      </li>

      <li>
        3 km do marketu oraz sklepu wędkarskiego,
      </li>

      <li>
        możliwość wjazdu przyczepą kempingową.
      </li>
    </ul>

    <p>
      W ofercie Łowiska znajduje się również możliwość zorganizowania kateringu 
      (możliwość organizacji urodzin, jubileuszy oraz tym podobnych imprez) 
      - masz pomysł, którego tutaj nie widzisz? Zadzwoń, porozmawiajmy a na pewno
      coś wymyślimy.
    </p>

    <p>
      Wystawiamy faktury dla firm.
    </p>
  </div>
</div>
</template>

<style lang="scss" scoped>
.info-offer {
  padding-top: 5rem;
  position: relative;

  @include breakpoint-to('desktop') {
    font-size: 1.1rem;
  }

  p {
    &:last-child {
      color: var(--c-black-alpha);
    }

    @include breakpoint-to('desktop-small') {
      max-width: 80%;
    }
  }

  ul {
    list-style-type: circle;
    padding-left: 1.1rem;
    margin: 1.5rem 0;

    @include breakpoint-to('mobile-xlarge') {
      column-count: 2;
      column-gap: 3rem;
    }

    @include breakpoint-to('desktop-small') {
      padding-left: 1.3rem;
      column-count: 3;
    }

    @include breakpoint-to('desktop') {
      max-width: 90%;
    }

    li {
      span,
      &::marker {
        color: var(--c-black-alpha);
      }

      &:not(:last-child) {
        margin-bottom: .5rem;
      }
    }
  }
}
</style>