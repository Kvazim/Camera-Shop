import { createAsyncThunk } from '@reduxjs/toolkit';
import { Extra } from '../types/state';
import { APIRoute } from '../const';
import { Promotions } from '../types/promotion';
import { Camera, Cameras } from '../types/cameras';

export const fetchPromoAction = createAsyncThunk<Promotions, undefined, Extra>(
  'data/fetchPromo',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Promotions>(APIRoute.Promo);
    return data;
  },
);

export const fetchGoodsAction = createAsyncThunk<Cameras, undefined, Extra>(
  'data/fetchGoods',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Cameras>(APIRoute.Cameras);
    return data;
  },
);

export const fetchGoodsByIdAction = createAsyncThunk<Camera, Camera['id'], Extra>(
  'data/fetchGoodsById',
  async (id: Camera['id'], {extra: api}) => {
    const {data} = await api.get<Camera>(`${APIRoute.Cameras}/${id}`);
    return data;
  },
);
