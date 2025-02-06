import { useContext } from "react";
import LeftIcon from "../../../assets/icons/arrow-left-pag-icon.svg";
import RightIcon from "../../../assets/icons/arrow-right-pag-icon2.svg";
import { ProductContext } from "../../../context/ProductContext";

const PaginationControls = () => {
  const { pagination, setCurrentPage } = useContext(ProductContext);

  const prevPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage > 1) {
        return prevPage - 1;
      }

      return prevPage;
    });
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => {
      if (pagination.numberOfPages > prevPage) {
        return prevPage + 1;
      }

      return prevPage;
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className="w-10 h-10  rounded bg-bg-button hover:bg-gray-400 disabled:opacity-50 cursor-pointer flex items-center justify-center"
        onClick={prevPage}
      >
        <img src={LeftIcon} alt="Left arrow" />
      </button>
      <span className="text-second-text border border-border-color rounded bg-white-100 w-20 h-10 flex items-center justify-center">
        {pagination.currentPage}
      </span>
      <button
        className="w-10 h-10  rounded  bg-bg-button hover:bg-gray-400 mr-[30px] cursor-pointer flex items-center justify-center"
        onClick={nextPage}
      >
        <img src={RightIcon} alt="Right arrow" />
      </button>
    </div>
  );
};

export default PaginationControls;
