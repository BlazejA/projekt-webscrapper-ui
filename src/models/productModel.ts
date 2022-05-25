import { CategoryModel } from './categoryModel';
import { ShopNameModel } from './shopNameModel';

export interface ProductModel {
  id: number;
  name: string;
  actualPrice: string;
  oldPrice: string;
  category: CategoryModel;
  shop: ShopNameModel;
  img: string;
  link: string;
}
