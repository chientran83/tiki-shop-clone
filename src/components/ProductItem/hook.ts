import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { message } from "antd";

import { useAppDispatch } from "../../app/store";
import { productInCartSelector } from "../../context/cart/selector";
import cartSlice from "../../context/cart/slice";
import { Product } from "../../modules/Home/types";
import { ProductInCart } from "../../modules/Cart/types";
import { productInFavoriteSelector } from "../../context/Favorite/selector";
import favoriteSlice from "../../context/Favorite/slice";

export type ReceivedProps = {
  product: Product;
};

const useProductItem = (props: ReceivedProps) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true);

  const [messageApi, contextHolder] = message.useMessage();
  const productInCart: ProductInCart[] = useSelector(productInCartSelector);
  const productInFavorite: Product[] = useSelector(productInFavoriteSelector);

  const addProductToCart = (productAdded: Product) => {
    let isAvailable = false;
    let productInCartAfterChange = productInCart.map(
      (product: ProductInCart) => {
        if (product.id === productAdded.id) {
          isAvailable = true;
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      }
    );

    if (!isAvailable) {
      productInCartAfterChange.push({ ...productAdded, quantity: 1 });
    }

    localStorage.setItem(
      "productInCart",
      JSON.stringify(productInCartAfterChange)
    );
    dispatch(cartSlice.actions.changeProduct(productInCartAfterChange));
    messageApi.open({
      type: "success",
      content: "Sản phẩm đã được thêm vào giỏ hàng",
    });
  };
  const addProductToFavorite = (productAdded: Product) => {
    var products: Product[] = [...productInFavorite];
    let productAvailable = productInFavorite.find((product: Product) => {
      return product.id === productAdded.id;
    });

    if (!productAvailable) {
      products.push(productAdded);
    }

    localStorage.setItem("productInFavorite", JSON.stringify(products));
    dispatch(favoriteSlice.actions.changeProduct(products));
    messageApi.open({
      type: "success",
      content: "Sản phẩm đã được thêm vào danh sách yêu thích",
    });
  };

  useEffect(() => {}, []);
  return {
    ...props,
    loading,
    addProductToCart,
    addProductToFavorite,
    contextHolder,
  };
};

export type Props = ReturnType<typeof useProductItem>;
export default useProductItem;
