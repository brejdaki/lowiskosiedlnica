<script lang="ts" setup>
import { Calendar } from 'v-calendar';
import { CalendarItem } from '@/composables/CalendarItem'


definePageMeta({
  layout: 'main',
})

// const date = new Date()


const attributes = [
  {
    key: 'today',
    highlight: 'gray',
    dates: new Date(),
    fillMode: 'outline'
  },

  ...CalendarItem.map((item, index)  => ({
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
    />
  </ClientOnly>

  <p
    class="calendar__info"
  >
    Kliknij w:
  </p>

  <ul>
    <li>
      dzień aby zobaczyć godziny otwarcia.
    </li>

    <li>
      strzałki aby przejść do miesiąca licząc od aktualnego (poprzedni | następny),
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
