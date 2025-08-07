import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import ProductImage from "../../assets/images/our-product.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import OurProduct from "./OurProduct";

const OurProductCarousel = () => {

  return (
      <>
          <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={30}
              slidesPerView={5} // Show 3 slides at a time
              navigation
              pagination={{ clickable: true }}
              loop={true}
              breakpoints={{
                  320: {
                      slidesPerView: 1,
                  },
                  640: {
                      slidesPerView: 2,
                  },
                  1024: {
                      slidesPerView: 5,
                  },
              }}
          >
              <SwiperSlide> <OurProduct /> </SwiperSlide>
              <SwiperSlide> <OurProduct /> </SwiperSlide>
              <SwiperSlide> <OurProduct /> </SwiperSlide>
              <SwiperSlide> <OurProduct /> </SwiperSlide>
              <SwiperSlide> <OurProduct /> </SwiperSlide>
              <SwiperSlide> <OurProduct /> </SwiperSlide>
              <SwiperSlide> <OurProduct /> </SwiperSlide>
              <SwiperSlide> <OurProduct /> </SwiperSlide>
              <SwiperSlide> <OurProduct /> </SwiperSlide>
          </Swiper>
      </>
  );
};
export default OurProductCarousel;
