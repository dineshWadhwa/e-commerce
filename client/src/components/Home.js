import React from "react";
import FeatureProduct from "./FeatureProduct";

const Home = () => {
  return (
    <>
      <div class="container text-center my-5">
        <div class="row">
          <div class="col ">
            <img
              src="/images/banners/banner-2.jpg"
              alt="error"
              width={"100%"}
            />
            <img
            className="mt-4"
              src="/images/banners/banner-5.jpg"
              alt="error"
              width={"100%"}
            />
            
          </div>
          <div class="col-6 ">


          <div className="container  d-flex">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/images/banners/banner-3.jpg" alt='imgg' class="d-block w-100" width={'400px'} />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/banners/banner-4.jpg" alt='imgg' class="d-block w-100" width={'400px'} />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
          </div>
          <div class="col ">
            <img
              src="/images/banners/banner-2.jpg"
              alt="error"
              width={"100%"}
            />
            <img
            className="mt-4"
              src="/images/banners/banner-6.jpg"
              alt="error"
              width={"100%"}
            />
          </div>
        </div>
      </div>
<div className="row">
    <FeatureProduct />
</div>
    </>
  );
};

export default Home;
