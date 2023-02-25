import { defineStore } from "pinia"

interface State {
	isMenuSlideVisible: boolean,
	isLayerOverflowVisible: boolean,
}

export const useMainStore = defineStore("main", {
	state: (): State => ({
		isMenuSlideVisible: false,
    isLayerOverflowVisible: false,
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
    }
	},
})
