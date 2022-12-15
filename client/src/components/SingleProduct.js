import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AddToCart from "./AddToCart";
import { useProductContext } from "./Context/ProductContext";
import MyImage from "./MyImage"
import Star from "./Star";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { id } = useParams();

  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const {
    name,
    company,
    price,
    description,
    category,
    stock ,
    stars,
    reviews,
    image
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if(isSingleLoading){
    return <div>Loading ......</div>
  }
  return <>
  <div className="container">
<div className="row m-5">
  <div className="col">
    <div className="product_images">
      <MyImage imgs={image}/>
    </div>
  </div>
  <div className="col">
    <div className="product_data">
      <h2>{name}</h2>
      <Star stars={stars} reviews={reviews}/>
      <p>Price : {price}</p>
      <p>{description}</p>
      <p>Available : 
        <b> {stock > 0 ? "In Stock" : "Not Available"}</b>
      </p>
      <p>Brand : <b>{company}</b></p>
      <hr />
      {
        stock > 0 && <AddToCart product={singleProduct}/>
      }
    </div>
  </div>
</div>

  </div>
  </>;
};

export default SingleProduct;
