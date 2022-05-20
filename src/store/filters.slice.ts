import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialShopNameFilters, initialSmartphoneFilters } from '@/helpers/filter.helper';
import { ShopNameModel } from '@/models/shopNameModel';
import { SmartphoneFiltersModel } from '@/models/smartphoneFiltersModel';

interface InitialState {
  shopNames: ShopNameModel[];
  nameQuery: string;
  minPrice: number | null;
  maxPrice: number | null;
  category: string;
  smartphoneAdditionalFilters: SmartphoneFiltersModel;
  prices: number[];
}

const initialState: InitialState = {
  shopNames: initialShopNameFilters,
  nameQuery: '',
  minPrice: null,
  maxPrice: null,
  category: '',
  smartphoneAdditionalFilters: initialSmartphoneFilters,
  prices: [0, 0],
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
    updateCategoryFilter(state, action: PayloadAction<string>) {
      state.category = action.payload || '';
    },
    updateSmartphoneAdditionalFilters(state, action: PayloadAction<SmartphoneFiltersModel>) {
      state.smartphoneAdditionalFilters = action.payload || null;
    },
    updatePricesFilter(state, action: PayloadAction<number[]>) {
      state.prices = action.payload;
    },
  },
});

export const {
  updateShopNamesFilter,
  updateNameQueryFilter,
  updateCategoryFilter,
  updateSmartphoneAdditionalFilters,
  updatePricesFilter,
} = filtersSlice.actions;
export default filtersSlice.reducer;
