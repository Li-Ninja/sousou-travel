import { CityEnum, DirectionEnum } from '@/enum/area.enum';

type DateTime = string;

interface City {
  key: CityEnum;
  direction: DirectionEnum;
  name: string;
}

interface Area {
  key: DirectionEnum;
  name: string;
  list: City[];
}

interface District {
  name: string;
  zipCode: number;
}

interface CityDistrict {
  key: City['key'];
  list: District[]
}
