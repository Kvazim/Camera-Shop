import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchGoodsByIdAction, fetchReviewsIdAction } from '../../store/api-actions';
import { getGoodIdData, getGoodIdLoadingStatus } from '../../store/goods-process/goods-process.selector';
import { AppRoute, Status } from '../../const';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import MemoizedProductSection from '../../components/product-section/product-section';
import MemoizedReviewSectionBlock from '../../components/review-section-block/review-section-block';
import { getReviewsData, getReviewsLoadingStatus } from '../../store/reviews-process/reviews-process.selector';

function Product() {
  const { id } = useParams();
  const numberId = Number(id);
  const dispatch = useAppDispatch();
  const isLoadingStatus = useAppSelector(getGoodIdLoadingStatus);
  const isReviewsLoadingStatus = useAppSelector(getReviewsLoadingStatus);
  const goodData = useAppSelector(getGoodIdData);
  const reviewsData = useAppSelector(getReviewsData);

  useEffect(() => {
    dispatch(fetchGoodsByIdAction(numberId));
    dispatch(fetchReviewsIdAction(numberId));
  }, [dispatch, numberId]);

  if (
    (isLoadingStatus === Status.Idle || isLoadingStatus === Status.Loading) ||
    (isReviewsLoadingStatus === Status.Idle || isReviewsLoadingStatus === Status.Loading)
  ) {
    return <LoadingScreen />;
  }

  if (!goodData) {
    return <Navigate to={AppRoute.PageNotFound} replace />;
  }

  return (
    <>
      <div className="page-content__section">
        <MemoizedProductSection product={goodData} />
      </div>

      {/* <!--<div className="page-content__section">
            <section className="product-similar">
              <div className="container">
                <h2 className="title title&#45;&#45;h3">Похожие товары</h2>
                <div className="product-similar__slider">
                  <div className="product-similar__slider-list">
                    <div className="product-card is-active">
                      <div className="product-card__img">
                        <picture>
                          <source type="image/webp" srcSet="img/content/fast-shot.webp, img/content/fast-shot@2x.webp 2x" />
                          <img src="img/content/fast-shot.jpg" srcSet="img/content/fast-shot@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат FastShot MR-5" />
                        </picture>
                      </div>
                      <div className="product-card__info">
                        <div className="rate product-card__rate">
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                          <p className="visually-hidden">Рейтинг: 4</p>
                          <p className="rate__count">
                            <span className="visually-hidden">Всего оценок:</span>
                            12
                          </p>
                        </div>
                        <p className="product-card__title">Фотоаппарат FastShot MR-5</p>
                        <p className="product-card__price">
                          <span className="visually-hidden">Цена:</span>
                          18 970 ₽
                        </p>
                      </div>
                      <div className="product-card__buttons">
                        <button className="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                        </button>
                        <a className="btn btn&#45;&#45;transparent" href="#">Подробнее
                        </a>
                      </div>
                    </div>
                    <div className="product-card is-active">
                      <div className="product-card__img">
                        <picture>
                          <source type="image/webp" srcSet="img/content/das-auge.webp, img/content/das-auge@2x.webp 2x" />
                          <img src="img/content/das-auge.jpg" srcSet="img/content/das-auge@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»" />
                        </picture>
                      </div>
                      <div className="product-card__info">
                        <div className="rate product-card__rate">
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                          <p className="visually-hidden">Рейтинг: 3</p>
                          <p className="rate__count">
                            <span className="visually-hidden">Всего оценок:</span>
                            23
                          </p>
                        </div>
                        <p className="product-card__title">Ретрокамера «Das Auge IV»</p>
                        <p className="product-card__price">
                          <span className="visually-hidden">Цена:</span>
                          73 450 ₽
                        </p>
                      </div>
                      <div className="product-card__buttons">
                        <button className="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                        </button>
                        <a className="btn btn&#45;&#45;transparent" href="#">Подробнее</a>
                      </div>
                    </div>
                    <div className="product-card is-active">
                      <div className="product-card__img">
                        <picture>
                          <source type="image/webp" srcSet="img/content/instaprinter.webp, img/content/instaprinter@2x.webp 2x" />
                          <img src="img/content/instaprinter.jpg" srcSet="img/content/instaprinter@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат Instaprinter P2" />
                        </picture>
                      </div>
                      <div className="product-card__info">
                        <div className="rate product-card__rate">
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <p className="visually-hidden">Рейтинг: 5</p>
                          <p className="rate__count">
                            <span className="visually-hidden">Всего оценок:</span>
                            849
                          </p>
                        </div>
                        <p className="product-card__title">Фотоаппарат Instaprinter P2</p>
                        <p className="product-card__price">
                          <span className="visually-hidden">Цена:</span>
                          8 430 ₽
                        </p>
                      </div>
                      <div className="product-card__buttons">
                        <button className="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                        </button>
                        <a className="btn btn&#45;&#45;transparent" href="#">Подробнее
                        </a>
                      </div>
                    </div>
                    <div className="product-card">
                      <div className="product-card__img">
                        <picture>
                          <source type="image/webp" srcSet="img/content/das-auge.webp, img/content/das-auge@2x.webp 2x" />
                          <img src="img/content/das-auge.jpg" srcSet="img/content/das-auge@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»" />
                        </picture>
                      </div>
                      <div className="product-card__info">
                        <div className="rate product-card__rate">
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                          <p className="visually-hidden">Рейтинг: 4</p>
                          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>12</p>
                        </div>
                        <p className="product-card__title">Фотоаппарат FastShot MR-5</p>
                        <p className="product-card__price"><span className="visually-hidden">Цена:</span>18 970 ₽
                        </p>
                      </div>
                      <div className="product-card__buttons">
                        <button className="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                        </button>
                        <a className="btn btn&#45;&#45;transparent" href="#">Подробнее
                        </a>
                      </div>
                    </div>
                    <div className="product-card">
                      <div className="product-card__img">
                        <picture>
                          <source type="image/webp" srcSet="img/content/das-auge.webp, img/content/das-auge@2x.webp 2x" />
                          <img src="img/content/das-auge.jpg" srcSet="img/content/das-auge@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»" />
                        </picture>
                      </div>
                      <div className="product-card__info">
                        <div className="rate product-card__rate">
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                          <p className="visually-hidden">Рейтинг: 3</p>
                          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>23</p>
                        </div>
                        <p className="product-card__title">Ретрокамера «Das Auge IV»</p>
                        <p className="product-card__price"><span className="visually-hidden">Цена:</span>73 450 ₽
                        </p>
                      </div>
                      <div className="product-card__buttons">
                        <button className="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                        </button>
                        <a className="btn btn&#45;&#45;transparent" href="#">Подробнее
                        </a>
                      </div>
                    </div>
                    <div className="product-card">
                      <div className="product-card__img">
                        <picture>
                          <source type="image/webp" srcSet="img/content/instaprinter.webp, img/content/instaprinter@2x.webp 2x" />
                          <img src="img/content/instaprinter.jpg" srcSet="img/content/instaprinter@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат Instaprinter P2"/>
                        </picture>
                      </div>
                      <div className="product-card__info">
                        <div className="rate product-card__rate">
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <p className="visually-hidden">Рейтинг: 5</p>
                          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>849</p>
                        </div>
                        <p className="product-card__title">Фотоаппарат Instaprinter P2</p>
                        <p className="product-card__price"><span className="visually-hidden">Цена:</span>8 430 ₽
                        </p>
                      </div>
                      <div className="product-card__buttons">
                        <button className="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                        </button>
                        <a className="btn btn&#45;&#45;transparent" href="#">Подробнее
                        </a>
                      </div>
                    </div>
                  </div>
                  <button className="slider-controls slider-controls&#45;&#45;prev" type="button" aria-label="Предыдущий слайд" disabled>
                    <svg width="7" height="12" aria-hidden="true">
                      <use xlinkHref="#icon-arrow"></use>
                    </svg>
                  </button>
                  <button className="slider-controls slider-controls&#45;&#45;next" type="button" aria-label="Следующий слайд">
                    <svg width="7" height="12" aria-hidden="true">
                      <use xlinkHref="#icon-arrow"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </section>
          </div>--> */}

      <div className="page-content__section">
        <MemoizedReviewSectionBlock reviews={reviewsData} />
      </div>

      <a className="up-btn" href="#header">
        <svg width="12" height="18" aria-hidden="true">
          <use xlinkHref="#icon-arrow2"></use>
        </svg>
      </a>
    </>
  );
}

export default Product;
