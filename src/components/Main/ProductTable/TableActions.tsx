import EditIcon from "../../../assets/icons/Edit-icon.svg";
import DeleteIcon from "../../../assets/icons/delete-icon.svg";

const TableActions = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        title="Edit Product"
        className="bg-bg-button w-10 h-10 rounded hover:bg-bg-hover-button transition flex items-center justify-center"
        onClick={() => {}}
      >
        <img src={EditIcon} alt="Edit Icon" className="w-[18px] h-[18px]" />
      </button>
      <button
        title="Delete Product"
        className="bg-bg-button w-10 h-10 rounded hover:bg-bg-hover-button transition flex items-center justify-center"
        onClick={() => {}}
      >
        <img src={DeleteIcon} alt="Delete Icon" className="w-[18px] h-[18px]" />
      </button>
    </div>
  );
};

export default TableActions;
