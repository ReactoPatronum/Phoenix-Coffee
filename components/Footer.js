import React from "react";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import Dots from "./Dots";

const Footer = ({ PG, setPageNumber }) => {
  return (
    <div className=" text-white absolute bottom-8 flex items-center justify-between w-full px-10">
      <div className="md:hidden"></div>
      <div className="md:flex space-x-4 hidden">
        <div className="flex items-center space-x-2">
          <CiFacebook className="text-3xl" />
          <p>PhoneixCoffee</p>
        </div>
        <div className="flex items-center space-x-2">
          <BsInstagram className="text-2xl" />
          <p>PhoneixCoffee</p>
        </div>
      </div>
      <div className="flex space-x-2">
        {Array(4)
          .fill()
          .map((_, i) => (
            <Dots key={i} setPageNumber={setPageNumber} number={PG} color={i} />
          ))}
      </div>
    </div>
  );
};

export default Footer;
