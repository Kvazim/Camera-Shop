import { memo } from 'react';
import { DEFAULT_STAR_COUNT } from '../../const';

type RatingStarsProps = {
  rating: number;
}

function RatingStars({ rating }: RatingStarsProps) {
  const getKey = (index: number) => `star_${index}`;

  return (
    <>
      {Array(DEFAULT_STAR_COUNT).fill(null).map((_, index) => (
        <svg key={getKey(index)} width="17" height="16" aria-hidden="true">
          <use xlinkHref={index < rating ? '#icon-full-star' : '#icon-star'}></use>
        </svg>
      ))}
    </>
  );
}

const MemoizedRatingStars = memo(RatingStars);

export default MemoizedRatingStars;
