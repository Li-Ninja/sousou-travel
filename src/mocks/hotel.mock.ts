import hotelData from './data/hotel.data';
import { HotelRes } from '@/types/hotel';

export function getHotelRes(): HotelRes {
  return hotelData;
}
