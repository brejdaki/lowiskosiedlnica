<template>
  <div />
</template>

<script setup lang="ts">
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