import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "main"
declare module "/Users/lzarski/Nauka/siedlnica/node_modules/.pnpm/nuxt@3.2.2_theubqblo7mh5qra5iunmqetge/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}