import React from "react";

const DetailsItem = ({ name, value }) => {
  return (
    <div className="flex justify-around w-2/3 ml-auto mr-auto  pt-2 border-t-2 border-gray-900">
      <p>{name}</p>
      <p className="text-black font-bold">{value}</p>
    </div>
  );
};

export default DetailsItem;
