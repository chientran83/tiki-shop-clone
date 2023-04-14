import { createSelector } from "@reduxjs/toolkit";
import { Product } from "../../modules/Home/types";

type RootState = {
  favorite: { products: Product[] };
};

const favoriteSelector = (state: RootState) => state.favorite;

export const productInFavoriteSelector = createSelector(
  favoriteSelector,
  (favorite) => favorite.products
);
