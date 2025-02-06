import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";
import TableRow from "./TableRow";

const TableBody = () => {
  const { products } = useContext(ProductContext);

  return (
    <tbody>
      {products?.map((product) => (
        <TableRow key={product.Id} product={product} />
      ))}
    </tbody>
  );
};

export default TableBody;
