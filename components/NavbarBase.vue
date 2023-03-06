<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'
import { Hash } from '@/composables/enum/hash'

const store = useMainStore()
const router = useRouter()
const { isMenuMobileVisible } = storeToRefs(useMainStore()) 

async function  handleLogin (): Promise<void> {
	await router.push({ hash: Hash.login })
  store.setModalVisible(true)
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

      <Transition name="slide">
        <MenuSlide 
          v-if="isMenuMobileVisible"
        />
      </Transition>

      <NavbarHamburger 
        v-if="$viewport.isLessThan('desktop-small')"
      />

      <button
        v-if="$viewport.isGreaterOrEquals('desktop-small')"
        @click="handleLogin"
      >
        logowanie
      </button>
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
  overflow: hidden;
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
    gap: 3rem;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
