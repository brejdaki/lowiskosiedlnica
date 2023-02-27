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
			'desktop-small': 1024,
			desktop: 1366,
			'desktop-medium': 1536,

			'mobile-small': 320,
			mobile: 360,
			'mobile-medium': 390,
			'mobile-large': 412,
			'mobile-xlarge': 576,
		},

		cookieName: "viewport",

		defaultBreakpoints: {
			desktop: "desktop-small",
			mobile: "mobile-small",
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

	/**
	 * Config app
	 */
	app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    }
  },

	/**
	 * Config nuxt-schema-org
	 */
	schemaOrg: {
    host: 'http://localhost:3000/',
		inLanguage: 'pl'
  },
})
