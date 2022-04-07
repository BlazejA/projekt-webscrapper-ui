import { initialShopNameFilters } from "@/helpers/filter.helper";
import { ShopNameModel } from "@/models/shopNameModel";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  shopNames: ShopNameModel[];
}

const initialState: InitialState = {
  shopNames: initialShopNameFilters,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateShopNamesFilter(state, action: PayloadAction<ShopNameModel[]>) {
      state.shopNames = action.payload || [];
    },
  },
});

export const { updateShopNamesFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
