<script lang="ts" setup>
import { NavbarMenuItems } from '@/composables/NavbarMenuItems';
</script>

<template>
<ul 
  class="navbar__list"
>
  <template
    v-for="item in NavbarMenuItems"
  >
    <li
      v-if="item.isDesktop"
      class="navbar__list-item"
    >
      <NuxtLink
        no-rel
        :class="[
          { 'text-color--black' : $viewport.isGreaterOrEquals('desktop-small') },
          { 'text-color--secondary' : $viewport.isLessThan('desktop-small') }
        ]"
        :to="item.link"
      >
        {{ item.label }}
      </NuxtLink>
    </li>
  </template>
</ul>
</template>

<style lang="scss" scoped>
@import '@/assets/css/components/MenuNavbar';
</style>