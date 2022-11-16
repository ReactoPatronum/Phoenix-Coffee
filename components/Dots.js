import React from "react";

const Dots = ({ color, number, setPageNumber }) => {
  return (
    <div
      onClick={() => setPageNumber(color + 1)}
      className={`cursor-pointer rounded-full h-5 w-5 border ${
        color + 1 == number && "bg-white"
      }`}
    ></div>
  );
};

export default Dots;
