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
      class="navbar__logo"
    >
      <NuxtLink 
        to="/"
        class="navbar__link"
      >
        łowiskosiedlnica.pl
      </NuxtLink>
    </div>

    <MenuNavbar 
      v-if="viewport.isGreaterOrEquals('desktop')"
    />

    <Transition name="slide">
      <MenuSlide 
        v-if="isMenuSlideVisible"
      />
    </Transition>

    <NavbarHamburger 
      v-if="viewport.isLessThan('desktop')"
    />
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: var(--c-lgray);
  padding: 1rem;
  position: relative;

  &__logo {
    font-size: 1.25rem;
  }

  &__link {
    text-decoration: none;
    color: var(--c-secondary);
    @include hover-underline(var(--c-secondary))
  }

  &__list {
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-18rem);
}
</style>
