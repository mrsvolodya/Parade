import { useContext } from "react";
import LeftIcon from "../../../assets/icons/arrow-left-pag-icon.svg";
import RightIcon from "../../../assets/icons/arrow-right-pag-icon2.svg";
import { ProductContext } from "../../../context/ProductContext";
import { getValidPage } from "../../../utils/pagination";

const PaginationControls = () => {
  const { pagination, setCurrentPage, currentPage } =
    useContext(ProductContext);

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => {
      if (pagination.numberOfPages > prevPage) {
        return prevPage + 1;
      }

      return prevPage;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCurrentPage(+value);
    }
  };

  const handlePageChange = () => {
    if (getValidPage(currentPage, pagination.numberOfPages)) {
      setCurrentPage(pagination.currentPage);
      return;
    }
    setCurrentPage(currentPage);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className="w-10 h-10  rounded bg-bg-button hover:bg-gray-400 disabled:opacity-50 cursor-pointer flex items-center justify-center"
        onClick={prevPage}
      >
        <img src={LeftIcon} alt="Left arrow" />
      </button>
      <input
        type="text"
        value={currentPage}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === "Enter" && handlePageChange()}
        onBlur={handlePageChange}
        className="text-second-text border border-border-color rounded bg-white-100 w-20 h-10 text-center"
      />

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
