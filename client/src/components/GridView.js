import React from "react";
import Product from "./Product"

const GridView = ({ products }) => {
  return (
    <>
      <div className="section mt-4">
        <div className="grid grid-three-column">
          {products.map((curElem, ) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default GridView;
