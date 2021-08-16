import React from "react";
const Select = ({ name, label, value, placeholder, options, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select {...rest} value={value}>
        {!value && <option value="">{placeholder}</option>}
        {options.map((option, index) => {
          const { label, value } = option;
          return (
            <option key={`option_${index}`} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Select;
