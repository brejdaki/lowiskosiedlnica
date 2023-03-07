// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	/**
	 * Config runtimeConfig
	 */
	runtimeConfig: {
		public: {
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000/",
			strapiUrl: process.env.NUXT_PUBLIC_STRAPI_URL || "http://localhost:1337",
		},
		strapiUrl: process.env.STRAPI_URL || "http://localhost:1337",
	},

	/**
	 * Config modules
	 */
	modules: [
		"@nuxt/image-edge", // https://image.nuxtjs.org/getting-started
		"@nuxtjs/google-fonts", // https://google-fonts.nuxtjs.org/setup
		"@nuxtjs/strapi", // https://strapi.nuxtjs.org/setup
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
	 * Config strapi
	 */
	strapi: {
		url: process.env.STRAPI_URL || "http://localhost:1337",
		prefix: "/api",
		version: "v4",
		cookie: {},
		cookieName: "strapi_jwt",
	},

	/**
	 * Config nuxt-viewport
	 */
	viewport: {
		breakpoints: {
			"desktop-small": 1024,
			desktop: 1366,
			"desktop-medium": 1536,

			"mobile-small": 320,
			mobile: 360,
			"mobile-medium": 390,
			"mobile-large": 412,
			"mobile-xlarge": 576,
		},

		cookieName: "viewport",

		defaultBreakpoints: {
			desktop: "desktop-small",
			mobile: "mobile-small",
		},

		fallbackBreakpoint: "desktop",
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
			htmlAttrs: {
				lang: "pl",
			},
			charset: "utf-16",
			viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
		},
	},

	/**
	 * Config nuxt-schema-org
	 */
	schemaOrg: {
		host: "http://localhost:3000/",
		inLanguage: "pl",
	},

	/**
	 * Config build
	 */
	build: {
		transpile: ["v-calendar"],
	},

	/**
	 * Config route
	 */
	routeRules: {
		"/index.php/cennik": {
			redirect: {
				to: "/#cennik",
				statusCode: 302,
			},
		},
		"/index.php/kalendarzje": {
			redirect: {
				to: "/kalendarz",
				statusCode: 302,
			},
		},
		"/index.php/**": {
			redirect: {
				to: "/",
				statusCode: 302,
			},
		},
	},
})
