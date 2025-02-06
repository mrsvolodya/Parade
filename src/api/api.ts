import axios from "axios";
import { ProductType } from "../types/ProductType";
import { ApiResponse } from "../types/ApiResponse";
import { PaginationType } from "../types/PaginationType";

const API_URL = "https://mammoth-testing-api.webinone.com/items";

export const fetchProducts = async (query = "", limit = 10, page = 1) => {
  try {
    const response = await axios.get<ApiResponse>(API_URL, {
      params: {
        query,
        limit,
        page,
        prop_ModuleId: 2053,
      },
    });

    const itemsArray = Array.isArray(response.data.Items)
      ? response.data.Items
      : [];

    const items: ProductType[] = itemsArray.map((item) => ({
      id: item.Id,
      image: item.Image,
      name: item.Name,
      category: item.Category || "Uncategorized",
      productPrice: item.ProductPrice || 0,
      country: item.Country || ["Unknown"],
      status: item.Status || "Unknown",
    }));

    const pagination: PaginationType = {
      currentPage: response.data.Pagination.CurrentPage || 1,
      itemsPerPage: response.data.Pagination.ItemsPerPage || 10,
      numberOfPages: response.data.Pagination.NumberOfPages || 1,
      totalItemsCount: response.data.Pagination.TotalItemsCount || 0,
    };

    return { items, pagination };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      items: [],
      pagination: {
        currentPage: 1,
        itemsPerPage: 10,
        numberOfPages: 1,
        totalItemsCount: 0,
      },
    };
  }
};
