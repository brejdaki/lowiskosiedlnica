<script lang="ts" setup>
// const viewport = useViewport()

function handlePhoneCall (): void {
	document.location.href = 'tel:+48888660314'
}
</script>

<template>
  <div
    id="kontakt"
    class="container"
  >
    <div
      class="info-contact"
    >
      <h3
        class="title"
      >
        Kontakt
      </h3>

      <div
        class="info-contact__phone"
      >
        Gospodarz łowiska <span @click="handlePhoneCall">+48 888 660 314</span>
      </div>

      <NuxtImg
        class="info-contact__line info-contact__line--one"
        src="/images/line.svg" 
        loading="lazy"
        height="1"
        alt="Linia"
      />

      <NuxtImg
        class="info-contact__line info-contact__line--two"
        src="/images/line.svg" 
        loading="lazy"
        height="1"
        alt="Linia"
      />

      <NuxtImg
        class="info-contact__rock"
        src="/images/rock.svg" 
        loading="lazy"
        height="36"
        width="67"
        alt="Kamień"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-contact {
  padding: 5rem 0 3rem;
  margin-bottom: 7rem;
  position: relative;

  @include breakpoint-to('mobile-xlarge') {
    display: flex;
    flex-flow: column;
    align-items: center;

    h3 {
      display: none;
    }
  }

  @include breakpoint-to('desktop-small') {
    padding-bottom: 5rem;
    margin-bottom: 10rem;
  }

  &__phone {
    color: var(--c-secondary);

    @include breakpoint-to('mobile') {
      font-size: 1.2rem;
    }

    @include breakpoint-to('mobile-xlarge') {
      text-align: center;
    }

    @include breakpoint-to('desktop-small') {
      font-size: 1.5rem;
    }

    img {
      filter: invert(100);
      opacity: .25;
    }

    span {
      font-size: 1.5rem;
      display: block;
      color: var(--c-primary-darker);

      @include breakpoint-to('mobile') {
        font-size: 2rem;
      }

      @include breakpoint-to('desktop-small') {
        font-size: 2.5rem;
      }
    }
  }

  &__line {
    position: absolute;
    opacity: .3;

    &--one {
      bottom: 0;
      width: 70%;
      left: -2rem;

      @include breakpoint-to('mobile-xlarge') {
        width: 100%;
        left: -0.5rem;
      }
    }

    &--two {
      left: 3rem;
      width: 60%;
      bottom: -1.5rem;

      @include breakpoint-to('mobile-xlarge') {
        left: 6rem;
      }
    }
  }

  &__rock {
    position: absolute;
    bottom: -1rem;
    right: 0;

    @include breakpoint-to('mobile-xlarge') {
      right: 40%;
    }
  }
}
</style>