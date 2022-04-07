import { initialShopNameFilters } from "@/helpers/filter.helper";
import { ShopNameModel } from "@/models/shopNameModel";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  shopNames: ShopNameModel[];
  nameQuery: string;
}

const initialState: InitialState = {
  shopNames: initialShopNameFilters,
  nameQuery: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateShopNamesFilter(state, action: PayloadAction<ShopNameModel[]>) {
      state.shopNames = action.payload || [];
    },
    updateNameQueryFilter(state, action: PayloadAction<string>) {
      state.nameQuery = action.payload || "";
    },
  },
});

export const { updateShopNamesFilter, updateNameQueryFilter } =
  filtersSlice.actions;
export default filtersSlice.reducer;
