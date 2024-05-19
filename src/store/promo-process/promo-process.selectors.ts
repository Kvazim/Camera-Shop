import { NameSpace, Status } from '../../const';
import { Promotions } from '../../types/promotion';
import { State } from '../../types/state';

export const getPromoLoadingStatus = (state: State): Status => state[NameSpace.Promo].promoLoadingStatus;
export const getPromoData = (state: State): Promotions => state[NameSpace.Promo].promoData;
