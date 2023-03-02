import { defineStore } from "pinia"
import { SelectedDayInterface } from '@/composables/SelectedDayInterface' 

interface State {
	isMenuSlideVisible: boolean
	isLayerOverflowVisible: boolean
	selectedDay: SelectedDayInterface | null
}

export const useMainStore = defineStore("main", {
	state: (): State => ({
		isMenuSlideVisible: false,
		isLayerOverflowVisible: false,
		selectedDay: null
	}),

	getters: {},

	actions: {
		setModalMenuVisible(payload: boolean) {
			this.isMenuSlideVisible = payload
			this.isLayerOverflowVisible = payload
		},

		setOverflowLayerVisible(payload: boolean) {
			this.isMenuSlideVisible = payload
			this.isLayerOverflowVisible = payload
		},

		setSelectedDay(payload: SelectedDayInterface) {
			this.selectedDay = payload
		},
	},
})
