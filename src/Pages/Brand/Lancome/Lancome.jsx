// import React from 'react';
import { useLoaderData } from "react-router-dom";
import LancomeAll from "./LancomeAll";

const Lancome = () => {
  const data = useLoaderData([]);
  // console.log(data);
  const filerDior = data.filter((dior) => {
    return dior.brand_name === "Lancome";
  });
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {filerDior.map((item) => (
          <LancomeAll key={item._id} item={item}></LancomeAll>
        ))}
      </div>
    </div>
  );
};

export default Lancome;
