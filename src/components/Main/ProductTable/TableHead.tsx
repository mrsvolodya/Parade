import { TABLE_HEADERS } from "../../../constants/TABLE_HEADERS";

const TableHead = () => {
  return (
    <thead className="bg-second-bg text-white sticky top-0 shadow-md">
      <tr className="p-3 border">
        {TABLE_HEADERS.map((colum) => (
          <th
            className={`p-3 border border-border-color font-medium text-[13px] leading-[22px] ${colum.width}`}
            key={colum.name}
          >
            {colum.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
