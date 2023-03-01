<script lang="ts" setup>
import { menuItem } from '@/composables/MenuItem';
</script>

<template>
<ul 
  class="navbar__list"
>
  <template
    v-for="item in menuItem"
  >
    <li
      v-if="item.isDesktop"
      class="navbar__list-item font-sans"
    >
      <NuxtLink
        class="text-color--secondary"
        :to="item.link"
      >
        {{ item.label }}
      </NuxtLink>
    </li>
  </template>
</ul>
</template>

<style lang="scss" scoped>
.navbar__list {
  display: flex;
  gap: 1rem;
  flex-flow: row;

  &-item {
    a {
      font-size: 1.25rem;
      @include hover-underline(var(--c-primary));
    }
  }
}
</style>