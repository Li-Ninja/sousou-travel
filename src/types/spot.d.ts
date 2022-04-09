import { Picture, Position, Tourism } from './tourism';

interface Spot extends Tourism {
  ScenicSpotID: string;
  ScenicSpotName: string;
  DescriptionDetail: string;
  TravelInfo?: string;
  Class1?: string;
  Class2?: string;
  Class3?: string;
  MapUrl?: string;
  Level?: string;
  ParkingPosition: Position | Record<string, never>;
  TicketInfo?: string;
  Remarks?: string;
  Keyword?: string;
}

type SpotRes = Spot[];

interface RecommendSpot extends Omit<Spot, 'Picture'> {
  Picture: Picture;
}
