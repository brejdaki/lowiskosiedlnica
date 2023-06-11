<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { onClickOutside } from '@vueuse/core'

import { useMainStore } from '@/stores/main'
import { useUserStore } from '@/stores/user'
import { menuAccount } from '@/composables/MenuAccountUser';
import { menuAdmin } from '@/composables/MenuAccountAdmin';

const viewport = useViewport()
const router = useRouter()
const storeMain = useMainStore()
const { logout } = useStrapiAuth()

const { type } = storeToRefs(useUserStore()) 

const menu = ref(null)

const menuItems = computed(() => {
  return type.value === 'authenticated'
    ? menuAccount
    : menuAdmin
})

function handleMenuItem() {
  storeMain.setMobileMenuVisible(false)
  storeMain.setMenuOverflowLayerVisible(false)
  storeMain.setUserMenuVisible(false)
}

async function onLogout() {
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
      v-for="(item, index) in menuItems"
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
    @click="onLogout"
  >
    Wyloguj się
  </button>
</div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/components/AccountMenu';
</style>