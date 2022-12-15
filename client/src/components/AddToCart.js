import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CartAmountToggle from "./CartAmountToggle";

const AddToCart = ({ product }) => {

  const { id, colors, stock } = product;
  const [color,setColor] = useState(colors[0])
  const [amount,setAmount] = useState(1)

  const setDecrease = ()=>{
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }
  const setIncrease = ()=>{
amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }

  return (
    <>
      <div className="colors">
        <p>
          Colors :
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={()=>{setColor(curColor)}}
              >
                {color === curColor ? <FaCheck/> : null}
              </button>
            );
          })}
        </p>
      </div>

      <CartAmountToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease}/>

      <NavLink to="/cart">
        <button className="btn2">ADD TO CART</button>
      </NavLink>
    </>
  );
};

export default AddToCart;
