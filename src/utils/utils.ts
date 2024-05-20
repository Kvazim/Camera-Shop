import dayjs from 'dayjs';
import { DEFAULT_IMAGE_JPEG, DEFAULT_IMAGE_WEBP, DateFormat, IMAGE_REG_EXP, RETINA_SUFFIX } from '../const';
import { Review } from '../types/reviews';


export const addRetinaSuffix = (imagePath: string) => imagePath.replace(
  IMAGE_REG_EXP, (match) =>
    match.includes(DEFAULT_IMAGE_JPEG)
      ?
      `${RETINA_SUFFIX}${DEFAULT_IMAGE_JPEG}`
      :
      `${RETINA_SUFFIX}${DEFAULT_IMAGE_WEBP}`
);

export function humanizeDate(date: string, format: DateFormat): string {
  return dayjs(date).format(format);
}

export const sortByDay = (reviewFirst: Review, reviewSecond: Review): number => dayjs(reviewSecond.createAt).diff(dayjs(reviewFirst.createAt));
