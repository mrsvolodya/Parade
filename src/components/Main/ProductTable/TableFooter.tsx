import Pagination from "../Pagination/Pagination";

const TableFooter = () => {
  return (
    <tfoot className="bg-white border-t border-border-color">
      <tr className="text-second-text ">
        <td colSpan={7} className="h-[60px] mr-[30px]">
          <Pagination />
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
