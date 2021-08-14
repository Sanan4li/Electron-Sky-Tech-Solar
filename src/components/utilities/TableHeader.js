import React from "react";

const TableHeader = ({ data }) => {
  return (
    <thead className="text-left">
      <tr className="bg-gray-800 font-extrabold text-gray-100 font-sans">
        {data.map((item, index) => {
          return (
            <th key={`header_${index}`} className="p-2">
              {item}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
