import { pathAccount } from '@/composables/PathAccount'

export default defineNuxtRouteMiddleware((to) => {
	const user = useStrapiUser()

	console.log('midd', to)

	if (!user.value && pathAccount.includes(to.name as string)) {
		return navigateTo("/#login")
	}
})
