import { useI18n } from '@/makers/i18n.maker';
import { CityEnum, DirectionEnum } from '@/enum/area.enum';

const { t } = useI18n();

const northCityList = [
  CityEnum.Taipei,
  CityEnum.NewTaipei,
  CityEnum.Keelung,
  CityEnum.Hsinchu,
  CityEnum.HsinchuCounty,
  CityEnum.Taoyuan,
  CityEnum.YilanCounty
].map(city => ({
  key: city,
  direction: DirectionEnum.North,
  name: t(`area.City.${city}`)
}));

const eastCityList = [
  CityEnum.TaitungCounty,
  CityEnum.HualienCounty
].map(city => ({
  key: city,
  direction: DirectionEnum.East,
  name: t(`area.City.${city}`)
}));

const middleCityList = [
  CityEnum.Taichung,
  CityEnum.MiaoliCounty,
  CityEnum.ChanghuaCounty,
  CityEnum.NantouCounty,
  CityEnum.YunlinCounty
].map(city => ({
  key: city,
  direction: DirectionEnum.Middle,
  name: t(`area.City.${city}`)
}));

const southCityList = [
  CityEnum.Kaohsiung,
  CityEnum.Tainan,
  CityEnum.Chiayi,
  CityEnum.ChiayiCounty,
  CityEnum.PingtungCounty
].map(city => ({
  key: city,
  direction: DirectionEnum.South,
  name: t(`area.City.${city}`)
}));

const islandCityList = [
  CityEnum.PenghuCounty,
  CityEnum.KinmenCounty,
  CityEnum.LienchiangCounty,
  CityEnum.TaitungCounty
].map(city => ({
  key: city,
  direction: DirectionEnum.Island,
  name: t(`area.City.${city}`)
}));

export const areaList = [
  {
    key: DirectionEnum.North,
    name: t('area.Direction.North'),
    list: northCityList
  },
  {
    key: DirectionEnum.East,
    name: t('area.Direction.East'),
    list: eastCityList
  },
  {
    key: DirectionEnum.Middle,
    name: t('area.Direction.Middle'),
    list: middleCityList
  },
  {
    key: DirectionEnum.South,
    name: t('area.Direction.South'),
    list: southCityList
  },
  {
    key: DirectionEnum.Island,
    name: t('area.Direction.Island'),
    list: islandCityList
  }
];
