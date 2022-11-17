import React from "react";

const LeftBar = () => {
  return (
    <div className="border py-3 px-5 max-h-[550px]">
      <div>
        <h3 className="border-b-black border-b font-semibold text-xl mb-2">
          Kategoriler
        </h3>
        <div className="space-y-2">
          <h3>Espresso Bazlı İçecekler</h3>
          <h3>Türk Kahvesi</h3>
          <h3>İran Kahvesi</h3>
          <h3>Fitre Kahve</h3>
          <h3 className="ml-2 font-semibold">Çikolata Bazlı Kahveler</h3>
          <h3>Soğuk Kahve</h3>
        </div>
        <div className="space-y-3">
          <h3 className="font-bold mt-3 text-lg">FİYAT ARALIĞI</h3>
          <div className="w-full h-6 border rounded-md relative">
            <div className="absolute bg-[#602e0b] dark:bg-[#602e0b] left-10  h-7 w-7 -top-[2px]  rounded-[3px]"></div>
            <div className="absolute bg-[#753e17] left-[68px]  h-6 w-16"></div>
            <div className="absolute left-32 bg-[#602e0b] dark:bg-[#602e0b] h-7 w-7 -top-[2px] rounded-[3px]"></div>
          </div>
        </div>
        <h3 className="font-semibold  text-right mt-3">75₺-2500₺</h3>

        <div className="mt-3 space-y-5">
          <h3 className="font-bold text-lg">Ürün Arama</h3>
          <input
            className="border p-2 rounded-md border-gray-400"
            placeholder="Placeholder Text.."
          />
          <button className=" flex items-center justify-center w-full dark:bg-[#602e0b] mt-5 p-2 text-white rounded-md">
            FİLTRELE
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
