import { memo } from 'react';
import { addRetinaSuffix } from '../../utils/utils';

type PictureImageProps = {
  previewImg: string;
  previewImgWebp: string;
  width: string;
  height:string;
  alt:string;
}

export function PictureImage({previewImg, previewImgWebp, width, height, alt}: PictureImageProps) {
  return (
    <picture>
      <source type="image/webp" srcSet={`/${previewImgWebp}, /${addRetinaSuffix(previewImgWebp)} 2x`} />
      <img src={`/${previewImg}`} srcSet={`/${addRetinaSuffix(previewImg)} 2x`} width={width} height={height} alt={alt} />
    </picture>
  );
}

const MemoizedPictureImage = memo(PictureImage);
export default MemoizedPictureImage;
