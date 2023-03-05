<script lang="ts" setup>
definePageMeta({
  layout: 'main',
  middleware: 'auth'
})

const { 
  forgotPassword,
  login, 
  logout, 
  register,
  getProviderAuthenticationUrl
} = useStrapiAuth()
const user = useStrapiUser()
const router = useRouter()

const loading = ref(false)
const form = reactive({ 
  identifier: '', 
  password: '', 
  name: '' 
})

console.log(user.value)

const onSubmit = async () => {
  loading.value = true
  try {
    await login(form)
      .then(() => {
        router.push('/account')
      })
  } catch (e) {}
  loading.value = false
}

const onClick = () => {
  window.location = getProviderAuthenticationUrl('github') as unknown as Location
}

const onRegister = async () => {
  try {
    await register({ 
      username: form.name,
      email: form.identifier, 
      password: form.password 
    })
      .then(() => {
        router.push('/login')
      })
  } catch (e) {}
}

const onForgotPass = async () => {
  try {
    await forgotPassword({ 
      email: form.identifier 
    })
      .then(() => {
        router.push('/login')
      })
  } catch (e) {}
}

function handleLogout() {
  logout()
  router.push('/login')
}
</script>

<template>
<div>
  <h1>@nuxtjs/strapi</h1>

  <div v-if="user">
    <h2>User</h2>
    <button type="button" @click="handleLogout">
      Logout
    </button>
    <pre>{{ user }}</pre>
  </div>

  <form v-else @submit.prevent="onSubmit">

    <input 
      v-model="form.identifier" 
      placeholder="Email" 
      type="text"
      name="email" 
      required
    >

    <input 
      v-model="form.password" 
      placeholder="Password" 
      type="password" 
      name="password" 
      required
    >

    <button type="submit">
      {{ loading ? 'Loading...' : 'Login' }}
    </button>

    <button type="button" @click="onClick">
      {{ loading ? 'Loading...' : 'Login with GitHub' }}
    </button>
  </form>



  <form @submit.prevent="onRegister">
    <input 
      v-model="form.name" 
      placeholder="Name" 
      type="text" 
      name="name" 
      required
    >

    <input 
      v-model="form.identifier"
      placeholder="Email" 
      type="text" 
      name="email" 
      required
    >

    <input 
      v-model="form.password" 
      placeholder="Password" 
      type="password" 
      name="password" 
      required
    >

    <button type="submit">
      {{ loading ? 'Loading...' : 'Register' }}
    </button>
  </form>


  <form @submit.prevent="onForgotPass">
    <input 
      v-model="form.identifier" 
      placeholder="Email" 
      type="text" 
      name="email" 
      required
    >

    <button type="submit">
      {{ loading ? 'Loading...' : 'Forgot Pass' }}
    </button>
  </form>
</div>
</template>