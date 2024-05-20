import { memo, useMemo } from 'react';
import { Reviews } from '../../types/reviews';
import MemoizedReviewCard from '../review-card/review-card';
import { sortByDay } from '../../utils/utils';
import { Numbers } from '../../const';

type ReviewSectionBlockProps = {
  reviews: Reviews;
}

function ReviewSectionBlock({reviews}: ReviewSectionBlockProps) {
  const sortingReviews = useMemo(() => reviews.slice().sort(sortByDay), [reviews]);

  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          {/* <button className="btn" type="button">Оставить свой отзыв</button> */}
        </div>
        <ul className="review-block__list">
          {
            sortingReviews && sortingReviews.length > Numbers.Zero && sortingReviews.map((review) => (
              <li key={review.id} className="review-card">
                <MemoizedReviewCard reviewData={review} />
              </li>
            ))
          }
        </ul>
        <div className="review-block__buttons">
          <button className="btn btn--purple" type="button">Показать больше отзывов
          </button>
        </div>
      </div>
    </section>
  );
}

const MemoizedReviewSectionBlock = memo(ReviewSectionBlock);

export default MemoizedReviewSectionBlock;
