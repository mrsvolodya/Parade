import { createContext } from "react";
import { ContextType } from "../types/ContextType";
import { DEFAULT_PAGINATION } from "../constants/DEFAULT_PAGINATION";

export const ProductContext = createContext<ContextType>({
  page: 0,
  limit: 10,
  products: [],
  pagination: DEFAULT_PAGINATION,
  setPage: () => [],
  setLimit: () => [],
});
