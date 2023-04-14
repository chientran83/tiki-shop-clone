import { createSlice } from "@reduxjs/toolkit";
import { ProductInCart } from "../../modules/Cart/types";

const initialState: { products: ProductInCart[] } = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeProduct(state, action) {
      state.products = action.payload;
    },
  },
});

export default cartSlice;
