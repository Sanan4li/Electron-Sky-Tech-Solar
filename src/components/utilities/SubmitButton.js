import React from "react";
import { useFormikContext } from "formik";
const SubmitButton = ({ name, value }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <div className="mt-10 w-1/4 ml-auto mr-auto bg-green-500  text-white flex items-center justify-center">
      <button
        type="submit"
        className="col-span-2 text-center w-full p-2 focus:outline-none "
        name={name}
        onClick={handleSubmit}
      >
        {value}
      </button>
    </div>
  );
};

export default SubmitButton;
