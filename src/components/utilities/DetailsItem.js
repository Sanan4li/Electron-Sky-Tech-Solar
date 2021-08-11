import React from "react";

const DetailsItem = ({ name, value }) => {
  return (
    <div className="flex justify-around w-2/3  ml-auto mr-auto  pt-2 border-t-2 border-gray-900">
      <div className="w-2/3 ">
        <p className=" text-left w-4/5 ml-auto mr-auto">{name}</p>
      </div>
      <div className="w-2/3 text-black font-bold">
        <p className=" text-left w-3/5 ml-auto mr-auto">{value}</p>
      </div>
    </div>
  );
};

export default DetailsItem;
