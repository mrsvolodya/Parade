import TableHead from "./TableHead";

const ProductTable = () => {
  return (
    <div className="bg-white mt-[30px]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border-1 border-border-color ">
          <TableHead />

          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
