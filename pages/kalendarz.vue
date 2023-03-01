<script lang="ts" setup>
import { Calendar } from 'v-calendar';

definePageMeta({
  layout: 'main',
})

const month = new Date().getMonth();
const year = new Date().getFullYear();
const todos = [
      {
        description: 'Take Noah to basketball practice.',
        isComplete: false,
        dates: { weekdays: 6 }, // Every Friday
        color: 'red',
      },
    ];
const getDate = new Date();
const getAttributes = [
  {
    key: 'today',
    highlight: true,
    dates: new Date(),
  },
  
    ...todos.map(todo => ({
          dates: todo.dates,
          dot: {
            color: todo.color,
            class: todo.isComplete ? 'opacity-75' : '',
          },
          popover: {
            label: todo.description,
          },
          customData: todo,
        })),
  
]
</script>

<template>
<div
  class="calendar container"
>
  <h3
    class="title"
  >
    Kalendarz
  </h3>

  <ClientOnly>
    <Calendar 
      is-expanded
      :date="getDate"
      :attributes="getAttributes"
      title-position="left"
    />
  </ClientOnly>
</div>
</template>

<style lang="scss" scoped>
.calendar {
  padding-top: 2rem;
  padding-bottom: 4rem;
}
</style>
