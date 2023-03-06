<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { Calendar } from 'v-calendar';

import { CalendarItem } from '@/composables/CalendarItem'
import { CalendarItemDayInterface } from '@/composables/CalendaItemDayInterface'
import { SelectedDayInterface } from '@/composables/SelectedDayInterface' 
import { useMainStore } from '@/stores/main'

definePageMeta({
  layout: 'main',
})

const store = useMainStore()
const { selectedDay } = storeToRefs(store) 

let date = new Date()
const isDayInfo = ref(false)

function handleDay (item: CalendarItemDayInterface) {
  const selectedDay: SelectedDayInterface = {
    label: item.ariaLabel,
    events: []
  }

  selectedDay.label = item.ariaLabel

  item.attributes.forEach((item) => {
    selectedDay.events.push({ 
      name: item.customData.description,
      style: item.dot.base.color  
    })
  })

  if (selectedDay.events.length > 0) {
    store.setSelectedDay(selectedDay)
    isDayInfo.value = true
  }
}

function handleClosePopup() {
  isDayInfo.value = false
}

const attributes = [
  {
    key: 'today',
    highlight: 'gray',
    dates: date,
    fillMode: 'outline'
  },

  ...CalendarItem.map((item, index)  => ({
    key: index,
    dates: item.dates,
    dot: {
      color: item.color,
    },
    popover: {
      visibility: 'hidden',
    },
    customData: {
      description: item.description
    },
    excludeDates: []
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

  <div
    class="calendar__legend"
  >    
    <div
      class="calendar__legend-dot calendar__legend-dot--open"
    >
      łowisko otwarte w podanych godzinach,
    </div>

    <div
      class="calendar__legend-dot calendar__legend-dot--reservation"
    >
      zawody na łowisku, proszę zwrócić uwagę na zajętość (całe lub pół)
      w przypadku połowy jest możliwość rekreacyjnego połowu na wolnej
      części łowiska.
    </div>
  </div>

  <div 
    class="calendar__outer"
  >
    <ClientOnly>
      <template #default>
        <Calendar 
          ref="calendar"
          class="calendar__custom"
          is-expanded
          :min-date="date"
          :max-date="new Date(2023, 11, 31)"
          :attributes="attributes"
          disabled-dates=""
          title-position="left"
          @dayclick="handleDay($event)"
        />
      </template>

      <template #fallback>
        <div class="calendar__loading">
          Ładuję kalendarz...
        </div>
      </template>
    </ClientOnly>

    <div
      v-if="isDayInfo"
      class="calendar__popup"
    >
      <button 
        class="calendar__close"
        @click="handleClosePopup"
      />

      <h3 
        v-if="selectedDay"
      >
        {{ selectedDay.label }}
      </h3>

      <template 
        v-if="selectedDay"
      >
        <div
          v-for="event in selectedDay.events"
          class="calendar__popup-inner"
        >
          <span 
            :class="event.style"
          />

          <div
            v-html="event.name"
          />
        </div>
      </template>
    </div>
  </div>

  <p
    class="calendar__info"
  >
    Kliknij w:
  </p>

  <ul>
    <li>
      dzień aby zobaczyć godziny otwarcia | czas trwania zawodów,
    </li>

    <li>
      strzałki aby przejść do miesiąca licząc od aktualnego (poprzedni | następny).
    </li>
  </ul>
</div>
</template>

<style lang="scss" scoped>
.calendar {
  $self: &;
  padding-top: 2rem;
  padding-bottom: 3rem;
  min-height: 45rem;

  @include breakpoint-to('desktop-small') {
    height: calc(100vh - 359px);
  }

  &__info {
    color: var(--c-black-alpha);
    font-size: .875rem;
  }

  &__loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 27.25rem;
    color: var(--c-black-alpha);
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

  &__outer {
    position: relative;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    width: calc(100% + 3rem);

    @include breakpoint-to('mobile-xlarge') {
      margin-right: 0;
      margin-left: 0;
      width: 100%;
    }
  }

  &__close {
    @include icon-close
  }

  :deep(.calendar__custom) {
    border-radius: 0;

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
      width: 2rem;
      height: 3rem;

      @include breakpoint-to('mobile-xlarge') {
        width: 3rem;
      }

      &.is-disabled {
        pointer-events: none;
        
        &+ div {
          display: none;
        }
      }
    }

    .vc-highlight {
      font-size: 1rem;
      width: 2rem;
      height: 2rem;
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

  &__popup {
    position: absolute;
    background: var(--c-white);
    padding: 2rem;
    z-index: var(--z-overflow);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;;
    border: 1px solid #cbd5e0;

    @include breakpoint-to('desktop-small') {
      padding-left: 35%;
      font-size: 1.25rem;
    }

    &-inner {
      display: grid;
      grid-template-columns: 0.5rem 1fr;
      gap: 1rem;
      align-items: baseline;
      
      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    }

    h3 {
      font-size: 1.25rem;
      margin-bottom: 1.25rem;
      color: var(--c-black-alpha);

      @include breakpoint-to('desktop-small') {
        margin-bottom: 2rem;
      }
    }
    
    span {
      width: .5rem;
      height: .5rem;
      border-radius: .375rem;
      display: block;

      &.green {
        background-color: var(--c-cal-open);
      }

      &.red {
        background-color: var(--c-cal-reservation);
      }
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
