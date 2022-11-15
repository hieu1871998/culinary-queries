import { AdType } from './ads';
import { Chef } from './chef';
import { RecipeMeasurement, Rejector } from './common';
import { Media } from './media';
import { SeoSetting, SEO_STATE } from './seo';
import { UserRole } from './user';

export interface Recipe {
  adsType?: AdType;
  avgRatingPoint?: number;
  chef: Partial<Chef>;
  chefFeature?: boolean;
  collection: string;
  contentType?: string;
  cookTime: number;
  cookTimeTo: number;
  crawlItemId?: string;
  createdDate: number;
  cuisineIds?: string[];
  cuisineOther?: string;
  creator: {
    userId: string;
    username: string;
    displayName: string;
    email: string;
    role: UserRole;
  };
  cuisines?: {
    id: string;
    name: string;
  }[];
  dayOfTimes: number[];
  description: string;
  difficultly: string;
  enableNotification?: boolean;
  externalImageUrl?: string;
  externalThumbnailImageUrl?: string;
  externalThumbnailVideoUrl?: string;
  externalVideoUrl?: string;
  featureDetails?: {
    feature: string;
    position: number;
  }[];
  homeFeature?: boolean;
  id: string;
  ingredients?: IngredientSets[];
  ingredientSets?: IngredientSets[];
  isFavored?: boolean;
  lastModifiedDate: number;
  link?: string;
  mealCourse?: number[];
  medias?: { media: Media; order: number; credit?: string }[];
  preTime: number;
  preTimeTo: number;
  publishDate: number;
  reaction?: string;
  reason?: string;
  rejector?: Rejector;
  relatedArticles?: unknown;
  selfRating?: number;
  seoSettings: SeoSetting[];
  serving: string;
  slug?: string;
  status: number;
  seoStatus?: SEO_STATE;
  steps: { description: string; version: number; name: string }[];
  submitDate?: number;
  tagging?: {
    name: string;
    value: string[];
    valueLink?: {
      value: string;
      link: string;
    }[];
    valueList?: string[];
    pendingValue: string[];
  }[];
  tags?: string[];
  thumbnail?: Media;
  thumbnailOrigin?: Media & { media: Media };image3d?: Media;
  thumbnailUrl?: string;
  tipNote: string;
  tipNotes: [
    {
      description: string;
      version: number;
    }
  ];
  title: string;
  toServe: string;
  totalComment: number;
  totalCommentLevel1: number;
  totalEmotion?: {
    totalLove?: number;
    totalLike?: number;
  };
  totalRatingTime?: number;
  value?: unknown[]; //Advertisement[]
}

export interface IngredientSets {
  description: string;
  name: string;
  group?: string;
  version: number;
  quantity?: string;
  unitLabel?: string;
  ingredient?: string;
  versionLabel: string;
  measurement?: string;
}

export interface DetailRecipeRequest {
  measurement?: RecipeMeasurement;
  related?: boolean;
}

export enum RecipeAtrributes {
  Prepare = 'prep',
  Cook = 'cook',
  Serves = 'serves',
  Difficulty = 'difficulty'
}

export type RecipeAttributeType = 'prep' | 'cook' | 'serves' | 'difficulty';