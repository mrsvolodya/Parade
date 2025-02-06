import { ProductType } from "../../../types/ProductType";
import TableActions from "./TableActions";

type TableRowProps = {
  product: ProductType;
};

const TableRow: React.FC<TableRowProps> = ({ product }) => {
  return (
    <tr className="border-b border-border-color hover:bg-gray-100 font-normal text-[15px] h-[70px] text-center">
      <td className="border border-border-color px-4 py-2 align-middle">
        {product.Image ? (
          <img
            src={product.Image}
            alt={product.Name}
            className="w-[50px] h-[50px] object-cover mx-auto"
          />
        ) : (
          <span className="flex items-center justify-center bg-gray-500 w-[50px] h-[50px] text-white text-sm mx-auto">
            No Image
          </span>
        )}
      </td>
      <td className="border-r border-border-color px-4 py-2 align-middle">
        {product.Name}
      </td>
      <td className="border-r border-border-color px-4 py-2 align-middle">
        {product.Category}
      </td>
      <td className="px-4 py-2 align-middle">
        {product.ProductPrice ? (
          `$${product.ProductPrice.toFixed(2)}`
        ) : (
          <span className="text-gray-500">Not available</span>
        )}
      </td>
      <td className="border border-border-color px-4 py-2 align-middle">
        {Array.isArray(product.Country) && product.Country.length > 0 ? (
          product.Country.join(", ")
        ) : (
          <span className="text-gray-500">No Data</span>
        )}
      </td>
      <td className="border-r border-border-color px-4 py-2 align-middle">
        {product.Status}
      </td>
      <td className="px-4 py-2 align-middle">
        <TableActions />
      </td>
    </tr>
  );
};

export default TableRow;
