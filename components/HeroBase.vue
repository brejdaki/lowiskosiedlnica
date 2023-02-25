<template>
  <div 
    class="container-fluid hero"
  >
    <div
      class="container"
    >
      <div
        class="hero__container"
      >
        <h1 
          class="hero__title text-size--largest"
        >
          Łowisko wędkarskie Siedlnica
        </h1>

        <span 
          class="hero__desc text-size--small"
        >
          Mała wielka woda.
        </span> 
      </div>
    </div>

    <div 
      class="hero__image"
    >
      <img src="/images/hero.svg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  padding: 2rem 0;

  &__container {
    max-width: 50vw;
    padding-left: .5rem;
  }

  &__title {
    line-height: 1.2;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%);
  }

  &__desc {
    // font-size: .75rem;
  }

  &__image {
    width: 75vw;
    top: 5%;
    bottom: 0;
    right: 0;
    z-index: var(--z-under);
    position: absolute;

    img {
      max-height: 100%;
      margin-left: auto;
    }
  }
}
</style>