<script lang="ts" setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup';

const { forgotPassword } = useStrapiAuth()

const isLoading = ref(false)
const isForgotPasswordSucces = ref(false)
const isButtonDisabled = ref(false)

const isSubmitButtonDisabled = computed(() => {
  return isButtonDisabled.value
})

const form = reactive({ 
  email: '', 
})

async function onSubmit() {
  isLoading.value = true

  try {
    await forgotPassword(form)

    isForgotPasswordSucces.value = true
  } catch (e) {
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
});
</script>

<template>
<div class="form__header">
  <h3 class="title">Zapomniane hasło</h3>
</div>

<Form
  class="form"
  @submit="onSubmit"
  :validation-schema="schema"
  @invalid-submit="onInvalidSubmit"
>
  <InputBase
    v-if="!isForgotPasswordSucces"
    name="email"
    label="email"
    placeholder="Twój adress email"
    @input="form.email = $event.target.value"
  />

  <div 
    v-if="isForgotPasswordSucces"
    class="form__success"
  >
    <span>Żądanie zamiany hasła zostało przyjęte.</span><br>
    Zaloguj się na podany adres email. W otrzymanej wiadomości 
    znajduje się link który, kieruje do formularza nowego hasła.
  </div>

  <ButtonBase 
    v-if="!isForgotPasswordSucces"
    :disabled="isSubmitButtonDisabled"
    class="form__submit"
  >
    <template v-slot:text>
      {{ isLoading ? 'Wysyłam wiadomość ...' : 'Odzyskaj hasło' }}
    </template>
  </ButtonBase>
</form>
</template>

<style lang="scss" scoped>
@import '@/assets/css/components/AccountForgotPassword';
</style>