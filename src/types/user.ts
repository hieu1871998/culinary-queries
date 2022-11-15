import { Chef } from './chef';
import { Media } from './media';

export interface User {
  address?: string;
  avatar: Media;
  chefResponse?: Pick<Chef, 'chefName' | 'displayName' | 'firstName' | 'lastName'>;
  country?: string;
  displayName: string;
  dob?: string;
  email: string;
  firstName?: string;
  gender?: UserInfoGender;
  isFirstTimeLogin: boolean;
  lastName?: string;
  live: boolean;
  phone?: string;
  postCode?: string;
  roles: UserRole[];
  social?: boolean;
  socialEmail: boolean;
  state?: string;
  timezoneId?: string;
  userId: string;
  username: string;
}

export enum UserInfoGender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other'
}

export enum UserRole {
  ADMIN = 'ROLE_ADMIN',
  CHEF = 'ROLE_CHEF',
  USER = 'ROLE_USER',
  CONTENT_MANAGER = 'ROLE_CONTENT_MANAGER',
}

export interface ForgotPasswordRequest {
  email: string;
  key?: string;
}

export interface ForgotPasswordResponse {
  email: string;
  username: string;
}

export interface ResetPasswordRequest {
  password?: string;
  newPassword: string;
  resetCode: string;
}

export interface UserSetting {
  id: string;
  userId: string;
  contentTypes: string[];
  subscriptionFilters: unknown[];
  firstTimeLogin: boolean;
  calendarContentTypes: unknown[];
  keywordSetting: {
    type: string;
    keywords: string[];
  }[];
  crawlSourceSettings: unknown[];
  crawlTypes: unknown[];
}