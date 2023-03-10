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
.navbar__list {
  display: flex;
  gap: 1.5rem;
  flex-flow: row;

  &-item {
    a {
      font-size: 1.25rem;
      letter-spacing: 1px;
      @include hover-underline(var(--c-primary));
    }
  }
}
</style>