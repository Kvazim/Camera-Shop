import { memo } from 'react';
import MemoizedRatingStars from '../rating-stars/rating-stars';
import { Review } from '../../types/reviews';
import { humanizeDate } from '../../utils/utils';
import { DateFormat } from '../../const';

type ReviewCardProps = {
  reviewData: Review;
}

function ReviewCard({reviewData}: ReviewCardProps) {
  const { userName, rating, createAt, advantage, disadvantage, review } = reviewData;

  return (
    <>
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime={createAt}>{humanizeDate(createAt, DateFormat.DayMonth)}</time>
      </div>
      <div className="rate review-card__rate">
        <MemoizedRatingStars rating={rating} />
        <p className="visually-hidden">Оценка: {rating}</p>
      </div>
      <ul className="review-card__list">
        <li className="item-list">
          <span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{advantage}</p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{disadvantage}</p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review}</p>
        </li>
      </ul>
    </>
  );
}

const MemoizedReviewCard = memo(ReviewCard);

export default MemoizedReviewCard;
