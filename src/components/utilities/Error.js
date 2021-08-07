import React from "react";

const Error = ({ error, visible }) => {
  if (!error || !visible) {
    return null;
  }
  return (
    <>
      <p className="text-red-400 float-right right-0 ">{error}</p>
    </>
  );
};

export default Error;
