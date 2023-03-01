<script lang="ts" setup>
 import { Calendar } from 'v-calendar';
import { ref } from 'vue'

// const { Calendar } = () => import('v-calendar/src/');

definePageMeta({
  layout: 'main',
})

// const month = new Date().getMonth();
// const year = new Date().getFullYear();

// const reservations = [
//   {
//     description: 'Zawody: 6:00 - 16:00',
//     dates: { weekdays: 7 },
//     color: 'red',
//   },
// ];
const date = new Date()
const year = date.getFullYear()
const month = () => date.getMonth()

console.log(new Date(year, 4))

const reservations = [
  {
    description: 'Zawody - całe łowisko, od 15:00 do 6:00 kolejnego dnia',
    dates: [new Date(2023, 3, 21)], 
    color: 'red',
  },
  {
    description: 'Zawody - całe łowisko, od 6:00 do 6:00 kolejnego dnia',
    dates: [new Date(2023, 3, 22)], 
    color: 'red',
  }
]

const weekends = [
  {
    description: `Otwarte: 6:00 - 21:00`,
    dates: { 
      start: new Date(2023, 3, 1), 
      end: new Date(2023, 9, 31),
      weekdays: [7, 1],
    },
    excludeDates: [{
      start: new Date(2023, 3, 22), 
      end: new Date(2023, 3, 22),
    }],
    color: 'green',
  }
]

const daysOfTheWeek = [
  {
    description: `Otwarte: 16:00 - 21:00`,
    dates: { 
      start: new Date(2023, 4, 1), 
      end: new Date(2023, 9, 31),
      weekdays: [2, 3, 4, 5, 6],
    },
    color: 'green',
  }
]

const excludeDates = []


// start: new Date(2018, 0, 1),  // Jan 1st, 2018
//     end: new Date(2019, 0, 1),    // Jan 1st, 2019
//     weekdays: [1, 7]              // ...on Sundays and Saturdays

const attributes = [
  {
    key: 'today',
    highlight: 'gray',
    dates: new Date(),
    fillMode: 'outline'
  },

  ...reservations.map((item, index)  => ({
    key: index,

    dates: item.dates,
    dot: {
      color: item.color,
    },
    popover: {
      label: item.description,
      visibility: 'hidden',
      placement: 'auto'
    },
    customData: {
      description: item.description
    }
  })),

  ...weekends.map((item, index)  => ({
    key: index,

    dates: item.dates,
    dot: {
      color: item.color,
    },
    popover: {
      label: item.description,
      visibility: 'hidden',
      placement: 'auto'

    },
    customData: {
      description: item.description
    }
  })),

  ...daysOfTheWeek.map((item, index) => ({
    key: index,
    dates: item.dates,
    dot: {
      color: item.color,
    },
    popover: {
      label: item.description,
      visibility: 'hidden',
      placement: 'auto'

    },
    customData: {
      description: item.description
    }
  })),
]

const show = ref(false)

function test (e) {
  console.log('test', e), 
  console.log('test attr', e.attributes)
  show.value = true

  console.log('show', show)
}
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

  <div
    class="calendar__legend"
  >    
    <div
      class="calendar__legend-dot calendar__legend-dot--open"
    >
      łowisko otwarte w podanych godzinach
    </div>

    <div
      class="calendar__legend-dot calendar__legend-dot--reservation"
    >
      zawody na łowisku, proszę zwrócić uwagę na zajętość łowiska (całe lub pół)
      w przypadku zajętości połowy jest możliwość rekreacyjnego połowu na wolnej 
      połowie łowiska
    </div>
  </div>

  <ClientOnly 
    fallback-tag="div" 
    fallback="Ładuję kalendarz..."
  >
    <Calendar 
      class="calendar-custom"
      is-expanded
      :min-date="date"
      :attributes="attributes"
      :disabled-dates="excludeDates"
      title-position="left"
      @dayclick="test($event)"
    >
      <template #day-popover="{ day, dayTitle }" v-if="show">
          <div class="text-xs text-gray-300 font-semibold text-center">
            {{ dayTitle }}
          </div>
          <ul>
            <li
              v-for="item, index in attributes"
              :key="index">
              {{ item }}
            </li>
          </ul>
        </template>
    </Calendar>
  </ClientOnly>

  <p
    class="calendar__info"
  >
    Kliknij w:
  </p>

  <ul>
    <li>
      strzałki aby przejść do miesiąca licząc od aktualnego (poprzedni | następny),
    </li>

    <li>
      dzień aby zobaczyć godziny otwarcia.
    </li>
  </ul>
</div>
</template>

<style lang="scss" scoped>
.calendar {
  $self: &;
  padding-top: 2rem;
  padding-bottom: 3rem;
  min-height: 30rem;

  @include breakpoint-to('desktop-small') {
    height: calc(100vh - 296px);
  }

  &__info {
    color: var(--c-black-alpha);
    font-size: .875rem;
  }

  ul {
    list-style-type: circle;
    padding-left: 1.1rem;
    color: var(--c-black-alpha);
    font-size: .875rem;

    @include breakpoint-to('desktop-small') {
      padding-left: 1.3rem;
    }

    li {
      span,
      &::marker {
        color: var(--c-black-alpha);
      }

      &:not(:last-child) {
        margin-bottom: .5rem;
      }
    }
  }

  :deep(.calendar-custom) {
    .vc-header {
      padding: 1rem;

      .vc-title {
        pointer-events: none;

        &:hover {
          opacity: 1;
        }
      }
    }

    .vc-arrows-container {
      padding: 1rem;
    }

    .vc-day-content {
      font-size: 1rem;
      width: 3rem;
      height: 3rem;

      &.is-disabled {
        pointer-events: none;
        
        &+ div {
          display: none;
        }
      }
    }

    .vc-highlight {
      font-size: 1rem;
      width: 3rem;
      height: 3rem;
      color: var(--c-white);
    }

    .vc-day {
      height: 3.5rem;
    }

    .vc-day-popover-row-indicator span,
    .vc-dot {
      width: .5rem;
      height: .5rem;
    }

    .vc-day-popover-row {
      font-size: 1rem;
    }
  }

  &__legend {
    color: var(--c-black-alpha);
    font-size: .875rem;
    
    &-dot {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: baseline;
      gap: .75rem;
      
      &:before {
        content: "";
        width: .5rem;
        height: .5rem;
        border-radius: .375rem;
        display: block;
      }

      &--open {
        margin-bottom: 0.5rem;

        &::before {
          background-color: var(--c-cal-open)
        }
      }

      &--reservation {
        margin-bottom: 1.5rem;

        &::before {
          background-color: var(--c-cal-reservation)
        }
      }
    }
  }
}
</style>
