import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = ({ pagination, filtered }) => {
  const [saved, setSaved] = useState([]);
 
  useEffect(() => {
    setSaved(JSON.parse(localStorage.getItem("items")) || []);
  }, []);

  useEffect(() => {
    if (saved?.length > 0) {
      localStorage.setItem("items", JSON.stringify(saved));
    }
  }, [saved]);

  function SaveStorage(name) {
    if (!saved?.includes(name)) {
      setSaved((prev) => [...prev, name]);
    } else {
      setSaved(saved.filter((item) => item !== name));
    }
  }
  return (
    <div className="grid grid-cols-6 gap-5">
      {filtered.slice(pagination[0], pagination[1]).map((item) => (
        <Product
          item={item}
          key={item.id}
          SaveStorage={SaveStorage}
          saved={saved}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Products;
