export type ApiResponse = {
  Items: {
    Id: number;
    Image: string;
    Name: string;
    Category: string;
    ProductPrice: number;
    Country: string[];
    Status: string;
  };
  Pagination: {
    CurrentPage: number;
    ItemsPerPage: number;
    NumberOfPages: number;
    TotalItemsCount: number;
  };
};
