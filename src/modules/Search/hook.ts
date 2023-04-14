import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  getSearchProduct,
} from "../../context/product/services";
import { Product } from "../Home/types";

export type ReceivedProps = Record<string, any>;
const useSearch = (props: ReceivedProps) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  let querySearch = searchParams.get("keyword");

  useEffect(() => {
    setLoading(true);
    getSearchProduct(querySearch)
      .then((res) => {
        if (res.status === 200) {
          setProducts(res.data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [querySearch]);

  return {
    ...props,
    products,
    loading,
    querySearch,
  };
};

export type Props = ReturnType<typeof useSearch>;
export default useSearch;
