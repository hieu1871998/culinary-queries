export interface SeoSetting {
  firstP: string;
  metaDescription: string;
  metaTitle: string;
  type: SeoSettingType;
}

export enum SeoSettingType {
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  EAT_DRINK_MAIN_PAGE = 'EAT_DRINK_MAIN_PAGE',
  EAT_DRINKS = 'EAT_DRINKS',
  MY_FAVE_CHEF_PAGE = 'MY_FAVE_CHEF_PAGE',
  MY_PLACE = 'MY_PLACE',
  MY_PLACE_CHEF_PAGE = 'MY_PLACE_CHEF_PAGE',
  RECIPE_CHEF_PAGE = 'RECIPE_CHEF_PAGE',
  RECIPE_MAIN_PAGE = 'RECIPE_MAIN_PAGE',
  RECIPES = 'RECIPES',
  SHOP = 'SHOP',
  STORIES = 'STORIES',
  STORY_CHEF_PAGE = 'STORY_CHEF_PAGE',
  STORY_MAIN_PAGE = 'STORY_MAIN_PAGE',
  VIDEOS = 'VIDEOS',
  VIDEOS_CHEF_PAGE = 'VIDEOS_CHEF_PAGE',
  VIDEOS_MAIN_PAGE = 'VIDEOS_MAIN_PAGE',
}

export enum SEO_STATE {
  STANDARD,
  CUSTOM
}