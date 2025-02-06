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
      Id: item.Id,
      Image: item.Image,
      Name: item.Name,
      Category: item.Category || "Uncategorized",
      ProductPrice: item.ProductPrice || 0,
      Country: item.Country || ["Unknown"],
      Status: item.Status || "Unknown",
    }));

    const pagination: PaginationType = {
      CurrentPage: response.data.Pagination.CurrentPage || 1,
      ItemsPerPage: response.data.Pagination.ItemsPerPage || 10,
      NumberOfPages: response.data.Pagination.NumberOfPages || 1,
      TotalItemsCount: response.data.Pagination.TotalItemsCount || 0,
    };

    return { items, pagination };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      items: [],
      pagination: {
        CurrentPage: 1,
        ItemsPerPage: 10,
        NumberOfPages: 1,
        TotalItemsCount: 0,
      },
    };
  }
};
