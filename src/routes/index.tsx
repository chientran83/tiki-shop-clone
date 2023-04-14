import { memo, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";

import DefaultLayout from "../components/DefaultLayout";
import LoginLayout from "../components/LoginLayout";
import Cart from "../modules/Cart";
import Home from "../modules/Home";
import Login from "../modules/login";
import Register from "../modules/register";
import ProtectedRoutes from "./ProtectedRoutes";
import { loggedInUserSelector } from "../context/auth/selector";
import { getAuth } from "../context/auth/services";
import { useAppDispatch } from "../app/store";
import authSlice from "../context/auth/slice";
import cartSlice from "../context/cart/slice";
import ProductDetail from "../modules/ProductDetail";
import Loading from "../components/Loading";
import Search from "../modules/Search";
import AccountLayout from "../components/AccountLayout";
import UserInfo from "../modules/UserInfo";
import Favorite from "../modules/Favorite";
import favoriteSlice from "../context/Favorite/slice";
import NotFound from "../modules/NotFound";
import { ROUTES } from "../constants/routes";

const AppRoutes = () => {
  const dispatch = useAppDispatch();
  const loggedInUser = useSelector(loggedInUserSelector);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const productInCart = localStorage.getItem("productInCart");
    const productInFavorite = localStorage.getItem("productInFavorite");
    if (productInCart !== null) {
      dispatch(cartSlice.actions.changeProduct(JSON.parse(productInCart)));
    }
    if (productInFavorite !== null) {
      dispatch(
        favoriteSlice.actions.changeProduct(JSON.parse(productInFavorite))
      );
    }
    getAuth()
      .then((res) => {
        if (res.status === 200) {
          dispatch(authSlice.actions.login(res.user));
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: ROUTES.ROOT,
      element: (
        <ProtectedRoutes conditions={loggedInUser} redirect="/login">
          <DefaultLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          path: "",
          element: <DefaultLayout />,
          children: [
            {
              path: ROUTES.HOME,
              element: <Home />,
            },
            {
              path: ROUTES.CART,
              element: <Cart />,
            },
            {
              path: `${ROUTES.PRODUCT_DETAIL}/:productId`,
              element: <ProductDetail />,
            },
            {
              path: ROUTES.SEARCH,
              element: <Search />,
            },
          ],
        },
        {
          path: ROUTES.ACCOUNT,
          element: <AccountLayout />,
          children: [
            {
              path: ROUTES.USER_INFO,
              element: <UserInfo />,
            },
            {
              path: ROUTES.FAVORITE,
              element: <Favorite />,
            },
          ],
        },
      ],
    },
    {
      path: ROUTES.ROOT,
      element: (
        <ProtectedRoutes conditions={!loggedInUser} redirect="/">
          <LoginLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          path: ROUTES.LOGIN,
          element: <Login />,
        },
        {
          path: ROUTES.REGISTER,
          element: <Register />,
        },
      ],
    },
  ]);
  if (loading) return <Loading />;
  return <RouterProvider router={router} />;
};

export default memo(AppRoutes);
