import { MenuItemInterface } from "@/composables/MenuItemInterface"

export const menuAccount: MenuItemInterface[] = [
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