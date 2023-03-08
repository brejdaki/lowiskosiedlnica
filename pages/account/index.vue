<script lang="ts" setup>
definePageMeta({
  layout: 'main',
  middleware: 'auth'
})

const config = useRuntimeConfig()
const { logout } = useStrapiAuth()
const { find, create } = useStrapi()
const router = useRouter()
const user = useStrapiUser()
const cookie = useCookie('strapi_jwt')
const formData = new FormData() 
const input = ref<HTMLInputElement | null>(null)

const isPending = ref(false)
const isError = ref(false)

// const client = useStrapiClient()


function handleLogout() {
  logout()
  router.push('/')
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

async function handleUploadImage () {
  isPending.value = true

  if (input?.value?.files) formData.append('files', input.value.files[0])

  await useFetch(`${config.public.strapiUrl}/api/upload/`, {
    method: "POST",
    headers: {
      'Authorization': 'Bearer ' + cookie.value,
    },
    body: formData,
  }).then(async (resp: any) => {
    await create('fishes', { 
      weight: 10, 
      dimension: 100, 
      species: 'Karp', 
      user: user.value?.id, 
      image: resp.value[0]?.id
    })
  })

  setTimeout(() => {
    isPending.value = false
  }, 3000)
}
</script>

<template>
<div>
  <div v-if="user">
    <h2>User</h2>
    <button type="button" @click="handleLogout">
      Logout
    </button>
    <pre>{{ user }}</pre>
    <!-- <pre>{{ getUserFishes }}</pre> -->

    <input ref="input" type="file">
    <button @click="handleUploadImage">upload</button>

    <div v-if="isPending">Loading ...</div>
  </div>
</div>
</template>