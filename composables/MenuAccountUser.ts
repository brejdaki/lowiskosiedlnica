import { MenuItem } from "@/composables/interface/MenuItem"

export const menuAccount: MenuItem[] = [
  {
		label: "Mój profil",
		link: "/account",
		isPage: true,
	},
  {
		label: "Dodaj",
		link: "/account/add",
		isPage: true,
	},
  {
		label: "Edycja profilu",
		link: "/account/edit",
		isPage: true,
	},
]