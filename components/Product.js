import Image from "next/image";
import React from "react";
import photo from "../public/Image.png";
import { AiOutlineHeart } from "react-icons/ai";

const Product = ({ name, price }) => {
  return (
    <div className="relative col-span-6 sm:col-span-3 md:col-span-2 shadow-xl p-4">
      <Image alt="coffee" className="w-full   object-cover" src={photo} />
      <h3 className="py-2">{name}</h3>
      <div className=" flex items-center justify-between ">
        <p className="font-semibold text-lg">{price}₺</p>
        <button className="rounded-md bg-[#602e0b] px-5 py-1 text-white">
          SEPETE EKLE
        </button>
      </div>
      <div className="cursor-pointer absolute top-6 right-6 w-7 h-7 flex items-center justify-center bg-white p-1 rounded-full ">
        <AiOutlineHeart className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Product;
