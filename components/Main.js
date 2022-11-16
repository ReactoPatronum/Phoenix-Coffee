import React from "react";
import { useRouter } from "next/router";

const Main = ({ number }) => {
  const router = useRouter();
  return (
    <div className="space-y-10 p-10">
      <div className="text-4xl hidden  text-white md:flex items-center  justify-between">
        <div></div>
        <div className="flex items-center space-x-5">
          <h3 className="text-8xl font-semibold">0{number}</h3>
          <p>/</p>
          <h3 className="text-gray-300 text-5xl font-semibold">04</h3>
        </div>
      </div>
      <div className="max-w-4xl text-white h-full top-20 space-y-4 md:p-14">
        <h1 className="text-3xl font-bold">SICAK EXPRESSONUZ BİZDEN!</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
          egestas eros. Donec ornare venenatis odio. Aliquam porta venenatis
          dolor sit amet euismod. Nulla facilisi. Vestibulum at enim leo. Proin
          condimentum, quam quis feugiat suscipit, turpis orci sollicitudin
          ipsum, id suscipit nulla leo euismod nulla. Integer in euismod justo,
          non congue nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.. Vestibulum at enim leo. Proin condimentum, quam quis feugiat
          suscipit, turpis orci sollicitudin ipsum, id suscipit nulla leo
          euismod nulla. Integer in euismod justo, non congue nunc. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </h3>
        <button
          onClick={() => router.push("/order")}
          className="hover:bg-red-500 transition-all duration-200 px-24 py-4 border rounded-full font-semibold"
        >
          Sipariş Ver{" "}
        </button>
      </div>
    </div>
  );
};

export default Main;
