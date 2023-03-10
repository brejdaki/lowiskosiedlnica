import { defineStore } from "pinia"
import { SelectedDayInterface } from "@/composables/SelectedDayInterface"

interface State {
	isMenuMobileVisible: boolean
	isUserMenuVisible: boolean
	isModalVisible: boolean
	isLayerOverflowVisible: boolean
	isMenuLayerOverflowVisible: boolean
	selectedDay: SelectedDayInterface | null
}

export const useMainStore = defineStore("main", {
	state: (): State => ({
		isMenuMobileVisible: false,
		isUserMenuVisible: false,
		isModalVisible: false,
		isLayerOverflowVisible: false,
		isMenuLayerOverflowVisible: false,
		selectedDay: null,
	}),

	getters: {},

	actions: {
		setUserMenuVisible(payload: boolean) {
			this.isUserMenuVisible = payload
		},

		setMobileMenuVisible(payload: boolean) {
			this.isMenuMobileVisible = payload
			this.isLayerOverflowVisible = payload
			this.isMenuLayerOverflowVisible = false
		},

		setModalVisible(payload: boolean) {
			this.isMenuMobileVisible = false
			this.isModalVisible = payload
			this.isLayerOverflowVisible = payload
		},

		setOverflowLayerVisible(payload: boolean) {
			this.isMenuMobileVisible = false
			this.isModalVisible = false
			this.isLayerOverflowVisible = payload
			this.isMenuLayerOverflowVisible = false
		},

		setMenuOverflowLayerVisible(payload: boolean) {
			this.isMenuLayerOverflowVisible = payload
		},

		setSelectedDay(payload: SelectedDayInterface) {
			this.selectedDay = payload
		},
	},
})
