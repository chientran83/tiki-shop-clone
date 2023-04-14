import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/store";
import { productInFavoriteSelector } from "../../context/Favorite/selector";
import favoriteSlice from "../../context/Favorite/slice";
import { Product } from "../Home/types";

export type ReceivedProps = Record<string, any>;

const useFavorite = (props: ReceivedProps) => {
  const dispatch = useAppDispatch();
  const cancelRef = useRef();
  const productInFavorite = useSelector(productInFavoriteSelector);
  const [loading, setLoading] = useState<boolean>(false);
  const [productDelete, setProductDelete] = useState<Product | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteProductInFavorite = (productDelete: Product | null) => {
    if (productDelete === null) return;
    const productInFavoriteAfterChange = productInFavorite.filter(
      (product: Product) => {
        return product.id !== productDelete.id;
      }
    );
    localStorage.setItem(
      "productInFavorite",
      JSON.stringify(productInFavoriteAfterChange)
    );
    dispatch(favoriteSlice.actions.changeProduct(productInFavoriteAfterChange));
  };

  useEffect(() => {}, []);
  return {
    ...props,
    loading,
    isOpen,
    onOpen,
    onClose,
    cancelRef,
    productDelete,
    setProductDelete,
    deleteProductInFavorite,
    productInFavorite,
  };
};

export type Props = ReturnType<typeof useFavorite>;
export default useFavorite;
