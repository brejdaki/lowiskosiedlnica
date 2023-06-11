import { pathAccount } from '@/composables/PathAccount'

export default defineNuxtRouteMiddleware(async (to) => {
	const user = useStrapiUser()

	if (!user.value && pathAccount.includes(to.name as string)) {
		return navigateTo("/#login")
	}
})
