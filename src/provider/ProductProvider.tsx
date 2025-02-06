/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductProviderProps } from "../types/ProductProviderProps";
import { fetchProducts } from "../api/api";
import { ProductType } from "../types/ProductType";
import { PaginationType } from "../types/PaginationType";
import { DEFAULT_PAGINATION } from "../constants/DEFAULT_PAGINATION";

const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [pagination, setPagination] =
    useState<PaginationType>(DEFAULT_PAGINATION);

  useEffect(() => {
    const loadProducts = async () => {
      const { items, pagination } = await fetchProducts(
        searchQuery,
        itemsPerPage,
        currentPage
      );
      setProducts(items);
      setPagination(pagination);
    };

    loadProducts();
  }, [itemsPerPage, currentPage, searchQuery]);

  const values = useMemo(
    () => ({
      currentPage,
      itemsPerPage,
      products,
      pagination,
      setItemsPerPage,
      setSearchQuery,
      setCurrentPage,
    }),
    [currentPage, pagination, itemsPerPage, setSearchQuery]
  );

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
