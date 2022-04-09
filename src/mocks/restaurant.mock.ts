import restaurantData from './data/restaurant.data';
import { RestaurantRes } from '@/types/restaurant';

export function getRestaurantRes(): RestaurantRes {
  return restaurantData;
}
