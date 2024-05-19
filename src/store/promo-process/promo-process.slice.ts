import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../const';
import { fetchPromoAction } from '../api-actions';
import { PromoProcess } from '../../types/state';

const initialState: PromoProcess = {
  promoLoadingStatus: Status.Idle,
  promoData: [],
};

export const promoProcess = createSlice({
  name: NameSpace.Promo,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoAction.pending, (state) => {
        state.promoLoadingStatus = Status.Loading;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promoLoadingStatus = Status.Success;
        state.promoData = action.payload;
      })
      .addCase(fetchPromoAction.rejected, (state) => {
        state.promoLoadingStatus = Status.Failed;
      });
  },
});
