import React, { useEffect, useState } from "react";
import { AiFillShopping } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import logo from "../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Modal from "react-modal";

const Header = () => {
  const { cart } = useCart();
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(0);
    cart.map((item) => {
      setTotal((current) => current + item.price);
    });
  }, [cart]);

  return (
    <div className="px-6 py-3 flex items-center justify-between text-white border-b border-b-gray-600">
      <div
        onClick={() => router.push("/")}
        className="flex items-center space-x-3 cursor-pointer"
      >
        <Image alt="logo" src={logo} />
        <h3 className="font-semibold text-3xl hidden md:flex">PHOENİX</h3>
      </div>
      <div className="cursor-pointer hidden lg:flex items-center space-x-4 font-semibold text-sm">
        <Link href="#menu">
          <h3>MENÜ</h3>
        </Link>
        <Link href="#kampanyalar">
          <h3>KAMPANYALAR</h3>
        </Link>
        <Link href="#hakkımızda">
          <h3>HAKKIMIZDA</h3>
        </Link>
      </div>
      <div className="cursor-pointer hidden lg:flex items-center space-x-4 ">
        <div
          onClick={() => setOpenModal(true)}
          className="relative hover:scale-110 transition-all duration-200"
        >
          <AiFillShopping className="text-2xl" />
          <div className="absolute top-[2px] font-semibold right-[8px] text-black">
            {cart.length}
          </div>
        </div>
        <p className="text-2xl">I</p>
        <h3>Giriş Yap / Kaydol</h3>
      </div>
      <div className="lg:hidden border p-1">
        <HiBars3 />
      </div>
      <Modal
        isOpen={openModal}
        ariaHideApp={false}
        onRequestClose={() => setOpenModal(false)}
        className="z-50 p-5 min-h-40 max-w-lg w-[90%] absolute top-44 left-[50%] translate-x-[-50%] bg-white border-2 rounded-xl shadow-md"
      >
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold underline">SEPETİM</h3>
          {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <div
                  className="flex items-center justify-between w-full px-10 mt-5"
                  key={item.id}
                >
                  <p> {item.name}</p>
                  <p> {item.price}₺</p>
                </div>
              );
            })
          ) : (
            <div>
              <h3 className="text-2xl mt-5">Sepetiniz Boş</h3>
            </div>
          )}
        </div>
        <div className="px-10 mt-5">
          <h3 className="font-semibold text-xl">
            TOPLAM:<span className="pl-4">{total}</span>₺
          </h3>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
