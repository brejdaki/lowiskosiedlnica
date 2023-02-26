<template>
<div
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

    <p>
      Od tego dnia łowisko będzie czynne tylko w weekendy.
    </p>

    <img 
      class="info-box__birds"
      src="/images/birds.svg"
      width="201"
      height="108"
      loading="lazy"
    />

    <img 
      class="info-box__cloud"
      src="/images/cloud.svg"
      width="117"
      height="65"
      loading="lazy"
    />
  </div>
</div>
</template>

<style lang="scss" scoped>
.info-box {
  padding: 5rem 0 3rem;
  position: relative;

  &__birds {
    position: absolute;
    right: -1rem;
    top: -2.5rem;
    opacity: .5;
  }

  &__cloud {
    position: absolute;
    right: 0;
    top: 3rem;
    opacity: .7;
  }
}
</style>