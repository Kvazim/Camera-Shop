import { Images } from './images';

export type CameraType = 'Коллекционная' | 'Моментальная' | 'Цифровая' | 'Плёночная';

export type CameraCategory = 'Видеокамера' | 'Фотоаппарат';

export type CameraLevel = 'Нулевой' | 'Любительский' | 'Профессиональный';

export type Camera = {
  id: number;
  name: string;
  vendorCode: string;
  type: CameraType;
  category: CameraCategory;
  level: CameraLevel;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
} & Images;

export type Cameras = Camera[];
