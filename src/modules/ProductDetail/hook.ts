import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { message } from "antd";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { Product } from "../Home/types";
import { useAppDispatch } from "../../app/store";
import { productInCartSelector } from "../../context/cart/selector";
import { ProductInCart } from "../Cart/types";
import cartSlice from "../../context/cart/slice";
import {
  getPopularProducts,
  getProductDetail,
} from "../../context/product/services";

export type ReceivedProps = Record<string, any>;
const useProductDetail = (props: ReceivedProps) => {
  type Loading = {
    productItem: boolean;
    popularProducts: boolean;
  };
  type FormInputs = {
    quantity: number;
  };
  let { productId } = useParams();
  const dispatch = useAppDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const productInCart = useSelector(productInCartSelector);
  const [product, setProduct] = useState<Product | null | undefined>(null);
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<Loading>({
    productItem: false,
    popularProducts: false,
  });

  const { handleSubmit, control } = useForm<FormInputs>({
    mode: "onSubmit",
    defaultValues: {
      quantity: 1,
    },
  });

  const onSubmit = (data: any) => {
    addProductToCart(data.quantity);
  };

  const fetchPopularProducts = async () => {
    setLoading({ ...loading, popularProducts: true });
    await getPopularProducts()
      .then((res) => {
        if (res.status === 200) {
          setPopularProducts(res.data);
        }
      })
      .finally(() => {
        setLoading({ ...loading, popularProducts: false });
      });
  };

  const addProductToCart = (quantity: number) => {
    if (product === null || product === undefined) return;
    let isAvailable = false;
    let productInCartAfterChange = productInCart.map(
      (productItem: ProductInCart) => {
        if (productItem.id === product.id) {
          isAvailable = true;
          return {
            ...product,
            quantity: productItem.quantity + quantity,
          };
        }
        return productItem;
      }
    );

    if (!isAvailable) {
      productInCartAfterChange.push({ ...product, quantity: quantity });
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

  useEffect(() => {
    if (productId) {
      setLoading({ ...loading, productItem: true });
      getProductDetail(productId)
        .then((res) => {
          if (res.status === 200) {
            setProduct(res.data);
          }
        })
        .finally(() => {
          setLoading({ ...loading, productItem: false });
        });
    }
    fetchPopularProducts();
  }, [productId]);
  return {
    ...props,
    contextHolder,
    handleSubmit,
    onSubmit,
    control,
    product,
    loading,
    popularProducts,
  };
};

export type Props = ReturnType<typeof useProductDetail>;
export default useProductDetail;
