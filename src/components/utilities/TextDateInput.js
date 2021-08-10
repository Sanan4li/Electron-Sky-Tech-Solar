import React from "react";

const TextDateInput = ({
  type,
  value,
  title,
  placeholder,
  onFocus,
  onChange,
  name,
  className = null,
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={`py-2 px-2 ml-2  w-1/3 bg-gray-50  rounded-sm text-gray-900 focus:outline-none focus:bg-gray-50 ${className}`}
        title={title}
        onFocus={onFocus}
        onChange={(e) => {
          onChange(e, name);
        }}
      />
    </>
  );
};

export default TextDateInput;
