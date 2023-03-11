<script lang="ts" setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup';

definePageMeta({
  layout: 'main',
  middleware: 'auth'
})

const config = useRuntimeConfig()
const { create } = useStrapi()
// const router = useRouter()
const user = useStrapiUser()
const cookie = useCookie('strapi_jwt')
const formData = new FormData() 
const isButtonDisabled = ref(false)
const isLoading = ref(false)
const isError = ref(false)
const isUploadItem = ref(false)
const uploadedFish = ref()
const uploadedImage = ref()

const isSubmitButtonDisabled = computed((): boolean => {
  return isButtonDisabled.value
})

const isSelectedFile = computed((): boolean => {
  return form.image !== ''
})

const form = reactive({ 
  weight: '', 
  dimension: '', 
  species: '',
  image: ''
})

const schema = Yup.object().shape({
  species: Yup.string()
    .required(() => 'Podanie gatunku jest wymagane.'),
  image: Yup.mixed()
    .test("file", "Dodanie zdjęcia jest wymagane.", () => {
      return !!form.image
  })
});

async function handleUploadImage () {
  isLoading.value = true

  formData.append('files', form.image)

  await useFetch(`${config.public.strapiUrl}/api/upload/`, {
    method: "POST",
    headers: {
      'Authorization': 'Bearer ' + cookie.value,
    },
    body: formData,
  }).then(async (uploadResp: any) => {
    await create('fishes', { 
      weight: form.weight !== '' ? form.weight : 0, 
      dimension: form.dimension !=='' ? form.dimension : 0, 
      species: form.species, 
      user: user.value?.id, 
      image: uploadResp.data.value[0].id
    })
      .then((createResp) =>{
        uploadedFish.value = createResp.data.attributes
        uploadedImage.value = uploadResp.data.value[0].formats.medium.url
        isUploadItem.value = true
      })
      .catch(e => {
        console.log(e)
      })
  })

  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}

function handleAdd() {
  uploadedFish.value = ''
  uploadedImage.value = ''
  form.weight = ''
  form.dimension = ''
  form.species = ''
  form.image = ''
  isUploadItem.value = false
}

function test(e) {
  console.log('test', e)
}
</script>

<template>
<div
  v-if="user && !isUploadItem"
  class="container account"
>
  <h2>Dodaj zdjęcie</h2>

  <Form
    class="form"
    :validation-schema="schema"
    @submit="handleUploadImage"
  >
    <InputBase
      name="image"
      label="zdjęcie"
      type="file"
      :is-selected-file="isSelectedFile"
      @input="form.image = $event.target.files[0]"
    />

    <SelectBase
      name="species"
      label="gatunek"
      placeholder="Gatunek ryby"
      :data="[
        'Amur',
        'Karaś',
        'Karaś srebrzysty',
        'Karp',
        'Krąp',
        'Leszcz',
        'Lin',
        'Okoń',
        'Płoć',
        'Sandacz',
        'Szczupak',
        'Węgorz',
        'Wzdręga'
      ]"
      @changeValue="form.species = $event"
    />

    <!-- <InputBase
      name="species"
      label="gatunek"
      placeholder="Gatunek ryby"
      @input="form.species = $event.target.value"
    /> -->

    <InputBase
      :is-required="false"
      name="weight"
      label="waga"
      type="number"
      placeholder="Waga w kg"
      @input="form.weight = $event.target.value"
    />

    <InputBase
      :is-required="false"
      name="dimension"
      label="wymiar"
      type="number"
      placeholder="Wymiar w cm"
      @input="form.dimension = $event.target.value"
    />

    <ButtonBase 
      :disabled="isSubmitButtonDisabled"
      class="form__submit"
    >
      <template v-slot:text>
        {{ isLoading ? 'Przesyłam zdjęcie ...' : 'Prześlij zdjęcie' }}
      </template>
    </ButtonBase>

    <div class="form__description">
      <span>*</span> pola wymagane
    </div>
  </Form>
</div>
<div 
  v-else
  class="container account"
>
  <h2>Dodano</h2>

  <div class="account__add">
    <NuxtImg
      class="account__image"
      :src="config.public.strapiUrl + uploadedImage"
    />

    <div class="account__name">
      {{ uploadedFish.species }}
    </div>

    <div 
      class="account__weight"
      v-if="uploadedFish.weight > 0"
    >
      <span>
        Waga:
      </span> 
      
      {{ uploadedFish.weight }} kg
    </div>

    <div 
      class="account__dimension"
      v-if="uploadedFish.dimension > 0"
    >
      <span>
        Wymiar:
      </span> 
      
      {{ uploadedFish.dimension }} cm
    </div>
  </div>

  <ButtonBase 
    class="account__add"
    @click="handleAdd"
  >
    <template v-slot:text>
      Dodaj kolejne zdjęcie
    </template>
  </ButtonBase>

  <NuxtLink 
    class="account__back"
    to="/account"
  >
    Moje konto
  </NuxtLink>
</div>
</template>

<style lang="scss" scoped>
.account {
  padding-top: 2rem;
  padding-bottom: 3rem;

  &__add {
    > div {
      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }

      span {
        color: var(--c-black-alpha);
        margin-bottom: 0.5rem;
      }
    }
  }

  &__image {
    max-width: 100%;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
  }

  &__name {
    color: var(--c-black);
    font-size: 1.2rem;
    letter-spacing: 1px;
  }

  &__add {
    margin: 0 0 2rem;
  }

  &__back {
    text-align: center;
    display: block;
  }
}

.form {
  &__submit {
    margin: 2rem 0
  }

  &__description {
    color:  var(--c-black-alpha);
    margin-bottom: 2rem;

    span {
      color: var(--c-from-error);
      margin-right: 0.25rem
    }
  }
}
</style>