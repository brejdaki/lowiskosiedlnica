<script lang="ts" setup>
// const viewport = useViewport()
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

        <span>
          Po wcześniejszym kontakcie <br>
          <NuxtLink no-rel to="#kontakt">telefonicznym</NuxtLink>.
        </span>
      </div>

      <NuxtImg
        class="info-price__plant"
        src="/images/plant-color-1.svg" 
        loading="lazy"
        width="80"
        height="109"
        alt="Roślina"
      />

      <NuxtImg
        class="info-price__line info-price__line--one"
        src="/images/line.svg" 
        loading="lazy"
        height="1"
        alt="Linia"
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
      alt="Chmura"
    />

    <NuxtImg
      v-if="$viewport.isGreaterOrEquals('desktop-small')"
      class="info-price__cloud info-price__cloud--two"
      src="/images/cloud.svg" 
      loading="lazy"
      height="89"
      width="160"
      alt="Chmura"
    />

    <NuxtImg
      v-if="$viewport.isGreaterOrEquals('desktop-small')"
      class="info-price__cloud info-price__cloud--three"
      src="/images/cloud.svg" 
      loading="lazy"
      height="45"
      width="80"
      alt="Chmura"
    />

    <NuxtImg
      class="info-price__line info-price__line--two"
      src="/images/line.svg" 
      loading="lazy"
      height="1"
      alt="Linia"
    />

    <NuxtImg
      class="info-price__line info-price__line--three"
      src="/images/line.svg" 
      loading="lazy"
      height="1"
      alt="Linia"
    />

    <NuxtImg
      class="info-price__line info-price__line--four"
      src="/images/line.svg" 
      loading="lazy"
      height="1"
      alt="Linia"
    />
  </div>
</div>
</template>

<style lang="scss" scoped>
.info-price {
  padding: 5rem 0 2.5rem;
  position: relative;

  @include breakpoint-to('desktop') {
    font-size: 1.25rem;
    padding-bottom: 3rem;
  }

  &__inner {
    display: flex;
    position: relative;
    flex-flow: column;
    gap: 2rem;
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;

    @include breakpoint-to('desktop-small') {
      flex-flow: row;
      gap: 10rem;
    }

    @include breakpoint-to('desktop') {
      padding-bottom: 2.5rem;
      margin-bottom: 2.5rem;
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

    > span {
      display: block;
      font-size: 1rem;
      margin-top: 1rem;
      color: var(--c-black-alpha);

      @include breakpoint-to('mobile-xlarge') {
        br {
          display: none;
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

  &__info {
    @include breakpoint-to('mobile-medium') {
      max-width: 70%;
    }

    @include breakpoint-to('desktop-small') {
      max-width: 100%;
    }

    @include breakpoint-to('desktop') {
      font-size: 1rem;
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
      right: 6rem;
    }
  }

  &__line {
    position: absolute;
    bottom: 0;
    right: -2rem;
    opacity: .3;

    &--one {
      bottom: 0;
      width: 14rem;

      @include breakpoint-to('desktop-small') {
        right: -1rem;
        width: 35rem;
      }

      @include breakpoint-to('desktop') {
        width: 60rem;
        right: -8rem;
      }
    }

    &--two {
      right: inherit;
      left: -4rem;
      width: 19rem;

      @include breakpoint-to('mobile-xlarge') {
        left: -1rem;
        width: 25rem;
      }

      @include breakpoint-to('desktop-small') {
        width: 35rem;
      }

      @include breakpoint-to('desktop') {
        left: -1rem;
        width: 40rem;
      }

      @include breakpoint-to('desktop') {
        width: 45rem;
      }
    }

    &--three {
      bottom: 1rem;
      width: 12rem;

      @include breakpoint-to('mobile-xlarge') {
        right: -2rem;
        width: 20rem;
      }

      @include breakpoint-to('desktop-small') {
        right: -1rem;
        width: 35rem;
      }

      @include breakpoint-to('desktop') {
        width: 50rem;
      }
    }

    &--four {
      bottom: -1rem;
      width: 15rem;

      @include breakpoint-to('mobile-large') {
        width: 17rem;
        right: -2rem;
      }

      @include breakpoint-to('mobile-xlarge') {
        width: 25rem;
      }

      @include breakpoint-to('desktop-small') {
        right: 10rem;
        width: 40rem;
      }

      @include breakpoint-to('desktop') {
        right: 15rem;
        width: 45rem;
      }
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
}
</style>