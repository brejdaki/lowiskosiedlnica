import { MenuItem } from "@/composables/interface/MenuItem"

export const menuAdmin: MenuItem[] = [
	{
		label: "Edycja treści",
		link: "/admin/home",
		isPage: true,
	},
  {
		label: "Kalendarz",
		link: "/admin/calendar",
		isPage: true,
	},
  {
		label: "Galeria",
		link: "/admin/gallery",
		isPage: true,
	},
	{
		label: "Regulamin",
		link: "/admin/term",
		isPage: true,
	},
	{
		label: "Ustawienia",
		link: "/admin",
		isPage: true,
	},
]