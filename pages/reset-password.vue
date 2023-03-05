<script setup lang="ts">
const { resetPassword } = useStrapiAuth()
const router = useRouter()
const route = useRoute()

const form = reactive({ 
  password: '', 
  passwordConfirmation: '' 
})
const loading = ref(false)
const getQueryCode = route.query.code as string ?? ''

const onSubmit = async () => {
  loading.value = true

  try {
    await resetPassword({ 
      code: getQueryCode, 
      password: form.password, 
      passwordConfirmation: 
      form.passwordConfirmation 
    })
    router.push('/')
  } catch (e) {}

  loading.value = false

}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input 
      v-model="form.password" 
      placeholder="Password" 
      type="password" 
      name="password" 
      required
    >

    <input 
      v-model="form.passwordConfirmation" 
      placeholder="passwordConfirmation" 
      type="password" 
      name="passwordConfirmation" 
      required
    >

    <button type="submit">
      {{ loading ? 'Loading...' : 'Register' }}
    </button>
  </form>
</template>