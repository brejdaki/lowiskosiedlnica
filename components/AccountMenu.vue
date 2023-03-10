<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import { useMainStore } from '@/stores/main'
import { menuAccount } from '@/composables/MenuAccount';

const viewport = useViewport()
const router = useRouter()
const store = useMainStore()
const { logout } = useStrapiAuth()
const menu = ref(null)

function handleMenuItem() {
  store.setMobileMenuVisible(false)
  store.setMenuOverflowLayerVisible(false)
  store.setUserMenuVisible(false)
}

async function handleLogout() {
  logout()
  handleMenuItem()
  await router.push('/')
}

onClickOutside(menu, (event: PointerEvent) => {
  viewport.isGreaterOrEquals('desktop-small') && 
    (event?.target?.localName !== "button") && handleMenuItem()
})
</script>

<template>
<div
  ref="menu"
  class="account-menu"
>
  <ul 
    class="account-menu__list"
  >
    <li
      v-for="(item, index) in menuAccount"
      :key="index"
      :class="[
        'account-menu__list-item', 
        { 'font-sans' : $viewport.isLessThan('desktop-small') }
      ]"
    >
      <NuxtLink
        no-rel
        @click="handleMenuItem"
        :class="[
          { 'text-color--black' : $viewport.isGreaterOrEquals('desktop-small') },
          { 'text-color--secondary' : $viewport.isLessThan('desktop-small') }
        ]"
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
  width: 16.938rem;
  z-index: var(--z-upper-menu);
  top: 4rem;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 3rem 1.5rem 0;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  @include breakpoint-to('desktop-small') {
    position: absolute;
    top: 100%;
    right: 1.5rem;
    left: inherit;
    width: auto;
    padding: 1rem 1.5rem;
    border: 1px solid var(--c-black);
    border-radius: 0.25rem;
    bottom: inherit;
  }

  &__list {
    &-item {
      font-size: 1.75rem;

      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }

      @include breakpoint-to('desktop-small') {
        font-size: 1.2rem;
        color: var(--c-black)
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

    @include breakpoint-to('desktop-small') {
      width: max-content;
      margin: 0.75rem 0 0 0;
      height: auto;
      background-color: transparent;
      padding: 0;
      letter-spacing: 0;
      color: inherit;
      @include hover-underline(var(--c-primary))
    }
  }
}
</style>