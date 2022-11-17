import Image from "next/image";
import React, { useEffect, useState } from "react";
import photo from "../public/Image.png";
import { AiFillHeart } from "react-icons/ai";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

const Product = ({ saved, name, price, SaveStorage, item }) => {
  const { cart, setCart } = useCart();
  const [itemName, setItemName] = useState([]);

  useEffect(() => {
    setItemName([]);
    if (cart?.length > 0) {
      cart?.map((item) => {
        setItemName((current) => [...current, item.name]);
      });
    }
  }, [cart]);

  function AddCart(item) {
    if (!cart?.includes(item)) {
      toast.success(`${item.name} adlı ürün sepetinize eklendi!`);
      setCart((prev) => [...prev, item]);
    } else {
      toast.success(`${item.name} adlı ürün sepetinizden çıkarıldı!`);
      setCart(cart.filter((param) => param !== item));
    }
  }

  return (
    <div className="relative col-span-6 sm:col-span-3 md:col-span-2 shadow-xl p-4">
      <Image alt="coffee" className="w-full   object-cover" src={photo} />
      <h3 className="py-2">{name}</h3>
      <div className=" flex items-center justify-between ">
        <p className="font-semibold text-lg">{price}₺</p>
        <button
          onClick={() => AddCart(item)}
          className="rounded-md bg-[#602e0b] px-5 py-1 text-white"
        >
          {itemName.indexOf(name) == -1 ? " SEPETE EKLE" : "ÇIKAR"}
        </button>
      </div>
      <div
        onClick={() => SaveStorage(name)}
        className="cursor-pointer absolute top-6 right-6 w-7 h-7 flex items-center justify-center bg-white p-1 rounded-full "
      >
        <AiFillHeart
          className={` ${
            saved?.includes(name) ? "text-red-500" : "text-gray-500"
          } w-5 h-5`}
        />
      </div>
    </div>
  );
};

export default Product;
