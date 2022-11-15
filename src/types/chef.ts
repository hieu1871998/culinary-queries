import { Media, OrderedMedia } from './media';
import { UserRole } from './user';

export interface Chef {
  avatar: Media;
  avatarId: string;
  background?: Media;
  backgroundMobile?: Media;
  cookSpecial?: Media;
  cookSpecials?: OrderedMedia[];
  calendarSelected: false;
  categories: string[];
  chefName: string;
  username: string;
  displayName: string;
  email: string;
  firstName: string;
  id: string;
  userId: string;
  lastName: string;
  selected: boolean;
  subscribed: boolean;
  totalSubscribers: number;
  description?: string;
  code: string;
  passwordTemp?: string;
  shortIntro?: string;
  intro?: Media;
  contact?: string;
  social?: ChefSocial;
  introExternalLink?: string;
  chefProfileUpdate?: ChefListProfileItems;
  tags: string[];
  live?: boolean;
  pendingTags: string[];
  role?: UserRole;
  dob?: string;
  phone?: string;
  gender?: string;
  address?: string;
  state?: string;
  country?: string;
  postCode?: string;
  timezoneId?: string;
}

export interface ChefSocial {
  facebook?: SocialUrl;
  instagram?: SocialUrl;
  twitter?: SocialUrl;
  tiktok?: SocialUrl;
  website?: SocialUrl;
  youtube?: SocialUrl;
  snapchat?: SocialUrl;
}

export interface SocialUrl {
  link: string;
  enable: boolean;
}

export enum ProfileStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
}

export interface ChefProfilePendingItems {
  avatar?: {
    avatar: Media;
    status: ProfileStatus;
  };
  background?: {
    background: Media;
    status: ProfileStatus;
  };
  backgroundMobile: {
    backgroundMobile: Media;
    status: ProfileStatus;
  };
  shortIntro?: {
    shortIntro: string;
    status: ProfileStatus;
  };
  intro?: {
    intro: Media;
    status: ProfileStatus;
  };
  description?: {
    description: string;
    status: ProfileStatus;
  };
  cookSpecials?: {
    cookSpecials: OrderedMedia[];
    status: ProfileStatus;
  };
}

export type ChefListProfileItems = ChefProfilePendingItems & {
  currentProfile: Chef;
  status: `${ProfileStatus}`;
  submitDate: number;
  id: string;
  totalSubscribers?: number;
};

export interface ActivateChefRequest {
  code: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface ActivateInfo {
  userId?: string;
  email?: string;
}

export interface LoginAsChefRequest {
  userId: string;
  platformType?: number;
  platformVersion?: string;
  deviceId?: string;
}