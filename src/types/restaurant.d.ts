import { Picture, Tourism } from './tourism';

interface Restaurant extends Tourism {
  RestaurantID: string;
  RestaurantName: string;
  Class: string;
  OpenTime: string;
}

type RestaurantRes = Restaurant[];

interface RecommendRestaurant extends Omit<Restaurant, 'Picture'> {
  Picture: Picture;
}
