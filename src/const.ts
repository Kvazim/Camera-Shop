export enum AppRoute {
  Root = '/',
  Product = '/product',
  PageNotFound = '/404',
}

export enum APIRoute {
  Cameras = '/cameras',
  Similar = '/similar',
  Promo = '/promo',
  Reviews = '/reviews',
  Coupons = '/coupons',
  Orders = '/orders',
}

export enum NameSpace {
  Promo = 'PROMO',
  Goods = 'GOODS',
}

export enum Status {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed',
}

export const IMAGE_REG_EXP = /\.jpg|\.webp/g;
export const DEFAULT_IMAGE_JPEG = '.jpg';
export const DEFAULT_IMAGE_WEBP = '.webp';
export const RETINA_SUFFIX = '@2x';

export const BASE_URL = 'https://camera-shop.accelerator.htmlacademy.pro';

export const DEFAULT_ZERO = 0;

export const DEFAULT_STAR_COUNT = 5;

export const REQUEST_TIMEOUT = 5000;

export const DEFAULT_DELAY_TIME = 1000;
