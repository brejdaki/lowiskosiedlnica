import { MenuItemInterface } from "@/composables/MenuItemInterface"

export const menuItem: MenuItemInterface[] = [
	{
		label: "Aktualności",
		link: "/#aktualnosci",
		isDesktop: false,
	},
	{
		label: "Oferta",
		link: "/#oferta",
		isDesktop: true,
	},
	{
		label: "Cennik",
		link: "/#cennik",
		isDesktop: true,
	},
	{
		label: "Kalendarz",
		link: "/kalendarz",
		isDesktop: true,
	},
	{
		label: "Regulamin",
		link: "/regulamin",
		isDesktop: true,
		isPage: true,
	},
	{
		label: "Kontakt",
		link: "/#kontakt",
		isDesktop: true,
	},
]
