import { useContext } from "react";
import PaginationControls from "./PaginationControls";
import { ProductContext } from "../../../context/ProductContext";

const Pagination = () => {
  const { pagination, setItemsPerPage } = useContext(ProductContext);
  const { CurrentPage, ItemsPerPage, TotalItemsCount } = pagination;
  const to = Math.min(CurrentPage * ItemsPerPage, TotalItemsCount);
  const from = to - (ItemsPerPage - 1);

  return (
    <div className="flex items-center justify-end">
      <div className="flex items-center space-x-2">
        <span className="text-second-text font-regular text-[13px] mr-5">
          Items per page:
        </span>
        <select
          className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-400 text-second-text text-[13px] mr-[50px] cursor-pointer"
          onChange={(e) => setItemsPerPage(+e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>

      <div className="mr-5">
        <span className=" text-second-text text-[13px]">
          Showing {from}-{to} of {pagination.TotalItemsCount} items
        </span>
      </div>

      <PaginationControls />
    </div>
  );
};

export default Pagination;
