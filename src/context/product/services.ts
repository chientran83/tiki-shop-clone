import { popularProducts, products } from "../../mocks/Products";
import { Product } from "../../modules/Home/types";

export const getProducts = async () => {
  return await products;
};
export const getPopularProducts = async () => {
  return await popularProducts;
};
export const getProductDetail = async (productId: string) => {
  const productItem = products.data.find((product: Product) => {
    return productId === product.id;
  });
  return await { status: 200, data: productItem };
};
export const getSearchProduct = async (keyword: string | null) => {
  const resultSearch = products.data.filter((product: any) => {
    return product.name.includes(keyword);
  });
  return await { status: 200, data: resultSearch };
};
