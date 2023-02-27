<script lang="ts" setup>
import { menuItem } from '@/composables/MenuItem';

const getYear = new Date().getFullYear()
</script>

<template>
  <footer
    class="footer-page__outer container-fluid"
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
          v-for="(item, index) in menuItem"
          :key="index"
          class="footer-page__list-item"
        >
          <NuxtLink
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
        &copy; Łowisko wędkarskie Siedlnica - {{ getYear }}
      </div>

      <img 
        class="footer-page__plant"
        src="/images/plant-color-2.svg"
        width="97"
        height="200"
        loading="lazy"
      />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-page {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 
    "contact"
    "menu"
    "copyright";
  grid-column-gap: 1.5rem;
  grid-row-gap: 0px;

  @include breakpoint-to('desktop-small') {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "contact menu"
      "contact copyright";
    grid-column-gap: 0;
  }
 
  &__outer {
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: var(--c-lgray);
  }

  &__contact {
    grid-area: contact;
    margin-bottom: 2rem;

    @include breakpoint-to('desktop-small') {
      margin: 0;
    }
  }

  &__list {
    grid-area: menu;
    display: flex;
    flex-flow: column;
    margin-bottom: 2rem;

    @include breakpoint-to('desktop-small') {
      margin: 0;
      flex-flow: row;
      justify-content: flex-end;
      gap: 1rem;
    }

    &-item {
      margin-bottom: 0.5rem;
    }
  }

  &__copyright {
    grid-area: copyright;
    display: flex;

    @include breakpoint-to('desktop-small') {
      justify-content: flex-end;
      align-items: flex-end;
    }
  }

  &__plant {
    position: absolute;
    right: 1.5rem;
    bottom: 3rem;
  }
}
</style>