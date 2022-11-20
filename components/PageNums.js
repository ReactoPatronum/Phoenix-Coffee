import React from "react";
import { BsChevronLeft } from "react-icons/bs";

const PageNums = ({ pagination, setPagination, filtered }) => {
  return (
    <div className="my-5 space-x-20  bg-[#552b0d] p-2 rounded-md flex items-center justify-between max-w-sm text-white">
      <BsChevronLeft />
      <div className="flex space-x-6">
        {Array(Math.ceil(filtered?.length / 6))
          .fill()
          .map((_, i) => {
            return (
              <button
                key={i}
                className={`cursor-pointer ${
                  pagination[1] == 6 * (i + 1) &&
                  "text-[#602e0b] bg-white w-5 rounded-md flex items-center justify-center font-semibold'"
                }`}
                onClick={() => setPagination([6 * i, 6 * (i + 1)])}
              >
                {i + 1}
              </button>
            );
          })}
      </div>
      <BsChevronLeft className="rotate-180" />
    </div>
  );
};

export default PageNums;
