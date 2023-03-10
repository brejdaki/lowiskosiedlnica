<script lang="ts" setup>
definePageMeta({
  layout: 'main',
})

const config = useRuntimeConfig()

const { data, pending } = await useFetch(`${config.public.strapiUrl}/api/fishes?populate[0]=image`)
</script>

<template>
<div class="container">
  <div
    v-if="!pending && data.meta.pagination.total > 0"
    class="gallery"
  >
    <div
      v-for="item in data.data"
      class="gallery__item"
    >
      <NuxtImg
        loading="lazy"
        fit="contain"
        :src="config.public.strapiUrl + item.attributes.image.data.attributes.formats.medium.url"
      />
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.gallery {
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  padding: 3rem 0;

  @include breakpoint-to('desktop-small') {
    grid-template-columns: auto auto auto auto;
  }
}
</style>