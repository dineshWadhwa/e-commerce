import React from "react";
import { NavLink } from "react-router-dom";
// import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="pcard">
        <div className="figure">
          <img className="cardimg" src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </div>

        <div className="card-data">
          <div className="card-data-flex">
            <h5>{name}</h5>
            <p className="card-data--price">${price}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;