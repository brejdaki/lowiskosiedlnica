// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	/**
	 * Config runtimeConfig
	 */
	runtimeConfig: {
		public: {
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000/",
		},
	},

	/**
	 * Config modules
	 */
	modules: [
		"@nuxt/content", // https://content.nuxtjs.org/get-started
		"@nuxtjs/google-fonts", // https://google-fonts.nuxtjs.org/setup
		"@nuxtjs/critters", // https://github.com/nuxt-modules/critters
		"@vueuse/nuxt", // https://vueuse.org/guide/
		"@pinia/nuxt", // https://pinia.vuejs.org/ssr/nuxt.html#installation
		"nuxt-viewport", // https://github.com/mvrlin/nuxt-viewport
		"nuxt-schema-org", // https://unhead-schema-org.harlanzw.com/integrations/nuxt/module
	],

	/**
	 * Config @nuxtjs/google-fonts
	 */
	googleFonts: {
		families: {
			"IBM Plex Sans Condensed": [600],
			"IBM Plex Sans": [200, 400, 600],
		},
		overwriting: true,
	},

	/**
	 * Config nuxt-viewport
	 */
	viewport: {
		breakpoints: {
			desktop: 1024,
			desktopMedium: 1280,
			desktopWide: 1600,

			mobile: 320,
			mobileMedium: 375,
			mobileWide: 425,

			tablet: 768,
		},

		cookieName: "viewport",

		defaultBreakpoints: {
			desktop: "desktop",
			mobile: "mobile",
			tablet: "tablet",
		},

		fallbackBreakpoint: "desktop",
	},

	/**
	 * Config critters
	 *
	 * Options passed directly to critters:
	 * https://github.com/GoogleChromeLabs/critters#critters-2
	 */
	critters: {
		config: {
			// Default: 'media'
			preload: "swap",
		},
	},

	/**
	 * Config style
	 */
	css: ["~/assets/css/typography.scss", "~/assets/css/main.scss"],

	/**
	 * Config vite
	 */
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/assets/css/--variables.scss"; 
									@import "@/assets/css/--mixins.scss";`,
				},
			},
		},
	},
})
