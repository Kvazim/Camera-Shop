import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../const';
import { GoodsProcess } from '../../types/state';
import { fetchGoodsAction, fetchGoodsByIdAction } from '../api-actions';

const initialState: GoodsProcess = {
  goodsLoadingStatus: Status.Idle,
  goodIdLoadingStatus: Status.Idle,
  goodsData: [],
  goodIdData: null,
};

export const goodsProcess = createSlice({
  name: NameSpace.Goods,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGoodsAction.pending, (state) => {
        state.goodsLoadingStatus = Status.Loading;
      })
      .addCase(fetchGoodsAction.fulfilled, (state, action) => {
        state.goodsLoadingStatus = Status.Success;
        state.goodsData = action.payload;
      })
      .addCase(fetchGoodsAction.rejected, (state) => {
        state.goodsLoadingStatus = Status.Failed;
      })
      .addCase(fetchGoodsByIdAction.pending, (state) => {
        state.goodIdLoadingStatus = Status.Loading;
      })
      .addCase(fetchGoodsByIdAction.fulfilled, (state, action) => {
        state.goodIdLoadingStatus = Status.Success;
        state.goodIdData = action.payload;
      })
      .addCase(fetchGoodsByIdAction.rejected, (state) => {
        state.goodIdLoadingStatus = Status.Failed;
      });
  },
});
