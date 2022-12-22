import React from "react";
import { NavLink } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <>
      {products.map((curElem) => {
        const { id, name, image, price, description } = curElem;
        return (
          <div className="card grid grid-two-column mt-4 p-2">
            <div className="figure">
              <img className="cardimg" src={image} alt={name} />
            </div>

            <div className="card-data mt-4">
              <h4>{name}</h4>
              <p>${price}</p>
              <p>{description.slice(0, 120)}...</p>

              <NavLink to={`/singleproduct/${id}`}>
                <button className="btn btn-outline-dark">Read More</button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListView;
