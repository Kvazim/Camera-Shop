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
  Reviews = 'REVIEWS',
}

export enum Status {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed',
}

export enum Numbers {
  Zero = 0,
  Five = 5,
}

export enum DateFormat {
  // DATE_PICKER: 'd/m/y H:i',
  DayMonth = 'D MMM',
  // MONTH_DAY: 'MMM DD',
  // HOUR_MINUTES: 'HH:mm',
  // DAY_MONTH_YEAR: 'DD/MM/YY[&nbsp;]HH:mm',
  // MINUTES_WITH_POSTFIX: 'mm[M]',
  // HOUR_MINUTES_WITH_POSTFIX: 'HH[H] mm[M]',
}

export const IMAGE_REG_EXP = /\.jpg|\.webp/g;
export const DEFAULT_IMAGE_JPEG = '.jpg';
export const DEFAULT_IMAGE_WEBP = '.webp';
export const RETINA_SUFFIX = '@2x';

export const BASE_URL = 'https://camera-shop.accelerator.htmlacademy.pro';

export const REQUEST_TIMEOUT = 5000;

export const DEFAULT_DELAY_TIME = 1000;
