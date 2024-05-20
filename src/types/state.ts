import { AxiosInstance } from 'axios';
import { store } from '../store';
import { Action, ThunkAction } from '@reduxjs/toolkit';
import { Status } from '../const';
import { Promotions } from './promotion';
import { Camera, Cameras } from './cameras';
import { Reviews } from './reviews';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, State, AxiosInstance, Action<string>>;

export type Extra = {
  state: State;
  extra: AxiosInstance;
};

export type PromoProcess = {
  promoLoadingStatus: Status;
  promoData: Promotions;
};

export type GoodsProcess = {
  goodsLoadingStatus: Status;
  goodIdLoadingStatus: Status;
  goodsData: Cameras;
  goodIdData: Camera | null;
}

export type ReviewsProcess = {
  reviewsLoadingStatus: Status;
  reviewsData: Reviews;
}
