import { createContext } from "react";
import { ContextType } from "../types/ContextType";
import { DEFAULT_PAGINATION } from "../constants/DEFAULT_PAGINATION";

export const ProductContext = createContext<ContextType>({
  itemsPerPage: 10,
  currentPage: 0,
  products: [],
  pagination: DEFAULT_PAGINATION,
  setCurrentPage: () => [],
  setItemsPerPage: () => [],
  setSearchQuery: () => [],
});
