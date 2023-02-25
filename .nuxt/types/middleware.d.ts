import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/lzarski/Nauka/siedlnica/node_modules/.pnpm/nuxt@3.2.2_theubqblo7mh5qra5iunmqetge/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}