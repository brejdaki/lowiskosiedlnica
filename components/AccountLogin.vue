<script lang="ts" setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup';

import { useMainStore } from '@/stores/main'
import { Hash } from '@/composables/enum/hash'

const { 
  login, 
  getProviderAuthenticationUrl 
} = useStrapiAuth()
const store = useMainStore()
const router = useRouter()
const route = useRoute()

const isLoading = ref(false)
const isAuthorizationError = ref(false)
const isButtonDisabled = ref(false)

const isUserConfirmed = computed((): boolean => {
  return route.hash === Hash.loginConfirmed
})

const isSubmitButtonDisabled = computed((): boolean => {
  return isButtonDisabled.value
})

const form = reactive({ 
  identifier: '', 
  password: '', 
})

const schema = Yup.object().shape({
  identifier: Yup.string()
    .email(() => 'Nieprawidłowy adres email.')
    .required(() => 'Pole wymagane.'),
  password: Yup.string()
    .min((6), () => 'Hasło musi posiadać min 6 znaków.')
    .required(() => 'Pole wymagane.'),
});

async function onSubmit(_values: any, actions: any) {
  isLoading.value = true

  try {
    await login(form)

    store.setModalVisible(false)
    router.push('/account')
  } catch (e) {
    isAuthorizationError.value = true
    actions.resetForm()
  }

  isLoading.value = false
}

function onInvalidSubmit(): void {
  isButtonDisabled.value = true

  setTimeout(() => {
    isButtonDisabled.value = false
  }, 2000);
}

// const handleFacebookLogin = (): void => {
//   window.location = getProviderAuthenticationUrl('facebook')
// }

// const handleGitLogin = (): void => {
//   window.location = getProviderAuthenticationUrl('github')
// }
</script>

<template>
<div class="form__header">
  <h3 class="title">Logowanie</h3>

  <div 
    v-if="$viewport.isGreaterOrEquals('mobile-large') && !isUserConfirmed"
    class="form__account"
  >
    Nie masz konta? 
    <NuxtLink :to="Hash.register">Zarejestruj się</NuxtLink>.
  </div>
</div>

<div 
  v-if="isUserConfirmed && !isAuthorizationError"
  class="form__success"
>
  <span>Konto użytkownia zostało aktywowane.</span><br>
  Teraz możesz się zalogować.
</div>

<Form
  class="form"
  @submit="onSubmit"
  :validation-schema="schema"
  @invalid-submit="onInvalidSubmit"
>
  <InputBase
    name="identifier"
    label="email"
    placeholder="Twój adress email"
    @input="form.identifier = $event.target.value"
  />

  <InputBase
    name="password"
    label="hasło"
    type="password"
    placeholder="Twoje hasło"
    @input="form.password = $event.target.value"
  />

  <div 
    v-if="isAuthorizationError"
    class="form__error"
  >
    <span>Błędny login lub hasło.</span><br>Spróbuj ponownie lub
    <NuxtLink :to="Hash.forgotPassword">utwórz nowe hasło</NuxtLink>.
  </div>

  <ButtonBase 
    :disabled="isSubmitButtonDisabled"
    class="form__submit"
  >
    <template v-slot:text>
      {{ isLoading ? 'Loguję ...' : 'Zaloguj się' }}
    </template>
  </ButtonBase>
</form>

<!-- <ButtonBase
  @clicked="handleFacebookLogin"
>
  <template v-slot:text>
    Zaloguj za pomocą facebooka
  </template>
</ButtonBase>

<ButtonBase
  @clicked="handleGitLogin"
>
  <template v-slot:text>
    Zaloguj za pomocą github
  </template>
</ButtonBase> -->

<div 
  v-if="$viewport.isLessThan('mobile-large') && !isUserConfirmed"
  class="form__account"
>
  Nie masz konta? 
  <NuxtLink :to="Hash.register">Zarejestruj się</NuxtLink>.
</div>
</template>

<style lang="scss" scoped>
.form {
  &__error {
    color: var(--c-black-alpha);
    margin: 0 0.5rem;

    span {
      display: inline-block;
      margin-bottom: .5rem;
      color: var(--c-from-error);
    }
  }

  &__success {
    color: var(--c-black-alpha);
    margin-bottom: 1.5rem;

    span {
      display: inline-block;
      font-size: 1.2rem;
      margin-bottom: .5rem;
      color: var(--c-form-succes);
    }
  }

  &__header {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
  }

  &__account {
    margin-top: 2.5rem;
    text-align: center;
    color: var(--c-black-alpha);

    @include breakpoint-to('mobile-large') {
      margin: 0;
      text-align: right;
    }
  }

  &__submit {
    margin-top: 1.5rem;
  }
}
</style>