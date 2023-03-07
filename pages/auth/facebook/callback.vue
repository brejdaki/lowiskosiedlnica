<script lang="ts" setup>
const { authenticateProvider } = useStrapiAuth()
const route = useRoute()
const router = useRouter()

onMounted(async () => {
  try {
    await authenticateProvider('facebook', route.query.access_token as string)
  } catch (e) {}
  router.push('/account')
})
</script>

<template>
  <div />
</template>