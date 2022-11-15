import { User } from './user';

export interface UserAuthInfo extends User {
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  actived?: boolean;
  avatarId?: string;
  credentialsNonExpired: boolean;
  deviceId?: string;
  pnsToken?: string;
}

export interface LoginRequest {
  confirmPassword?: string;
  deviceId?: string;
  email?: string;
  key?: string;
  password?: string;
  platformType?: number;
  platformVersion?: string;
  social?: string;
  socialId?: string;
  username?: string;
}

export interface LoginResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
  culinaryUser: UserAuthInfo;
  magento_access_token: string;
}

export interface SignupRequest {
  confirmEmail: string;
  confirmPassword?: string;
  country?: string;
  email: string;
  firstName?: string;
  key?: string;
  lastName?: string;
  password?: string;
  role?: string;
  socialId?: string;
  username?: string;
}

export interface GoogleLoginURLParam {
  code: string;
  scope: string;
  authuser: number;
  hd: string;
  prompt: string;
  social: string;
}

export interface SocialUser {
  accessToken: string;
  email: string;
  family_name: string;
  firstName?: string;
  firstTimeLogin: boolean;
  given_name: string;
  id: string;
  idToken?: string;
  lastName?: string;
  name: string;
  picture: string;
  verified_email: boolean;
}
