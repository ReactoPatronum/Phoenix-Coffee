import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import logo from "../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
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
        <h3>MENÜ</h3>
        <h3>KAMPANYALAR</h3>
        <h3>HAKKIMIZDA</h3>
      </div>
      <div className="cursor-pointer hidden lg:flex items-center space-x-4 ">
        <AiFillShopping className="text-2xl" />
        <p className="text-2xl">I</p>
        <h3>Giriş Yap / Kaydol</h3>
      </div>
      <div className="lg:hidden border p-1">
        <HiBars3 />
      </div>
    </div>
  );
};

export default Header;
