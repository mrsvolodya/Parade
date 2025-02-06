import { Dispatch, SetStateAction } from "react";
import { PaginationType } from "./PaginationType";
import { ProductType } from "./ProductType";

export type ContextType = {
  currentPage: number;
  itemsPerPage: number;
  products: ProductType[];
  pagination: PaginationType;
  setItemsPerPage: Dispatch<SetStateAction<number>>;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};
