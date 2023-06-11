<script lang="ts" setup>
import qs from 'qs'

definePageMeta({
  layout: 'account',
  middleware: 'auth'
})

const config = useRuntimeConfig()
const { delete: _delete } = useStrapi()
const user = useStrapiUser()
const router = useRouter()
const cookie = useCookie('strapi_jwt')

const fishesQuery = qs.stringify({
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
},
{
  encodeValuesOnly: true,
})

const { data, pending, refresh } = await useFetch(`${config.public.strapiUrl}/api/fishes?${fishesQuery}`, {
  method: "GET",
  headers: {
    'Authorization': 'Bearer ' + cookie.value,
  },
})

async function onDelete (item: object) {
  await _delete('fishes', item.id)

  await useFetch(`${config.public.strapiUrl}/api/upload/files/${item.attributes.image.data.id}`, {
    method: "DELETE",
    headers: {
      'Authorization': 'Bearer ' + cookie.value,
    },
  })

  refresh()
}
</script>

<template>
<div
  v-if="user && data"
  class="container account" 
>
  <h2>Cześć {{ user.name }}</h2>

  <div 
    v-if="data.meta.pagination.total > 0"
    class="account__count"
  >
    <span>Dodano zdjęć:</span> 
    {{ data.meta.pagination.total }}<br>
    
    <!-- <span>Kliknij na zdjęcie aby wyświetlić szczegóły</span> -->
  </div>
  <div 
    v-else
    class="account__empty"
  >
    Brak dodanych zdjęć
  </div>

  <div
    v-if="!pending && data.meta.pagination.total > 0"
    class="account__photo"
  >
    <div
      v-for="item in data.data"
      class="account__item"
    >
      <NuxtImg
        loading="lazy"
        fit="contain"
        :src="config.public.strapiUrl + item.attributes.image.data.attributes.formats.medium.url"
      />

      <!-- <div class="account__item-inner">
        <strong>
          {{ item.attributes.species }}
        </strong>

        <div v-if="item.attributes.weight > 0">
          {{ item.attributes.weight }}
        </div>

        <div v-if="item.attributes.dimension > 0">
          {{ item.attributes.dimension }}
        </div> -->
        
        <!-- <pre>{{ fish }}</pre> -->
        <!-- <button @click="onDelete(item)">usun</button> -->
      <!-- </div> -->
    </div>
  </div>

  <ButtonBase 
    class="account__add"
    @click="router.push('/account/add')"
  >
    <template v-slot:text>
      Dodaj nowe zdjęcie
    </template>
  </ButtonBase>
</div>
</template>

<style lang="scss" scoped>
.account {
  padding-top: 2rem;
  padding-bottom: 3rem;

  &__count {
    margin-bottom: 2rem;

    span {
      color: var(--c-black-alpha)
    }
  }

  &__empty {
    margin: 3rem 0;
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 1px;
  }

  &__photo {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  &__item {
    overflow: hidden;
    aspect-ratio: 16/9;
    border-radius: 0.25rem;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>