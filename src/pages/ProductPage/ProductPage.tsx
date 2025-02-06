import ProductTable from "../../components/Main/ProductTable/ProductTable";
import SearchBar from "../../components/Main/SearchBar/SearchBar";
import SubmitBtn from "../../components/UIElements/SubmitBtn";

const ProductPage = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-[30px] leading-[30px]">
        Product List
      </h2>
      <p className="text-[15px] leading-[22px] mb-5">
        Review and manage the products available on the marketplace.
      </p>
      <SearchBar />
      <ProductTable />
      <SubmitBtn />
    </>
  );
};

export default ProductPage;
