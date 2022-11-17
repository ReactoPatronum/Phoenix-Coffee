import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Main = ({ number }) => {
  const article = `Aegestas eros. Donec ornare venenatis odio. Aliquam porta venenatis
  dolor sit amet euismod. Nulla facilisi. Vestibulum at enim leo. Proin
  condimentum, quam quis feugiat suscipit, turpis orci sollicitudin
  ipsum, id suscipit nulla leo euismod nulla. Integer in euismod justo,
  non congue nunc. Lorems ipsum dolor sit amet, consectetur adipiscing
  elit.. Vestibulum at enim leo. Proin condimentum, quam quis feugiat
  suscipit, turpis orci sollicitudin ipsum, id suscipit nulla leo
  euismod nulla. Integer in euismod justo, non congue nunc. Lorem ipsum
  dolor sit amet, consectetur adipiscing elit.`;

  const textData = [
    { text: article, title: "SICAK EXPRESSONUZ BİZDEN!" },
    {
      text: article.split("").reverse().join(""),
      title: "CHOCOLATE MOCHANIZ BİZDEN!",
    },
    { text: article, title: "ICE FRAPPENİZ BİZDEN!" },
    {
      text: article.split("").reverse().join(""),
      title: "KARAMEL MOCHANIZ BİZDEN!",
    },
  ];
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
      <div className="max-w-4xl text-white h-full md:p-4 xl:p-16">
        {textData.map((slider, i) => (
          <motion.div
            layout
            key={i}
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition= {{ delay: 0.1, duration: 0.2, ease: "easeOut" }}
            className={`${
              number - 1 == i ? "opacity-100" : " hidden"
            } space-y-4 `}
          >
            <h1 className="text-2xl lg:text-3xl font-bold">{slider.title}</h1>
            <h3 className="text-sm sm:text-base">{slider.text}</h3>
            <button
              onClick={() => router.push("/order")}
              className="hover:bg-red-500 transition-all duration-200 px-16 py-3 md:px-24 md:py-4 border rounded-full font-semibold"
            >
              Sipariş Ver{" "}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Main;
