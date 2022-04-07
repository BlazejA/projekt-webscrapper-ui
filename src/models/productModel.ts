import { CategoryModel } from "./categoryModel";
import { ShopNameModel } from "./shopNameModel";

export interface ProductModel {
  id: number;
  name: string;
  actual_price: string;
  old_price: string;
  category: CategoryModel;
  shop: ShopNameModel;
  img: string;
  link: string;
}
