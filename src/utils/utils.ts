import { DEFAULT_IMAGE_JPEG, DEFAULT_IMAGE_WEBP, IMAGE_REG_EXP, RETINA_SUFFIX } from '../const';

export const addRetinaSuffix = (imagePath: string) => imagePath.replace(
  IMAGE_REG_EXP, (match) =>
    match.includes(DEFAULT_IMAGE_JPEG)
      ?
      `${RETINA_SUFFIX}${DEFAULT_IMAGE_JPEG}`
      :
      `${RETINA_SUFFIX}${DEFAULT_IMAGE_WEBP}`
);
