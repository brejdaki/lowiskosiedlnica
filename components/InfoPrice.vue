<script lang="ts" setup>
const viewport = useViewport()
</script>

<template>
<div
  id="cennik"
  class="container"
>
  <div
    class="info-price"
  >
    <h3
      class="title"
    >
      Cennik
    </h3>

    <div
      class="info-price__inner"
    >
      <div
        class="info-price__box"
      >
        <h4>Dniówka <small>6:00 - 21:00</small></h4>
        
        <ul>
          <li>osoba wędkująca - <span>30 zł</span>,</li>
          <li>osoba towarzysząca - 10 zł.</li>
        </ul>
      </div>

      <div
        class="info-price__box"
      >
        <h4>Nocka <small>21:00 - 6:00</small></h4>
        
        <ul>
          <li>osoba wędkująca - <span>50 zł</span>,</li>
          <li>osoba towarzysząca - 20 zł.</li>
        </ul>
      </div>

      <NuxtImg
        class="info-price__plant"
        src="/images/plant-color-1.svg" 
        loading="lazy"
        width="80"
        height="109"
      />

      <NuxtImg
        class="info-price__line"
        src="/images/line.svg" 
        loading="lazy"
        height="1"
      />
    </div>

    <div
      class="info-price__info"
    >
      Przypominamy, że odpłatność jest stała niezależnie od 
      tego czy wędkowanie trwało godzinę, czy cały dzień.
    </div>

    <NuxtImg
      class="info-price__cloud"
      src="/images/cloud.svg" 
      loading="lazy"
      height="70"
      width="126"
    />

    <NuxtImg
      v-if="$viewport.isGreaterOrEquals('desktop-small')"
      class="info-price__cloud info-price__cloud--two"
      src="/images/cloud.svg" 
      loading="lazy"
      height="89"
      width="160"
    />

    <NuxtImg
      v-if="$viewport.isGreaterOrEquals('desktop-small')"
      class="info-price__cloud info-price__cloud--three"
      src="/images/cloud.svg" 
      loading="lazy"
      height="45"
      width="80"
    />
  </div>
</div>
</template>

<style lang="scss" scoped>
.info-price {
  padding: 5rem 0;
  position: relative;

  @include breakpoint-to('desktop') {
    font-size: 1.25rem;
  }

  &__inner {
    display: flex;
    position: relative;
    flex-flow: column;
    gap: 2rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;

    @include breakpoint-to('desktop-small') {
      flex-flow: row;
      gap: 10rem;
    }
  }

  &__box {
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

        span {
          color: var(--c-primary-darker);
        }
      }
    }
  }

  h4 {
    font-size: 1.25rem;
    margin-bottom: .75rem;
    color: var(--c-secondary);

    @include breakpoint-to('desktop') {
      font-size: 1.5rem;
    }

    small {
      font-weight: 400;
      margin-left: .5rem;

      color: var(--c-black-alpha);
    }
  }

  &__plant {
    position: absolute;
    bottom: 0;
    right: 0;

    @include breakpoint-to('mobile-xlarge') {
      width: 6.25rem;
      height: auto;
    }

    @include breakpoint-to('desktop-small') {
      right: 8rem;
    }
  }

  &__line {
    width: 19rem;
    height: 1px;
    position: absolute;
    bottom: 0;
    right: -4rem;

    @include breakpoint-to('desktop-small') {
      right: 0;
      width: 30rem;
    }
  }

  &__cloud {
    position: absolute;
    top: 1rem;
    right: 2rem;

    @include breakpoint-to('desktop-small') {
      top: 4rem;
      right: 17rem;
    }

    &--two {
      top: 1rem;
      right: 1rem;
    }

    &--three {
      top: 2rem;
      right: 32rem;
    }
  }

  &__info {
  }
}
</style>