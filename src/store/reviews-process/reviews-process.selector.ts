import { NameSpace, Status } from '../../const';
import { Reviews } from '../../types/reviews';
import { State } from '../../types/state';


export const getReviewsLoadingStatus = (state: State): Status => state[NameSpace.Reviews].reviewsLoadingStatus;
export const getReviewsData = (state: State): Reviews => state[NameSpace.Reviews].reviewsData;
