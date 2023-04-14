import { createSelector } from "@reduxjs/toolkit";
import { ProductInCart } from "../../modules/Cart/types";
import { Product } from "../../modules/Home/types";

type RootState = {
  cart: { products: ProductInCart[] };
};

const cartSelector = (state: RootState) => state.cart;

export const productInCartSelector = createSelector(
  cartSelector,
  (cart) => cart.products
);
