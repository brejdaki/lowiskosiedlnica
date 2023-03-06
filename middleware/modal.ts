import { useMainStore } from "@/stores/main"
import { Hash } from "@/composables/enum/hash"

export default defineNuxtRouteMiddleware((to) => {
	const store = useMainStore()
	const hashCallModal = [Hash.login as string, Hash.loginConfirmed as string, Hash.register as string, Hash.forgotPassword as string, Hash.resetPassword as string]

	const hashExtractValue = to.hash.match(/^[^=]*/)

	if (!!hashExtractValue && hashCallModal.includes(hashExtractValue[0])) {
		store.setModalVisible(true)
	}
})
