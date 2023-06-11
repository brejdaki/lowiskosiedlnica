<script lang="ts" setup>
import { Hash } from '@/composables/enum/hash'

definePageMeta({
  layout: 'main',
  middleware: 'modal'
})

const user = useStrapiUser()
const config = useRuntimeConfig()

const { data, pending } = await useFetch(`${config.public.strapiUrl}/api/fishes?populate[0]=image`)
</script>

<template>
<div class="container gallery">
  <h1>Galeria</h1>

  <p>Publikujemy tutaj zdjęcia zamieszczane przez naszych gości.<br>
    Aby dodać zdjęcia swoich połowów 
    <NuxtLink v-if="!user" :to="Hash.login">zaloguj się</NuxtLink>
    <NuxtLink v-else to="/account/add">kliknij tutaj</NuxtLink>.
  </p>

  <div
    v-if="!pending && data.meta.pagination.total > 0"
    class="gallery__inner"
  >
    <div
      v-for="item in data.data"
      class="gallery__item"
    >
      <NuxtImg
        loading="lazy"
        fit="cover"
        :src="config.public.strapiUrl + item.attributes.image.data.attributes.formats.medium.url"
      />
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.gallery {
  padding-top: 2rem;
  padding-bottom: 3rem;

  p {
    margin-bottom: 2rem;
  }

  &__inner {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;

    @include breakpoint-to('desktop-small') {
      grid-template-columns: auto auto auto auto;
    }
  }

  &__item {
    overflow: hidden;
    aspect-ratio: 16/9;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>