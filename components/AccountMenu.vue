<script lang="ts" setup>
import { useMainStore } from '@/stores/main'
import { menuAccount } from '@/composables/MenuAccount';

const router = useRouter()
const store = useMainStore()
const { logout } = useStrapiAuth()

function handleMenuItem() {
  store.setMobileMenuVisible(false)
  store.setMenuOverflowLayerVisible(false)
}

async function handleLogout() {
  logout()
  handleMenuItem()
  await router.push('/')
}
</script>

<template>
<div
  class="account-menu"
>
  <ul 
    class="account-menu__list"
  >
    <li
      v-for="(item, index) in menuAccount"
      :key="index"
      class="account-menu__list-item font-sans"
    >
      <NuxtLink
        no-rel
        @click="handleMenuItem"
        class="text-color--secondary"
        :to="item.link"
      >
        {{ item.label }}
      </NuxtLink>
    </li>
  </ul>

  <button
    class="account-menu__button"
    @click="handleLogout"
  >
    Wyloguj się
  </button>
</div>
</template>

<style lang="scss" scoped>
.account-menu {
  background-color: var(--c-white);
  position: fixed;
  width: 16.875rem;
  height: calc(100vh - 4rem);
  z-index: var(--z-upper-menu);
  top: 4rem;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 3rem 1.5rem 0;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  &__list {
    &-item {
      font-size: 1.75rem;

      @media screen and (height: 30rem) {
        font-size: 1.25rem;
      }

      @media screen and (min-height: 48.75rem) {
        font-size: 2rem;
      }

      &:not(:last-child) {
        margin-bottom: 0.5rem;

        @media screen and (min-height: 48.75rem) {
          margin-bottom: 1.25rem;
        }
      }
    }
  }

  &__button {
    @include reset-button;
		height: 5.25rem;
    width: calc(100% + 3rem);
		margin: 3rem -1.5rem 0;
		background-color: var(--c-black-alpha);
		color: var(--c-white);
		font-size: 1.2rem;
		letter-spacing: 1px;
		padding: 0 1.5rem;
		text-align: left;
  }
}
</style>