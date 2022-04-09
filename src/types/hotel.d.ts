import { Picture, Tourism } from './tourism';

interface Hotel extends Tourism {
  HotelID: string;
  HotelName: string;
  Grade?: string;
  Fax?: string;
  Class: string;
  Spec?: string;
  ServiceInfo?: string;
}

type HotelRes = Hotel[];

interface RecommendHotel extends Omit<Hotel, 'Picture'> {
  Picture: Picture;
}
