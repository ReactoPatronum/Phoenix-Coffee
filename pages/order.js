import React, { useState } from "react";
import Header from "../components/Header";
import { MdFilterAlt } from "react-icons/md";
import LeftBar from "../components/LeftBar";
import Products from "../components/Products";
import { BsChevronLeft } from "react-icons/bs";
import PageNums from "../components/PageNums";
import { useCart } from "../context/CartContext";
import { coffees } from "../components/Data";

const Order = () => {
  const [pagination, setPagination] = useState([0, 6]);
  const [input, setInput] = useState("");
  const { darkMode } = useCart();
  const filtered = coffees.filter((item) =>
  item.name.toLowerCase().includes(input.toLowerCase())
);
  return (
    <div
      className={`${
        darkMode
          ? "bg-white text-black transition-all duration-300"
          : "bg-[#121212] text-white transition-all duration-300"
      } `}
    >
      <div className="bg-[#602e0b] ">
        <Header />
      </div>
      <div className="max-w-[1400px] mx-auto relative min-h-screen">
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
            <div className="flex-1 lg:flex hidden items-center justify-center mx-10">
              <input
                onChange={(e) => setInput(e.target.value)}
                className={`border h-12 rounded-lg p-3 border-gray-400 flex-1 focus-within:bg-orange-100 ${darkMode?"bg-white":"bg-gray-300"}`}
                placeholder="Kahve Ara..."
                type="text"
              />
            </div>
            <div
              className={`hidden sm:flex border  border-gray-700 max-w-fit rounded-lg px-5 py-3 ${
                darkMode ? "bg-white" : "bg-gray-500 text-gray-800"
              }`}
            >
              <select className={`${darkMode ? "bg-white" : "bg-gray-500"}`}>
                <option className="">Varsayılan Sıralama</option>
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
        <div className="grid grid-cols-12 px-1">
          <div className="hidden lg:flex lg:col-span-3 xl:col-span-3 ">
            <LeftBar darkMode={darkMode} />
          </div>
          <div className="col-span-12 lg:col-span-9 ">
            <Products filtered={filtered} pagination={pagination} />
            <div className="flex items-center justify-center ">
              <PageNums filtered={filtered} setPagination={setPagination} pagination={pagination} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
