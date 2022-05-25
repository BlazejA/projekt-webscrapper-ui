import { ProductModel } from './productModel';

export interface SmartphoneModel extends ProductModel {
  details: {
    screen: string;
    internalStorage: string;
    ram: string;
    camera: string;
    system: string;
  };
}
