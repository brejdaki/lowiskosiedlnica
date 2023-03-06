<script lang="ts" setup>
// import { useSchemaOrg, defineWebPage, defineLocalBusiness } from '@vueuse/schema-org'
// const { find } = useStrapi()

definePageMeta({
  layout: 'main',
  middleware: 'modal'
})

// const route = useRoute()

// console.log(route)

// const landing = await find('landing', {
//   populate: '*',
// })
// console.log('landing', landing)

// useSchemaOrg([
//   defineLocalBusiness({
//     name: 'test',
//     logo: '/logo.png',
//     address: {
//       addressCountry: 'Australia',
//       postalCode: '2000',
//       streetAddress: '123 st',
//     },
//     openingHoursSpecification: [
//       {
//         dayOfWeek: 'Saturday',
//         opens: '09:30',
//         closes: '13:30',
//       },
//       {
//         dayOfWeek: ['Monday', 'Tuesday'],
//         opens: '10:30',
//         closes: '15:30',
//       },
//     ]
//   })
// ])
</script>

<template>
  <!-- <SchemaOrgDebug /> -->

  <LazyHeroBase />

  <LazyInfoBox />

  <LazyInfoFishery />

  <LazyInfoPrice />

  <LazyInfoOffer />

  <LazyInfoContact />

  <LazyIconScroll />

  <LazyFaqBox />
</template>
