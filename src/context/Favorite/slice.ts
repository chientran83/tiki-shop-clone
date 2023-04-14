import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../modules/Home/types";

const initialState: { products: Product[] } = {
  products: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    changeProduct(state, action) {
      state.products = action.payload;
    },
  },
});

export default favoriteSlice;
