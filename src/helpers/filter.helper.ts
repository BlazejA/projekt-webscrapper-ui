import { ShopNameModel } from '@/models/shopNameModel';
import { SmartphoneFiltersModel } from '@/models/smartphoneFiltersModel';

export const initialShopNameFilters: ShopNameModel[] = ['rtv_euro_agd', 'cortland', 'media_markt'];

export const initialSmartphoneFilters: SmartphoneFiltersModel = {
  ram: {
    min: null,
    max: null,
  },
  internalStorage: {
    min: null,
    max: null,
  },
};
