import { State } from '../../types/state';
import { Status, NameSpace } from '../../const';
import { Camera, Cameras } from '../../types/cameras';

export const getGoodsLoadingStatus = (state: State): Status => state[NameSpace.Goods].goodsLoadingStatus;
export const getGoodsData = (state: State): Cameras => state[NameSpace.Goods].goodsData;

export const getGoodIdLoadingStatus = (state: State): Status => state[NameSpace.Goods].goodIdLoadingStatus;
export const getGoodIdData = (state: State): Camera | null => state[NameSpace.Goods].goodIdData;
