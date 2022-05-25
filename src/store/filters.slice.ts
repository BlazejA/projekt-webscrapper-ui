import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialShopNameFilters } from '@/helpers/filter.helper';
import { ShopNameModel } from '@/models/shopNameModel';

interface InitialState {
  shopNames: ShopNameModel[];
  nameQuery: string;
  price: {
    min: string;
    max: string;
  };
  category: string;
  discountOnly: boolean;
  sortingType: string;
}

const initialState: InitialState = {
  shopNames: initialShopNameFilters,
  nameQuery: '',
  price: {
    min: '',
    max: '',
  },
  category: '',
  discountOnly: false,
  sortingType: '',
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
    updateDiscountOnlyFilter(state, action: PayloadAction<boolean>) {
      state.discountOnly = action.payload || false;
    },
    updateCategoryFilter(state, action: PayloadAction<string>) {
      state.category = action.payload || '';
    },
    updateSortingType(state, action: PayloadAction<string>) {
      state.sortingType = action.payload || '';
    },
  },
});

export const {
  updateShopNamesFilter,
  updateNameQueryFilter,
  updateCategoryFilter,
  updatePriceFilter,
  updateSortingType,
  updateDiscountOnlyFilter,
} = filtersSlice.actions;
export default filtersSlice.reducer;
