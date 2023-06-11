<script lang="ts" setup>
import qs from 'qs'
import Editor from '@tinymce/tinymce-vue';

definePageMeta({
  layout: 'account',
  middleware: 'auth'
})

const config = useRuntimeConfig()
const { update } = useStrapi()
const state = reactive({
  title: '',
  content: ''
})
const newQuery = qs.stringify({
  fields: ['title', 'content'],
},{
  encodeValuesOnly: true,
});

await useFetch(`${config.public.strapiUrl}/api/term?${newQuery}`)
  .then(({ data: { value: { data: resp } } }) => {
    state.title = resp.attributes.title
    state.content = resp.attributes.content
  })

async function onUpdate(): Promise<void> {
  await update('new', { 
    title: state.title,
    content: state.content
  }).then(() => {
    console.log('zapisano')
  })
}
</script>

<template>
<div class="container admin">
  <h1>Regulamin łowiska</h1>

  <Editor 
    :api-key="config.tinymceToken" 
    :init="{
      menubar: false,
      language: 'pl'
    }" 
    plugins="code"
    toolbar="code"
    v-model="state.content"
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