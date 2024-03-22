import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import DashboardWrapper from "../../components/DashboardWrapper/DashboardWrapper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./SingleProductPage.scss";

// import required modules
import { Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
import axios_instance from "../../services/api";
import { ProductTypes } from "../../components/ProductCard/ProductCard.types";
import moment from "moment";

export default function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductTypes>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const { data } = await axios_instance.get(`/product/${id}`);
      setLoading(false);
      setProduct(data.product);
    } catch (error) {
      setLoading(false);
    }
  };


  return (
    <>
      <DashboardWrapper>
        <div className="single_product-page">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
          </Swiper>
          <div className="product__details">
            <h5 className="product__title">{product?.name}</h5>
            <p className="product__price">Price: ${product?.price}</p>
            <p className="product__stock">Stock: {product?.stock}</p>
            <p className="product__condition">
              Condition: {product?.condition.toUpperCase()}
            </p>
            <p className="product__added-date">Added On: {moment(product?.createdAt).format("MM-DD-YYYY")}</p>
            <div className="product__description">
              <h4 className="product__description-title">Description:</h4>
              <p>
                {product?.description}
              </p>
            </div>
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
}
