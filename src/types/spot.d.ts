import { DateTime } from './common';

interface Picture {
  PictureUrl1: string;
  PictureDescription1: string;
  PictureUrl2?: string;
  PictureDescription2?: string;
  PictureUrl3?: string;
  PictureDescription3?: string;
}

interface Position {
  PositionLon: number;
  PositionLat: number;
  GeoHash: string;
}

interface Spot {
  ScenicSpotID: string;
  ScenicSpotName: string;
  DescriptionDetail: string;
  Description?: string;
  Phone: string;
  Address?: string;
  ZipCode?: string;
  TravelInfo?: string;
  OpenTime: string;
  Picture: Picture | Record<string, unknown>;
  MapUrl?: string;
  Position: Position;
  Class1?: string;
  Class2?: string;
  Class3?: string;
  Level?: string;
  WebsiteUrl?: string;
  ParkingInfo?: string;
  ParkingPosition: Position | Record<string, never>;
  TicketInfo?: string;
  Remarks?: string;
  Keyword?: string;
  City?: string;
  SrcUpdateTime: DateTime;
  UpdateTime: DateTime;
}

type SpotRes = Spot[];

interface RecommendSpot extends Omit<Spot, 'Picture'> {
  Picture: Picture;
}
