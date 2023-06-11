<script lang="ts" setup>
import { menuAdminHome } from '@/composables/MenuAdminHome'

definePageMeta({
  layout: 'account',
  middleware: 'auth'
})
</script>

<template>
<div class="container admin">
  <h1>Edycja teści</h1>

  <div class="admin__menu">
    <ul 
      class="admin__menu-list"
    >
      <li
        v-for="(item, index) in menuAdminHome"
        :key="index"
        class="admin__menu-item"
      >
        <NuxtLink
          no-rel
          :class="[
            'admin__menu-link',
            'text-color--black'
          ]"
          :to="item.link"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/admin/index';
</style>