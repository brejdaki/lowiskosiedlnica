import { MenuItem } from "@/composables/interface/MenuItem"

export const menuAdminHome: MenuItem[] = [
	{
		label: "Aktualności",
		link: "/admin/home/news",
		isPage: true,
	},
	{
		label: "Lokalizacja",
		link: "/admin/home/location",
		isPage: true,
	},
	{
		label: "Specyfika łowiska",
		link: "/admin/home/specificity",
		isPage: true,
	},
	{
		label: "Cennik",
		link: "/admin/home/price",
		isPage: true,
	},
	{
		label: "Oferta",
		link: "/admin/home/offer",
		isPage: true,
	},
]