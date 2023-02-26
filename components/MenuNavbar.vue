<script lang="ts" setup>
import { MenuItem } from '@/composables/InterfaceMenuItem';

const menuItem: MenuItem[] = [
  {
		label: 'Kalendarz',
		link: ''
	}, {
		label: 'Cennik',
		link: ''
	}, {
		label: 'Regulamin',
		link: ''
	}, {
		label: 'Oferta',
		link: ''
	}, {
		label: 'Kontakt',
		link: ''
	},
]
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
      color: var(--c-secondary);
      @include hover-underline(var(--c-secondary))
    }
  }
}
</style>