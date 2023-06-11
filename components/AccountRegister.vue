<script lang="ts" setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup';

import { Hash } from '@/composables/enum/hash'

const { register } = useStrapiAuth()

const isLoading = ref(false)
const isRegisterError = ref(false)
const isRegisterSucces = ref(false)
const isButtonDisabled = ref(false)

const isSubmitButtonDisabled = computed(() => {
  return isButtonDisabled.value
})

const form = reactive({ 
  username: '',
  email: '', 
  name: '',
  password: '', 
})

async function onSubmit(_values: any, actions: any) {
  isLoading.value = true

  try {
    await register(form)

    isRegisterSucces.value = true
  } catch (e) {
    isRegisterError.value = true

    actions.setErrors({
      email: 'Podany adres email został już użyty.',
    });
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
  email: Yup.string()
    .email(() => 'Nieprawidłowy adres email.')
    .required(() => 'Pole wymagane.'),
  name: Yup.string()
    .required(() => 'Pole wymagane.'),
  password: Yup.string()
    .min((6), () => 'Hasło musi posiadać min 6 znaków.')
    .required(() => 'Pole wymagane.'),
});
</script>

<template>
<div class="form__header">
  <h3 class="title">Rejestracja</h3>

  <div 
    v-if="$viewport.isGreaterOrEquals('mobile-large') && !isRegisterSucces"
    class="form__account"
  >
    Masz już konto? 
    <NuxtLink :to="Hash.login">Zaloguj się</NuxtLink>.
  </div>
</div>

<Form
  class="form"
  @submit="onSubmit"
  :validation-schema="schema"
  @invalid-submit="onInvalidSubmit"
>
  <InputBase
    v-if="!isRegisterSucces"
    name="email"
    label="email"
    placeholder="Twój adress email"
    @input="form.email = $event.target.value, form.username = $event.target.value"
  />

  <InputBase
    v-if="!isRegisterSucces"
    name="name"
    label="imię / nick"
    placeholder="Twoje imię lub nick"
    @input="form.name = $event.target.value"
  />

  <InputBase
    v-if="!isRegisterSucces"
    name="password"
    label="hasło"
    type="password"
    placeholder="Twoje hasło"
    @input="form.password = $event.target.value"
  />

  <div 
    v-if="isRegisterError"
    class="form__error"
  >
    <span>Ups! wygląda na to że, użytkownik o podanym adresie email 
      już istnieje.</span><br>
    Spróbuj <NuxtLink :to="Hash.login">zalogować się</NuxtLink> lub 
    <NuxtLink :to="Hash.forgotPassword">przypomnij hasło</NuxtLink>.
  </div>

  <div 
    v-if="isRegisterSucces"
    class="form__success"
  >
    <span>Sukces! Konto zostało założone.</span><br>
    Aby aktywować, kilknij w link aktywacyjny otrzymany na pocztę o 
    adresie email podanym przy rejestracji.
  </div>

  <ButtonBase 
    v-if="!isRegisterSucces"
    :disabled="isSubmitButtonDisabled"
    class="form__submit"
  >
    <template v-slot:text>
      {{ isLoading ? 'Rejestruję ...' : 'Zarejestruj się' }}
    </template>
  </ButtonBase>
</form>


<div 
  v-if="$viewport.isLessThan('mobile-large') && !isRegisterSucces"
  class="form__account"
>
  Masz już konto? 
  <NuxtLink :to="Hash.login">Zaloguj się</NuxtLink>
</div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/components/AccountRegister';
</style>