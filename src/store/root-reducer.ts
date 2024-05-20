import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { promoProcess } from './promo-process/promo-process.slice';
import { goodsProcess } from './goods-process/goods-process.slice';
import { reviewsProcess } from './reviews-process/reviews-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Promo]: promoProcess.reducer,
  [NameSpace.Goods]: goodsProcess.reducer,
  [NameSpace.Reviews]: reviewsProcess.reducer,
});
