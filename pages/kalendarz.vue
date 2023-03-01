<script lang="ts" setup>
import { Calendar } from 'v-calendar';

definePageMeta({
  layout: 'main',
})

const date = new Date()

const dates = [
  {
    description: 'Zawody całe łowisko, od 15:00 do 8:00',
    dates: new Date(2023, 3, 21), 
    color: 'red',
  },
  {
    description: 'Zawody całe łowisko, od 6:00 do 8:00 kolejnego dnia',
    dates: new Date(2023, 3, 22), 
    color: 'red',
  },
  {
    description: 'Zawody całe łowisko, od 6:00 do 16:00',
    dates: new Date(2023, 4, 21), 
    color: 'red',
  },
  {
    description: 'Zawody całe łowisko, od 7:00 do 17:00',
    dates: new Date(2023, 4, 28), 
    color: 'red',
  },
  {
    description: 'Zawody całe łowisko, od 7:00 do 14:00',
    dates: new Date(2023, 5, 3), 
    color: 'red',
  },
  {
    description: 'Otwarte od 15:00 do 21:00',
    dates: new Date(2023, 5, 3), 
    color: 'green',
  },
  {
    description: `Otwarte od 6:00 do 21:00`,
    dates: { 
      start: new Date(2023, 3, 1), 
      end: new Date(2023, 3, 16),
      weekdays: [7, 1],
    },
    color: 'green',
  },
  {
    description: `Otwarte od 6:00 do 21:00`,
    dates: { 
      start: new Date(2023, 3, 29), 
      end: new Date(2023, 4, 20),
      weekdays: [7, 1],
    },
    color: 'green',
  },
  {
    description: `Otwarte od 8:00 do 21:00`,
    dates: new Date(2023, 3, 23),
    color: 'green',
  },
  {
    description: `Otwarte od 6:00 do 21:00`,
    dates: new Date(2023, 4, 27),
    color: 'green',
  },
  {
    description: 'Otwarte od 14:00 do 21:00',
    dates: new Date(2023, 4, 28), 
    color: 'green',
  },
  {
    description: `Otwarte od 6:00 do 21:00`,
    dates: { 
      start: new Date(2023, 5, 4), 
      end: new Date(2023, 5, 11),
      weekdays: [7, 1],
    },
    color: 'green',
  },
  {
    description: `Zawody całe łowisko, od 15:00 do 6:00`,
    dates: new Date(2023, 5, 16), 
    color: 'red',
  },
  {
    description: `Zawody całe łowisko, od 6:00 do 8:00 kolejnego dnia`,
    dates: new Date(2023, 5, 17), 
    color: 'red',
  },
  {
    description: `Otwarte od 8:00 do 21:00`,
    dates: new Date(2023, 5, 18), 
    color: 'green',
  },
  {
    description: `Zawody całe łowisko, od 15:00 do 6:00`,
    dates: new Date(2023, 5, 23), 
    color: 'red',
  },
  {
    description: `Zawody całe łowisko, od 6:00 do 13:00`,
    dates: new Date(2023, 5, 24), 
    color: 'red',
  },
  {
    description: `Otwarte od 13:00 do 21:00`,
    dates: new Date(2023, 5, 24), 
    color: 'green',
  },
  {
    description: `Otwarte od 06:00 do 21:00`,
    dates: new Date(2023, 5, 25), 
    color: 'green',
  },
  {
    description: `Zawody całe łowisko, od 16:00 do 6:00`,
    dates: new Date(2023, 5, 30), 
    color: 'red',
  },
  {
    description: `Zawody całe łowisko, od 6:00 do 8:00 kolejnego dnia`,
    dates: new Date(2023, 6, 1), 
    color: 'red',
  },
  {
    description: `Otwarte od 06:00 do 21:00`,
    dates: new Date(2023, 6, 2), 
    color: 'green',
  },
  {
    description: `Otwarte od 6:00 do 21:00`,
    dates: { 
      start: new Date(2023, 6, 8), 
      end: new Date(2023, 6, 9),
      weekdays: [7, 1],
    },
    color: 'green',
  },
  {
    description: `Otwarte od 06:00 do 20:00`,
    dates: new Date(2023, 6, 15), 
    color: 'green',
  },
  {
    description: `Zawody całe łowisko, od 20:00 do 6:00`,
    dates: new Date(2023, 6, 15), 
    color: 'red',
  },
  {
    description: `Zawody całe łowisko, od 6:00 do 12:00`,
    dates: new Date(2023, 6, 16), 
    color: 'red',
  },
  {
    description: `Otwarte od 12:00 do 21:00`,
    dates: new Date(2023, 6, 16), 
    color: 'green',
  },
  {
    description: `Otwarte od 6:00 do 21:00`,
    dates: { 
      start: new Date(2023, 6, 22), 
      end: new Date(2023, 6, 23),
      weekdays: [7, 1],
    },
    color: 'green',
  },
  {
    description: `Zawody całe łowisko, od 16:00 do 6:00`,
    dates: new Date(2023, 6, 28),
    color: 'red',
  },
  {
    description: `Zawody całe łowisko, od 6:00 do 9:00 kolejnego dnia`,
    dates: new Date(2023, 6, 29),
    color: 'red',
  },
  {
    description: `Otwarte od 9:00 do 21:00`,
    dates: new Date(2023, 6, 30),
    color: 'green',
  },
  {
    description: `Zawody połowa łowiska, od 6:00 do 14:00`,
    dates: new Date(2023, 7, 5),
    color: 'red',
  },
  {
    description: `Otwarte: połowa łowiska od 6:00 do 14:00, całe od 14:00 do 21:00`,
    dates: new Date(2023, 7, 5),
    color: 'green',
  },
  {
    description: `Otwarte od 9:00 do 21:00`,
    dates: new Date(2023, 7, 6),
    color: 'green',
  },
  {
    description: `Zawody całe łowisko, od 16:00 do 6:00`,
    dates: new Date(2023, 7, 11),
    color: 'red',
  },
  {
    description: `Zawody całe łowisko, od 6:00 do 8:00 kolejnego dnia`,
    dates: new Date(2023, 7, 12),
    color: 'red',
  },
  {
    description: `Otwarte od 8:00 do 21:00`,
    dates: new Date(2023, 7, 13),
    color: 'green',
  },
  {
    description: `Otwarte od 6:00 do 21:00`,
    dates: { 
      start: new Date(2023, 7, 19), 
      end: new Date(2023, 7, 20),
      weekdays: [7, 1],
    },
    color: 'green',
  },
  {
    description: `Puchar łowiska całe łowisko, od 16:00 do 6:00`,
    dates: new Date(2023, 7, 25),
    color: 'red',
  },
  {
    description: `Puchar łowiska całe łowisko, od 6:00 do 8:00 kolejnego dnia`,
    dates: new Date(2023, 7, 26),
    color: 'red',
  },
  {
    description: `Otwarte od 8:00 do 21:00`,
    dates: new Date(2023, 7, 27),
    color: 'green',
  },
]

const attributes = [
  {
    key: 'today',
    highlight: 'gray',
    dates: new Date(),
    fillMode: 'outline'
  },

  ...dates.map((item, index)  => ({
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
    },
    excludeDates: []
  })),
]

const show = ref(false)

function test (e) {
  console.log('test', e), 
  console.log('test attr', e.attributes[0].customData)
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
      :max-date="new Date(2023, 11, 31)"
      :attributes="attributes"
      disabled-dates=""
      title-position="left"
      @dayclick="test($event)"
    >
      <!-- <template #day-popover="{ day, dayTitle }" v-if="show">
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
        </template> -->
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
