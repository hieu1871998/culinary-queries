import { mapValues } from 'lodash'

enum Service {
  PORTAL = '/portal',
  PROFILE = '/profile',
  MAIL_NOTIFY = '/mn'
}

const ApiRouteService = {
  ADMIN: '/admin',
  AUTH: '/auth',
  EXTERNAL: '/external',
  USER: '/user'
};

enum Category {
  ADMIN = '/admin',
  ADVERTISING = '/hkt',
  APP = '/app',
  CHEF = '/chef',
  COMMENT = '/comment',
  CPTV = '/cptv',
  EATDRINK = '/eatdrink',
  MAGENTO = '/magento',
  MEDIA = '/media',
  NOTIFICATION = '/notification',
  PAYMENT = '/payment',
  PLAYLIST = '/playlist',
  PUBLIC = '/public',
  RECIPE = '/recipe',
  SEO = '/seo',
  SOCIAL = '/social',
  STORIES = '/stories',
  SUBSCRIPTION = '/subscription',
  SYSTEM_MEDIA = '/system-media',
  UNISEARCH = '/unisearch',
  USER = '/user',
}

export const ENDPOINTS = {
  ADMIN_IMPERSONATE: `${Service.PORTAL}${Category.ADMIN}/login/onbehalf`,
  APPLE_URL: `${Service.PROFILE}${Category.PUBLIC}/apple/request/token`,
  APPLE_USER: `${Service.PROFILE}${Category.PUBLIC}/apple/user`,
  FACEBOOK_URL: `${Service.PROFILE}${Category.PUBLIC}/facebook/request/token`,
  FACEBOOK_USER: `${Service.PROFILE}${Category.PUBLIC}/facebook/user`,
  FORGOT_PASSWORD: `${Service.PROFILE}${Category.PUBLIC}/user/pwd/forgot`,
  GOOGLE_URL: `${Service.PROFILE}${Category.PUBLIC}/google/request/token`,
  GOOGLE_USER: `${Service.PROFILE}${Category.PUBLIC}/google/user`,
  LOGIN: `${Service.PORTAL}${Category.APP}/login`,
  LOGOUT: `${Service.PORTAL}${Category.APP}/logout`,
  PUBLIC_USER: `${Service.PROFILE}${Category.PUBLIC}/user`,
  RECAPTCHA_SITEKEY: `${Service.PORTAL}${Category.PUBLIC}/recaptcha/sitekey`,
  RECIPE_DETAI_CMS: `${Service.PORTAL}/recipe`,
  RECIPE_DETAIL_BY_SLUG: `${Service.PORTAL}${Category.PUBLIC}/recipe/slug`,
  RECIPE_DETAIL: `${Service.PORTAL}${Category.PUBLIC}/recipe`,
  REMOVE_USER: `${Service.PROFILE}${Category.PUBLIC}/user/remove`,
  RESET_PASSWORD: `${Service.PROFILE}${Category.PUBLIC}/user/pwd/reset`,
  USER_INFO: `${Service.PORTAL}${Category.USER}`,
  USER_SIGNUP: `${Service.PORTAL}${Category.PUBLIC}/register/user`,
};

export const API_ROUTE_ENDPOINTS = mapValues({
  LOGIN: `${ApiRouteService.AUTH}/login`,
  LOGOUT: `${ApiRouteService.AUTH}/logout`,
  USER_INFO: `${ApiRouteService.USER}/info`,
  ADMIN_IMPERSONATE: `${ApiRouteService.ADMIN}/impersonate`,
  ADMIN_STOP_IMPERSONATE: `${ApiRouteService.ADMIN}/stop-impersonate`,
  IPREGISTRY: `${ApiRouteService.EXTERNAL}/ipregistry`
}, route => `/client${route}`);
