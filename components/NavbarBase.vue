<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'

const viewport = useViewport()
const { isMenuSlideVisible } = storeToRefs(useMainStore()) 
</script>

<template>
<nav 
  class="navbar"
>
  <div 
    :class="[
      'navbar__container',
      { 'container': viewport.isGreaterOrEquals('desktop-small') }
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
        v-if="viewport.isGreaterOrEquals('desktop-small')"
      />

      <LinkFacebook 
        v-if="viewport.isGreaterOrEquals('desktop')"
        :size="28"
      />

      <Transition name="slide">
        <MenuSlide 
          v-if="isMenuSlideVisible"
        />
      </Transition>

      <NavbarHamburger 
        v-if="viewport.isLessThan('desktop-small')"
      />
    </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 4rem;
  position: relative;
  background-color: var(--c-lgray);
  overflow: hidden;

  &__container {
    width: 100%;
    display: flex;
    padding: 0 1rem;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-size: 1.25rem;
  }

  &__link {
    text-decoration: none;
    color: var(--c-secondary);
    @include hover-underline(var(--c-secondary))
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
