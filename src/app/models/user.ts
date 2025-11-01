import { BaseModel } from './base';

export interface User extends BaseModel {
  memberId: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  isActive: boolean;
  profileImage?: string;
}

export enum UserRole {
  ADMIN = 'admin',
  MEMBER = 'member',
  COORDINATOR = 'coordinator'
}