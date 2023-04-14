import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../context/auth/slice";
import { useDispatch } from "react-redux";
import cartSlice from "../context/cart/slice";
import favoriteSlice from "../context/Favorite/slice";

const rootReducer = {
  [authSlice.name]: authSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
  [favoriteSlice.name]: favoriteSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([...getDefaultMiddleware()]),
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type AppDispatch = typeof store.dispatch;
export default store;
