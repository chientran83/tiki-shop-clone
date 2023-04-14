import { Product } from "../Home/types";

export type ProductInCart = {
  quantity : number
} & Product;

export type Slider = {
  name: string;
  image: string;
};
