import { MenuItemInterface } from '@/composables/MenuItemInterface';

export const menuItem: MenuItemInterface[] = [
  {
    label: 'Aktualności',
    link: '/#aktualnosci',
    isDesktop: false,
  }, {
    label: 'Kalendarz',
    link: '/#kalendarz',
    isDesktop: true,
  }, {
    label: 'Cennik',
    link: '/#cennik',
    isDesktop: true,
  }, {
    label: 'Regulamin',
    link: 'regulamin',
    isDesktop: true,
    isPage: true
  }, {
    label: 'Oferta',
    link: '/#oferta',
    isDesktop: true,
  }, {
    label: 'Kontakt',
    link: '/#kontakt',
    isDesktop: true,
  },
]