<script lang="ts" setup>
definePageMeta({
  layout: 'main',
  middleware: 'auth'
})

const { logout } = useStrapiAuth()
const { find } = useStrapi()
const router = useRouter()
const user = useStrapiUser()

function handleLogout() {
  logout()
  router.push('/login')
}

const getUserFishes = await find('fishes', {
  populate: [
    'image'
  ],
  filters: {
    user: {
      id: {
        $eq: user.value?.id,
      }
    },
  }
})
</script>

<template>
<div>
  <div v-if="user">
    <h2>User</h2>
    <button type="button" @click="handleLogout">
      Logout
    </button>
    <pre>{{ user }}</pre>
    <pre>{{ getUserFishes }}</pre>
  </div>
</div>
</template>