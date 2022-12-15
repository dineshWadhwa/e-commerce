import React from "react";
import Product from "./Product"

const GridView = ({ products }) => {
  return (
    <>
      <div className="section">
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
