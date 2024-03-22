import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import DashboardWrapper from "../../components/DashboardWrapper/DashboardWrapper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./SingleProductPage.scss";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <DashboardWrapper>
        <div className="single_product-page">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
          </Swiper>
          <div className="product__details">
            <h5 className="product__title">Voyager Explorer Cart</h5>
            <p className="product__price">Price: $200</p>
            <p className="product__stock">Stock: 30</p>
            <p className="product__condition">Condition: New</p>
            <p className="product__added-date">Added On: 10/20/2024</p>
            <div className="product__description">
              <h4 className="product__description-title">Description:</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id repellat eius odit atque delectus hic tempore! Molestias iure quo explicabo delectus omnis, nulla ea, ducimus accusamus iste, maxime ipsam pariatur.</p>
            </div>
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
}
