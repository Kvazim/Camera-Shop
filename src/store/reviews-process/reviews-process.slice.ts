import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../const';
import { ReviewsProcess } from '../../types/state';
import { fetchReviewsIdAction } from '../api-actions';

const initialState: ReviewsProcess = {
  reviewsLoadingStatus: Status.Idle,
  reviewsData: [],
};

export const reviewsProcess = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsIdAction.pending, (state) => {
        state.reviewsLoadingStatus = Status.Loading;
      })
      .addCase(fetchReviewsIdAction.fulfilled, (state, action) => {
        state.reviewsLoadingStatus = Status.Success;
        state.reviewsData = action.payload;
      })
      .addCase(fetchReviewsIdAction.rejected, (state) => {
        state.reviewsLoadingStatus = Status.Failed;
      });
  },
});
