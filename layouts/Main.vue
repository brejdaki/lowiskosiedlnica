<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/main'
import { Hash } from '@/composables/enum/hash'

useHead({
  title: 'Łowisko wędkarskie Siedlnica',
  meta: [
    { 
      name: 'description',
      content: 'Wędkarskie łowisko komercyjne Siedlnica zaprasza zawody wędkarskie dla zakładów pracy i grup zorganizowanych, łowienie rekreacyjne.'
    },
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ],
})

const route = useRoute()

const { 
  isModalVisible,
  isLayerOverflowVisible 
} = storeToRefs(useMainStore()) 

const isAccountLogin = computed(() => {
  return route.hash === Hash.login || route.hash === Hash.loginConfirmed
})

const isAccountRegister = computed(() => {
  return route.hash === Hash.register
})

const isAccountForgotPassword = computed(() => {
  return route.hash === Hash.forgotPassword
})

const isAccountResetPassword = computed(() => {
  return route.hash.startsWith(Hash.resetPassword)
})

// const hashCallModal = ['#login', '#register', '#forgot-password']
// const isModal = computed(() => {
//   return hashCallModal.includes(route.hash)
// })

// store.setModalVisible(isModal)

</script>

<template>
  <NuxtLoadingIndicator />

  <NavbarBase />

  <main>
    <slot />
  </main>

  <FooterPage />

  <ClientOnly>
    <Transition name="fade">
      <LayerOverflow 
        v-if="isLayerOverflowVisible"
      />
    </Transition>

    <Transition name="fade">
      <ModalBase
        v-if="isModalVisible"
      >
        <AccountLogin 
          v-if="isAccountLogin"
        />
        
        <AccountRegister 
          v-if="isAccountRegister"
        />

        <AccountForgotPassword
          v-if="isAccountForgotPassword"
        />

        <AccountResetPassword
          v-if="isAccountResetPassword"
        />
      </ModalBase>
    </Transition>
  </ClientOnly>
</template>

<style lang="scss">
main {
  padding-top: 4rem;
  min-height: calc(100vh - 600px);

  @include breakpoint-to('desktop-small') {
    min-height: calc(100vh - 200px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>