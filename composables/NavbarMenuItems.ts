import { MenuItem } from "@/composables/interface/MenuItem"

export const NavbarMenuItems: MenuItem[] = [
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
		label: "Galeria",
		link: "/galeria",
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
