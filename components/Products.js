import React from "react";
import { coffees } from "./Data";
import Product from "./Product";

const Products = () => {
  return (
    <div className="grid grid-cols-6 gap-5">
      {coffees.map((item) => (
        <Product key={item.id} name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default Products;
