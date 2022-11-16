import React from "react";
import Header from "../components/Header";
import { MdFilterAlt } from "react-icons/md";
import LeftBar from "../components/LeftBar";
import Products from "../components/Products";
import { BsChevronLeft } from "react-icons/bs";
import PageNums from "../components/PageNums";

const Order = () => {
  return (
    <div className="">
      <div className="bg-[#602e0b]">
        <Header />
      </div>
      <div className="max-w-[1400px] mx-auto">
        <div className="px-10 py-3">
          <div className="flex items-center justify-between">
            <div>
            <p className="font-semibold hidden md:block">
                Anasayfa &gt; Kahve Türleri &gt; Çikolata Bazlı Kahveler
              </p>
              <div className="sm:bg-[#602e0b] mt-3 max-w-[150px] text-[#602e0b] bg-white border-[#602e0b] border  lg:hidden space-x-3 flex items-center sm:text-white py-2 px-6 rounded-md">
                <MdFilterAlt className="w-7 h-7" />
                <p>FİLTRELE</p>
              </div>
              
            </div>
            <div className="hidden sm:flex border border-gray-400 max-w-fit rounded-lg px-5 py-3">
              <select>
                <option>Varsayılan Sıralama</option>
              </select>
            </div>
            <div className="mt-3 sm:hidden flex items-center space-x-2 bg-[#602e0b] text-white  py-2 px-6 rounded-md">
              <div className="">
                <BsChevronLeft className="rotate-90" />
                <BsChevronLeft className="-rotate-90" />
              </div>
              <h3>SIRALA</h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 px-10">
          <div className="hidden lg:flex lg:col-span-3 xl:col-span-3 ">
            <LeftBar />
          </div>
          <div className="col-span-12 lg:col-span-9 ">
            <Products />
            <div className="flex items-center justify-center">
              <PageNums />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
