import { defineNuxtPlugin } from "#app"
import { Hash } from "@/composables/enum/hash"

interface To {
	hash: string
}

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.$router.options.scrollBehavior = async (to: To, from: object, savedPosition: string) => {
		if (savedPosition) {
			return savedPosition
		}

		const findEl = async (hash: string, x = 0) => {
			return (
				document.querySelector(hash) ||
				new Promise((resolve) => {
					if (x > 0) {
						return resolve(document.querySelector("#app"))
					}
					setTimeout(() => {
						resolve(findEl(hash, 1))
					}, 300)
				})
			)
		}

		const hashExcluded = [Hash.login as string, Hash.loginConfirmed as string, Hash.register as string, Hash.forgotPassword as string, Hash.resetPassword as string]

		const hashExtractValue = to.hash.match(/^[^=]*/)

		if (!!hashExtractValue && hashExcluded.includes(hashExtractValue[0])) {
			return
		}

		if (to.hash) {
			const el: any = await findEl(to.hash)

			if ("scrollBehavior" in document.documentElement.style) {
				return window.scrollTo({ top: el && el.offsetTop, behavior: "smooth" })
			} else {
				return window.scrollTo(0, el.offsetTop)
			}
		}

		return {
			left: 0,
			top: 0,
			behaviour: "smooth",
		}
	}
})
