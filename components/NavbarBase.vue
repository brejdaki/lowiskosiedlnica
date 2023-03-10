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
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  height: 4rem;
  background-color: var(--c-lgray);
  z-index: var(--z-navbar);

  &__container {
    width: 100%;
    display: flex;
    padding: 0 1rem;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @include breakpoint-to('desktop-small') {
      padding: 0 1.5rem;
    }
  }

  &__logo {
    font-size: 1.25rem;
  }

  &__link {
    color: var(--c-secondary);
  }

  &__inner {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  &__user {
    font-family: "IBM Plex Sans", Arial, Helvetica, sans-serif;
    display: flex;
    height: 2.375rem;
    width: fit-content;
    padding: .25rem 1rem;
    align-items: center;
    border: 1px solid var(--c-black);
    background-color: transparent;
    border-radius: .25rem;
    color: var(--c-black);
    font-size: 0.875rem;
    gap: 0.875rem;
    cursor: pointer;

    &:hover {
      color: var(--c-white);
      background-color: var(--c-black);

      img {
        filter: invert(0);
      }
    }

    &-icon {
      transform: rotate(90deg);
      filter: invert(1);

      &--active {
        transform: rotate(270deg);
      }
    }
  }
}

// .slide-enter-active,
// .slide-leave-active {
//   transition: transform 0.5s ease;
// }

// .slide-enter-from,
// .slide-leave-to {
//   transform: translateX(-100%);
// }
</style>
