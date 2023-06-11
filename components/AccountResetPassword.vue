<script lang="ts" setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup';

import { useMainStore } from '@/stores/main'
import { Hash } from '@/composables/enum/hash'

const { resetPassword } = useStrapiAuth()
const router = useRouter()
const route = useRoute()
const store = useMainStore()

const isLoading = ref(false)
const isResetPasswordSucces = ref(false)
const isResetPasswordError = ref(false)
const isButtonDisabled = ref(false)

const isSubmitButtonDisabled = computed((): boolean => {
  return isButtonDisabled.value
})

const form = reactive({ 
  code: '', 
  password: '', 
  passwordConfirmation: ''
})

async function onSubmit() {
  const code = route.hash.match(/[^=]*$/g)

  form.code = code ? code[0] : ''
  isLoading.value = true

  try {
    await resetPassword(form)

    isResetPasswordSucces.value = true

    setTimeout(() => {
      store.setModalVisible(false)
      router.push('/account')
    }, 2000);
  } catch (e) {
    isResetPasswordError.value = true
  }

  isLoading.value = false
}

function onInvalidSubmit() {
  isButtonDisabled.value = true

  setTimeout(() => {
    isButtonDisabled.value = false
  }, 2000);
}

const schema = Yup.object().shape({
  password: Yup.string()
    .min((6), () => 'Hasło musi posiadać min 6 znaków.')
    .required(() => 'Pole wymagane.'),
  passwordConfirm: Yup.string()
    .required(() => 'Pole wymagane.')
    .oneOf([Yup.ref('password')], 'Hasła nie pasują do siebie.'),
});
</script>

<template>
<div class="form__header">
  <h3 class="title">Nowe hasło</h3>
</div>

<Form
  class="form"
  @submit="onSubmit"
  :validation-schema="schema"
  @invalid-submit="onInvalidSubmit"
>
  <InputBase
    v-if="!isResetPasswordSucces"
    name="password"
    type="password"
    label="hasło"
    placeholder="Podaj nowe hasło"
    @input="form.password = $event.target.value"
  />

  <InputBase
    v-if="!isResetPasswordSucces"
    name="passwordConfirm"
    type="password"
    label="powtórz hasło"
    placeholder="Powtórz nowe hasło"
    @input="form.passwordConfirmation = $event.target.value"
  />

  <div 
    v-if="isResetPasswordError"
    class="form__Error"
  >
    <span>Wystąpił nieokreślony błąd.</span><br>
    <NuxtLink :to="Hash.resetPassword">Spróbuj ponownie</NuxtLink> wysłać żądanie zmiany hasła.
  </div>

  <div 
    v-if="isResetPasswordSucces"
    class="form__success"
  >
    <span>Hasło zostało zmienione.</span><br>
    Za parę chwil zostaniesz przekierowany do panelu użytkownia.<br><br>

    Jeśli to nie nastąpi <NuxtLink to="/account">kliknij tutaj</NuxtLink>.
  </div>

  <ButtonBase 
    v-if="!isResetPasswordSucces"
    :disabled="isSubmitButtonDisabled"
    class="form__submit"
  >
    <template v-slot:text>
      {{ isLoading ? 'Zmieniam hasło ...' : 'Odzyskaj hasło' }}
    </template>
  </ButtonBase>
</form>
</template>

<style lang="scss" scoped>
@import '@/assets/css/components/AccountResetPassword';
</style>