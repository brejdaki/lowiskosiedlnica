import { defineStore } from "pinia"
import { SelectedDayInterface } from "@/composables/SelectedDayInterface"

interface State {
	isMenuMobileVisible: boolean
	isModalVisible: boolean
	isLayerOverflowVisible: boolean
	selectedDay: SelectedDayInterface | null
}

export const useMainStore = defineStore("main", {
	state: (): State => ({
		isMenuMobileVisible: false,
		isModalVisible: false,
		isLayerOverflowVisible: false,
		selectedDay: null,
	}),

	getters: {},

	actions: {
		setMobileMenuVisible(payload: boolean) {
			this.isMenuMobileVisible = payload
			this.isLayerOverflowVisible = payload
		},

		setModalVisible(payload: boolean) {
			this.isMenuMobileVisible = false
			this.isModalVisible = payload
			this.isLayerOverflowVisible = payload
		},

		setOverflowLayerVisible(payload: boolean) {
			this.isMenuMobileVisible = false
			this.isModalVisible = payload
			this.isLayerOverflowVisible = payload
		},

		setSelectedDay(payload: SelectedDayInterface) {
			this.selectedDay = payload
		},
	},
})
