<script lang="ts" setup>
import qs from 'qs'
import Editor from '@tinymce/tinymce-vue';

definePageMeta({
  layout: 'account',
  middleware: 'auth'
})

interface State {
  title: string,
  footer: string,
  prices: Prices[]
}

interface Prices {
  id: number,
  attributes: {
    title: string,
    hours: string,
    content: string
  }
}

const config = useRuntimeConfig()
const { update } = useStrapi()
const state: State = reactive({
  title: '',
  footer: '',
  prices: []
})
const priceListQuery = qs.stringify({
  fields: ['title', 'prices', 'footer'],
  populate: ['prices'],
},{
  encodeValuesOnly: true,
});

await useFetch(`${config.public.strapiUrl}/api/price-list?${priceListQuery}`)
  .then(({ data: { value: { data: resp } } }) => {
    state.title = resp.attributes.title
    state.footer = resp.attributes.footer
    state.prices = resp.attributes.prices.data
  })

async function onUpdate(): Promise<void> {
  await update('price-list', { 
    title: state.title,
    footer: state.footer
  }).then(() => {
    console.log('zapisano')
  })

  for (const price of state.prices) {
    await update('prices', price.id, { 
      title: price.attributes.title,
      hours: price.attributes.hours,
      content: price.attributes.content,
    })
  }
}
</script>

<template>
<div class="container admin">
  <h1>Cennik</h1>

  <div class="admin__price-outer">
    <div 
      v-for="price in state.prices"
      class="admin__price"
    >
      <h2>
        {{ price.attributes.title }}
      </h2>

      <InputBase 
        :is-required="false"
        name="hour"
        label="godziny"
        :value="price.attributes.hours"
        @input="state.prices[price.id - 1].attributes.hours = $event.target.value"
      />

      <Editor 
        :api-key="config.tinymceToken" 
        :init="{
          menubar: false,
          language: 'pl'
        }" 
        plugins="code"
        toolbar="code"
        v-model="price.attributes.content"
      />
    </div>
  </div>

  <h2>
    Informacja pod cennikiem
  </h2>

  <Editor 
    :api-key="config.tinymceToken" 
    :init="{
      menubar: false,
      language: 'pl'
    }" 
    plugins="code"
    toolbar="code"
    v-model="state.footer"
  />

  <ButtonBase
    class="admin__button"
    @clicked="onUpdate"
  >
    <template #text>
      Zapisz
    </template>
  </ButtonBase>
</div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/admin/index';
</style>