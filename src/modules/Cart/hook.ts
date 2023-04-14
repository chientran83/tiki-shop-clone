import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/store";
import { productInCartSelector } from "../../context/cart/selector";
import cartSlice from "../../context/cart/slice";
import { ProductInCart } from "./types";

export type ReceivedProps = Record<string, any>;

const useCart = (props: ReceivedProps) => {
  const dispatch = useAppDispatch();
  const cancelRef = useRef();
  const productInCart = useSelector(productInCartSelector);
  const [loading, setLoading] = useState<boolean>(false);
  const [productDelete, setProductDelete] = useState<ProductInCart | null>(
    null
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const totalPrice = useMemo(() => {
    return productInCart.reduce((accumulator: number, product) => {
      return accumulator + product.quantity * product.price;
    }, 0);
  }, [productInCart]);

  const changeQuantityProductInCart = (
    quantity: number | string | null,
    productDecrease: ProductInCart
  ) => {
    const productInCartAfterChange = productInCart.map(
      (product: ProductInCart) => {
        const max = 20;
        const min = 1;
        if (product.id === productDecrease.id) {
          if (product.quantity > max)
            return {
              ...product,
              quantity: max,
            };

          if (product.quantity < min)
            return {
              ...product,
              quantity: min,
            };

          if (product.quantity >= min && product.quantity <= max)
            return {
              ...product,
              quantity,
            };
        }
        return product;
      }
    );
    localStorage.setItem(
      "productInCart",
      JSON.stringify(productInCartAfterChange)
    );
    dispatch(cartSlice.actions.changeProduct(productInCartAfterChange));
  };

  const deleteProductInCart = (productDelete: ProductInCart | null) => {
    if (productDelete === null) return;
    const productInCartAfterChange = productInCart.filter(
      (product: ProductInCart) => {
        return product.id !== productDelete.id;
      }
    );
    localStorage.setItem(
      "productInCart",
      JSON.stringify(productInCartAfterChange)
    );
    dispatch(cartSlice.actions.changeProduct(productInCartAfterChange));
  };

  useEffect(() => {}, []);
  return {
    ...props,
    loading,
    productInCart,
    changeQuantityProductInCart,
    deleteProductInCart,
    isOpen,
    onOpen,
    onClose,
    cancelRef,
    productDelete,
    setProductDelete,
    totalPrice,
  };
};

export type Props = ReturnType<typeof useCart>;
export default useCart;
