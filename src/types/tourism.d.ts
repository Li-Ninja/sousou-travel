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

interface Tourism {
  Description?: string;
  Phone: string;
  Address?: string;
  ZipCode?: string;
  City?: string;
  WebsiteUrl?: string;
  Picture: Picture | Record<string, unknown>;
  Position: Position;
  SrcUpdateTime: DateTime;
  UpdateTime: DateTime;
  ParkingInfo?: string;
}
