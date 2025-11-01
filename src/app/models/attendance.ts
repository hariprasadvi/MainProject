import { BaseModel } from './base';

export interface Attendance extends BaseModel {
  meetingId: string;
  userId: string;
  checkInTime: Date;
  location: GeoLocation;
  faceVerified: boolean;
  verificationScore: number;
}

export interface GeoLocation {
  latitude: number;
  longitude: number;
  accuracy?: number;
}