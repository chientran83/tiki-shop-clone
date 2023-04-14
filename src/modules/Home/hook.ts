import { useEffect, useState } from "react";
import {
  getPopularProducts,
  getProducts,
} from "../../context/product/services";
import { getSliders } from "../../context/slider/servides";
import { Product, Slider } from "./types";

export type ReceivedProps = Record<string, any>;
type Loading = {
  products: boolean;
  sliders: boolean;
  popularProducts: boolean;
};

const useHome = (props: ReceivedProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);
  const [sliders, setSliders] = useState<Slider[]>([]);
  const [loading, setLoading] = useState<Loading>({
    products: false,
    sliders: false,
    popularProducts: false,
  });

  const fetchSliders = async () => {
    setLoading({ ...loading, sliders: true });
    await getSliders()
      .then((res) => {
        if (res.status === 200) {
          setSliders(res.data);
        }
      })
      .finally(() => {
        setLoading({ ...loading, sliders: false });
      });
  };
  const fetchProducts = async () => {
    setLoading({ ...loading, products: true });
    await getProducts()
      .then((res) => {
        if (res.status === 200) {
          setProducts(res.data);
        }
      })
      .finally(() => {
        setLoading({ ...loading, products: false });
      });
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
  useEffect(() => {
    fetchSliders()
      .then(() => fetchProducts())
      .then(() => fetchPopularProducts());
  }, []);
  return {
    ...props,
    products,
    loading,
    popularProducts,
    sliders,
  };
};

export type Props = ReturnType<typeof useHome>;
export default useHome;
