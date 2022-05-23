import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialShopNameFilters, initialSmartphoneFilters } from '@/helpers/filter.helper';
import { ShopNameModel } from '@/models/shopNameModel';
import { SmartphoneFiltersModel } from '@/models/smartphoneFiltersModel';

interface InitialState {
  shopNames: ShopNameModel[];
  nameQuery: string;
  price: {
    min: string;
    max: string;
  };
  category: string;
  sortingType: string;
  smartphoneAdditionalFilters: SmartphoneFiltersModel;
}

const initialState: InitialState = {
  shopNames: initialShopNameFilters,
  nameQuery: '',
  price: {
    min: '',
    max: '',
  },
  category: '',
  sortingType: '',
  smartphoneAdditionalFilters: initialSmartphoneFilters,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateShopNamesFilter(state, action: PayloadAction<ShopNameModel[]>) {
      state.shopNames = action.payload || [];
    },
    updateNameQueryFilter(state, action: PayloadAction<string>) {
      state.nameQuery = action.payload || '';
    },
    updatePriceFilter(state, action: PayloadAction<{ min: string; max: string }>) {
      state.price = action.payload || '';
    },
    updateCategoryFilter(state, action: PayloadAction<string>) {
      state.category = action.payload || '';
    },
    updateSortingType(state, action: PayloadAction<string>) {
      state.sortingType = action.payload || '';
    },
    updateSmartphoneAdditionalFilters(state, action: PayloadAction<SmartphoneFiltersModel>) {
      state.smartphoneAdditionalFilters = action.payload || null;
    },
  },
});

export const {
  updateShopNamesFilter,
  updateNameQueryFilter,
  updateCategoryFilter,
  updatePriceFilter,
  updateSmartphoneAdditionalFilters,
  updateSortingType,
} = filtersSlice.actions;
export default filtersSlice.reducer;
