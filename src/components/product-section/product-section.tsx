import { memo, useState } from 'react';
import { Camera } from '../../types/cameras';
import MemoizedPictureImage from '../picture-image/picture-image';
import MemoizedRatingStars from '../rating-stars/rating-stars';
import MemoizedTabsElementWrapper from '../tabs-element-wrapper/tabs-element-wrapper';
import MemoizedCharacteristics from '../characteristics/characteristics';

type ProductSectionProps = {
  product: Camera;
}

function ProductSection({product}: ProductSectionProps) {
  const [activeTab, setActiveTab] = useState('description');

  const tabsData = [
    { id: 'characteristics', title: 'Характеристики' },
    { id: 'description', title: 'Описание' },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const { previewImg, previewImgWebp, name, price, rating, reviewCount, description, vendorCode, category, type, level } = product;

  return (
    <section className="product">
      <div className="container">
        <div className="product__img">
          <MemoizedPictureImage previewImg={previewImg} previewImgWebp={previewImgWebp} width='560' height='480' alt={name} />
        </div>
        <div className="product__content">
          <h1 className="title title--h3">{name}</h1>
          <div className="rate product__rate">
            <MemoizedRatingStars rating={rating} />
            <p className="visually-hidden">Рейтинг: {rating}</p>
            <p className="rate__count">
              <span className="visually-hidden">Всего оценок:</span>
              {reviewCount}
            </p>
          </div>
          <p className="product__price">
            <span className="visually-hidden">Цена:</span>
            {price} ₽
          </p>
          <button className="btn btn--purple" type="button">
            <svg width="24" height="16" aria-hidden="true">
              <use xlinkHref="#icon-add-basket"></use>
            </svg>Добавить в корзину
          </button>
          <div className="tabs product__tabs">
            <div className="tabs__controls product__tabs-controls">
              {
                tabsData.map(
                  (tab) =>
                    (
                      <button
                        key={tab.id}
                        className={`tabs__control ${activeTab === tab.id ? 'is-active' : ''}`}
                        onClick={() => handleTabClick(tab.id)}
                        type="button"
                      >
                        {tab.title}
                      </button>
                    )
                )
              }
            </div>
            <div className="tabs__content">
              <MemoizedTabsElementWrapper isActive={activeTab === 'characteristics'}>
                <MemoizedCharacteristics category={category} level={level} type={type} vendorCode={vendorCode} />
              </MemoizedTabsElementWrapper>
              <MemoizedTabsElementWrapper isActive={activeTab === 'description'}>
                <div className="product__tabs-text">
                  <p>{description}</p>
                </div>
              </MemoizedTabsElementWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const MemoizedProductSection = memo(ProductSection);

export default MemoizedProductSection;
