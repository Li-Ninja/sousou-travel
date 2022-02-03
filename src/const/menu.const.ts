import { useI18n } from '@/makers/i18n.maker';
import { MenuKeyEnum } from '@/enum/menu.enum';

const { t } = useI18n();

export const menuList = [
  {
    key: MenuKeyEnum.Spot,
    name: t(`menu.${MenuKeyEnum.Spot}`),
    icon: 'src/assets/ionicon_svg/map-outline.svg'
  },
  {
    key: MenuKeyEnum.Restaurant,
    name: t(`menu.${MenuKeyEnum.Restaurant}`),
    icon: 'src/assets/ionicon_svg/restaurant-outline.svg'
  },
  {
    key: MenuKeyEnum.Hotel,
    name: t(`menu.${MenuKeyEnum.Hotel}`),
    icon: 'src/assets/ionicon_svg/bed-outline.svg'
  },
  {
    key: MenuKeyEnum.Activity,
    name: t(`menu.${MenuKeyEnum.Activity}`),
    icon: 'src/assets/ionicon_svg/bulb-outline.svg'
  },
  {
    key: MenuKeyEnum.Schedule,
    name: t(`menu.${MenuKeyEnum.Schedule}`),
    icon: 'src/assets/ionicon_svg/footsteps-outline.svg'
  }
];

export const mobileMenuList = [
  MenuKeyEnum.Hotel,
  MenuKeyEnum.Restaurant,
  MenuKeyEnum.Spot,
  MenuKeyEnum.Activity,
  MenuKeyEnum.Schedule
].map(mobileMenu => ({
  key: mobileMenu,
  name: t(`menu.${mobileMenu}`),
  icon: menuList.find(menu => menu.key === mobileMenu)?.icon
}));