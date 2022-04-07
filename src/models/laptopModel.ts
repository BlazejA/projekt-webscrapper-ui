import { ProductModel } from "./productModel";

export interface LaptopModel extends ProductModel {
  details: {
    screen: string;
    internal_storage: string;
    ram: string;
    procesor: string;
    system: string;
  };
}
