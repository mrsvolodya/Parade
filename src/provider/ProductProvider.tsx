import { useEffect, useMemo, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductProviderProps } from "../types/ProductProviderProps";
import { fetchProducts } from "../api/api";
import { ProductType } from "../types/ProductType";
import { PaginationType } from "../types/PaginationType";
import { DEFAULT_PAGINATION } from "../constants/DEFAULT_PAGINATION";

const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [pagination, setPagination] =
    useState<PaginationType>(DEFAULT_PAGINATION);

  useEffect(() => {
    const loadProducts = async () => {
      const { items, pagination } = await fetchProducts("", limit, page);
      setProducts(items);
      setPagination(pagination);
    };

    loadProducts();
  }, [limit, page]);

  const values = useMemo(
    () => ({
      page,
      limit,
      products,
      pagination,
      setLimit,
      setPage,
    }),
    [page, pagination, limit]
  );

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
