<script lang="ts" setup>
import { menuItem } from '@/composables/MenuItem';
</script>

<template>
<ul 
  class="navbar__list"
>
  <li
    v-for="(item, index) in menuItem"
    :key="index"
    class="navbar__list-item font-sans"
  >
    <NuxtLink
      class="text-color--secondary"
      :to="item.link"
    >
      {{ item.label }}
    </NuxtLink>
  </li>
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
      @include hover-underline(var(--c-secondary))
    }
  }
}
</style>