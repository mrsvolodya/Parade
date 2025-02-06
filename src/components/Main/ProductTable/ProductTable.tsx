import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const ProductTable = () => {
  return (
    <div className="bg-white mt-[30px]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border-1 border-border-color text-left">
          <TableHead />
          <TableBody />
          <TableFooter />
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
