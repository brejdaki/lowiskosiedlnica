export default defineNuxtRouteMiddleware((to) => {
	const user = useStrapiUser()

	if (to.name === "account" && !user.value) {
		return navigateTo("/login")
	}

	if (to.name === "login" && user.value) {
		return navigateTo("/account")
	}
})
