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
@import '@/assets/css/components/InfoContact';
</style>