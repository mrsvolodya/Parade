import { PaginationType } from "./PaginationType";
import { ProductType } from "./ProductType";

export type ApiResponse = {
  Items: ProductType;
  Pagination: PaginationType;
};
