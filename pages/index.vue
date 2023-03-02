<script lang="ts" setup>
// import { useSchemaOrg, defineWebPage, defineLocalBusiness } from '@vueuse/schema-org'

definePageMeta({
  layout: 'main',
})

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

  <HeroBase />

  <InfoBox />

  <InfoFishery />

  <InfoPrice />

  <InfoOffer />

  <InfoContact />

  <IconScroll />

  <FaqBox />
</template>
