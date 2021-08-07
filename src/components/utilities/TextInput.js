import React from "react";

const TextInput = ({ name, label, value, ...rest }) => {
  return (
    <div className="w-full flex flex-row mt-5">
      <div className=" w-2/5 py-2 ml-4">
        <label htmlFor={name}>{label}</label>
      </div>
      <div className="w-3/5">
        <input
          type="text"
          className="p-2 rounded-sm w-full text-black focus:outline-none focus:ring-2 focus:ring-gray-600"
          name={name}
          id={name}
          {...rest}
        />
      </div>
    </div>
  );
};

export default TextInput;
