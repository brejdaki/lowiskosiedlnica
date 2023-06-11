<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'
import { Hash } from '@/composables/enum/hash'

const store = useMainStore()
const user = useStrapiUser()
const router = useRouter()

const { 
  isMenuMobileVisible,
  isUserMenuVisible
} = storeToRefs(useMainStore()) 

async function handleLogin (): Promise<void> {
	await router.push({ hash: Hash.login })
  store.setModalVisible(true)
}

function toggleUserMenu (): void {
  store.setUserMenuVisible(!isUserMenuVisible.value)
}
</script>

<template>
<nav 
  class="navbar"
>
  <div 
    :class="[
      'navbar__container',
      { 'container': $viewport.isGreaterOrEquals('desktop-small') }
    ]"
  >
    <div 
      class="navbar__logo"
    >
      <NuxtLink 
        to="/"
        class="navbar__link"
      >
        łowiskosiedlnica.pl
      </NuxtLink>
    </div>

    <div
      class="navbar__inner"
    >
      <MenuNavbar 
        v-if="$viewport.isGreaterOrEquals('desktop-small')"
      />

      <LinkFacebook 
        v-if="$viewport.isGreaterOrEquals('desktop')"
        :size="28"
      />

      <Teleport to="body">
        <Transition name="slide">
          <MenuSlide 
            v-if="$viewport.isLessThan('desktop-small') 
              && isMenuMobileVisible"
          />
        </Transition>
      </Teleport>

      <NavbarHamburger 
        v-if="$viewport.isLessThan('desktop-small')"
      />

      <button
        v-if="$viewport.isGreaterOrEquals('desktop-small')
          && !user"
        class="navbar__user"
        @click="handleLogin"
      >
        Zaloguj się
      </button>

      <button
        v-else-if="$viewport.isGreaterOrEquals('desktop-small')
          && user"
        class="navbar__user"
        @click="toggleUserMenu"
      >
        Cześć, {{ user.name }}

        <NuxtImg 
          :class="[
            'navbar__user-icon',
            { 'navbar__user-icon--active' : isUserMenuVisible }
          ]"
          src="/icons/chevron.svg"
          width="12"
          height="12"
        />
      </button>

      <!-- <Transition name="slide"> -->
        <AccountMenu 
          v-if="user && isUserMenuVisible"
        />
      <!-- </Transition> -->
    </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>
@import '@/assets/css/components/NavbarBase';
</style>
