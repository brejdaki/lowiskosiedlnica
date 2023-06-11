<script lang="ts" setup>
import { NavbarMenuItems } from '~~/composables/NavbarMenuItems';

const getYear = new Date().getFullYear()
</script>

<template>
<footer
  class="footer-page__outer text-color--secondary container-fluid"
>
  <div
    class="footer-page container"
  >
    <div
      class="footer-page__contact"
    >
      Łowisko Wędkarskie Siedlnica<br/>
      Marzena Juszczak<br/>
      67-400 Wschowa<br/>
      Siedlnica<br/>
      NIP: 6971385856
    </div>

    <ul 
      class="footer-page__list"
    >
      <li
        v-for="(item, index) in NavbarMenuItems"
        :key="index"
        class="footer-page__list-item"
      >
        <NuxtLink
          no-rel
          class="text-color--secondary"
          :to="item.link"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>

    <div
      class="footer-page__copyright"
    >
      <span
        class="footer-page__created"
      >
        wykonanie:
        <NuxtLink 
          target="_blank" 
          to="https://whitecatstudio.pl"
        >
          whitecatstudio.pl
        </NuxtLink>
      </span>

      <div>
        &copy; Łowisko wędkarskie Siedlnica - {{ getYear }} 
      </div>
    </div>

    <NuxtImg 
      class="footer-page__plant"
      src="/images/plant-color-2.svg"
      width="97"
      height="200"
      loading="lazy"
      alt="Grafika rośliny"
    />
  </div>
</footer>
</template>

<style lang="scss" scoped>
@import '@/assets/css/components/FooterPage';
</style>