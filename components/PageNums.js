import React from "react";
import { BsChevronLeft } from "react-icons/bs";

const PageNums = ({ pagination, setPagination }) => {
  return (
    <div className="my-5 space-x-20  bg-[#552b0d] p-2 rounded-md flex items-center justify-between max-w-sm text-white">
      <BsChevronLeft />
      <div className="flex space-x-6">
        <p
          className={`cursor-pointer ${
            pagination[1] == 6 &&
            "text-[#602e0b] bg-white w-5 rounded-md flex items-center justify-center font-semibold'"
          }`}
          onClick={() => setPagination([0, 6])}
        >
          1
        </p>
        <p
          className={`cursor-pointer ${
            pagination[1] == 12 &&
            "text-[#602e0b] bg-white w-5 rounded-md flex items-center justify-center font-semibold'"
          }`}
          onClick={() => setPagination([6, 12])}
        >
          2
        </p>
        <p
          className={`cursor-pointer ${
            pagination[1] == 18 &&
            "text-[#602e0b] bg-white w-5 rounded-md flex items-center justify-center font-semibold'"
          }`}
          onClick={() => setPagination([12, 18])}
        >
          3
        </p>
        <p
          className={`cursor-pointer ${
            pagination[1] == 24 &&
            "text-[#602e0b] bg-white w-5 rounded-md flex items-center justify-center font-semibold'"
          }`}
          onClick={() => setPagination([18, 24])}
        >
          4
        </p>
        <p
          className={`cursor-pointer ${
            pagination[1] == 30 &&
            "text-[#602e0b] bg-white w-5 rounded-md flex items-center justify-center font-semibold'"
          }`}
          onClick={() => setPagination([24, 30])}
        >
          5
        </p>
      </div>
      <BsChevronLeft className="rotate-180" />
    </div>
  );
};

export default PageNums;

{
  /* <p onClick={()=>setPagination([0,6])} className='text-[#602e0b] bg-white w-5 rounded-md flex items-center justify-center font-semibold'>1</p>
               c
               0 6
               6 12
                <p onClick={()=>setPagination([12,18])}>3</p>
                <p onClick={()=>setPagination([18,24])}>4</p>
                <p onClick={()=>setPagination([24,30])}>5</p> */
}
