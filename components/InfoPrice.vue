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
@import '@/assets/css/components/InfoPrice';
</style>