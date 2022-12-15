import React, { useState } from "react";

const MyImage = ({ imgs = [{ url : ""}]}) => {
  
  const [mainImage,setMainImage] = useState(imgs[0])
  return (
    <>
      <div className="row">
        <div className="col-4 sidescreen">
          {imgs.map((curElem, index) => {
           return ( <div className="figure">
              <img
                src={curElem.url}
                alt={curElem.filename}
                className="spageimg"
                key={index}
                onClick = {()=>{setMainImage(curElem)}} 
              />
            </div>)
          })}
          
        </div>
        <div className="col main-screen">
         <img src={mainImage.url} alt={mainImage.filename }  className="bpageimg" />
        </div>
      </div>
    </>
  );
};

export default MyImage;
