import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";
import TableRow from "./TableRow";

const TableBody = () => {
  const { products } = useContext(ProductContext);

  return (
    <tbody>
      {products.length > 0 ? (
        products.map((product) => (
          <TableRow key={product.id} product={product} />
        ))
      ) : (
        <tr>
          <td colSpan={100} className="text-xl text-center font-semibold p-2">
            No data found
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
