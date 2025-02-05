import { PaginationType } from "./PaginationType";
import { ProductType } from "./ProductType";

export type ContextType = {
  page: number;
  limit: number;
  products: ProductType[];
  pagination: PaginationType;
  setPage: (v: number) => void;
  setLimit: (v: number) => void;
};
