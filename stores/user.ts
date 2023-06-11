import { defineStore } from "pinia"

interface State {
	type: string
}

export const useUserStore = defineStore("user", {
	state: (): State => ({
		type: '',
	}),

	getters: {},

	actions: {
		async setUserType() {
			const config = useRuntimeConfig()
			const cookie = useCookie('strapi_jwt')

			await useFetch(`${config.public.strapiUrl}/api/users/me?populate=*`, {
				method: "GET",
				headers: {
					'Authorization': 'Bearer ' + cookie.value,
				},
			}).then((resp) => {
				this.type = resp?.data?.value?.role?.type
			})
		},
	},
})
