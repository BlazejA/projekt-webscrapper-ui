import { ProductModel } from './productModel';

export interface SmartphoneModel extends ProductModel {
  details: {
    screen: string;
    internal_storage: string;
    ram: string;
    camera: string;
    system: string;
  };
}
