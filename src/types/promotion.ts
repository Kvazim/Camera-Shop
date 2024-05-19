import { Images } from './images';

export type Promotion = {
  id: number;
  name: string;
} & Images;

export type Promotions = Promotion[];
