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
  router.push('/')
}


// const { create } = useStrapi()

// const onSubmit = async () => {
//   await create('fish', { 
//     name: 'My restaurant' 
//   })
// }

const avatar = ref(null)
const form = reactive()
const client = useStrapiClient()
async function onSubmit () {
  try {
    const formData = new FormData()
    formData.append('files.avatar', avatar)
    formData.append('data', JSON.stringify(form))
    const { data } = await client(`/fishes`, {
      method: 'POST',
      body: formData
    })
  } catch (e) { }
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



    <form @submit="onSubmit">

<input type="file">

<button>dodaj</button>
</form>
  </div>
</div>
</template>