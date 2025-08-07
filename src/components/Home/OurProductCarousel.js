import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import ProductImage from "../../assets/images/our-product.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
              <SwiperSlide>
                  <div className={'product-box'}>
                      <div className="img-wrapper mb_22">
                          <img className={'img-fluid'} src={ProductImage} alt="Our Product"/>
                      </div>
                      <div className="content text-center">
                          <h5 className={'fs_20 fw_500 text-color mb_8 '}>₹ 15.00</h5>
                          <p className={'fs_16 fw_400 text-color mb_32'}>Durum wheat (Triticum durum)</p>

                          <button className={'button btn-border'}> Customise </button>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className={'product-box'}>
                      <div className="img-wrapper mb_22">
                          <img className={'img-fluid'} src={ProductImage} alt="Our Product"/>
                      </div>
                      <div className="content text-center">
                          <h5 className={'fs_20 fw_500 text-color mb_8 '}>₹ 15.00</h5>
                          <p className={'fs_16 fw_400 text-color mb_32'}>Durum wheat (Triticum durum)</p>

                          <button className={'button btn-border'}> Customise </button>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className={'product-box'}>
                      <div className="img-wrapper mb_22">
                          <img className={'img-fluid'} src={ProductImage} alt="Our Product"/>
                      </div>
                      <div className="content text-center">
                          <h5 className={'fs_20 fw_500 text-color mb_8 '}>₹ 15.00</h5>
                          <p className={'fs_16 fw_400 text-color mb_32'}>Durum wheat (Triticum durum)</p>

                          <button className={'button btn-border'}> Customise </button>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className={'product-box'}>
                      <div className="img-wrapper mb_22">
                          <img className={'img-fluid'} src={ProductImage} alt="Our Product"/>
                      </div>
                      <div className="content text-center">
                          <h5 className={'fs_20 fw_500 text-color mb_8 '}>₹ 15.00</h5>
                          <p className={'fs_16 fw_400 text-color mb_32'}>Durum wheat (Triticum durum)</p>

                          <button className={'button btn-border'}> Customise </button>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className={'product-box'}>
                      <div className="img-wrapper mb_22">
                          <img className={'img-fluid'} src={ProductImage} alt="Our Product"/>
                      </div>
                      <div className="content text-center">
                          <h5 className={'fs_20 fw_500 text-color mb_8 '}>₹ 15.00</h5>
                          <p className={'fs_16 fw_400 text-color mb_32'}>Durum wheat (Triticum durum)</p>

                          <button className={'button btn-border'}> Customise </button>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className={'product-box'}>
                      <div className="img-wrapper mb_22">
                          <img className={'img-fluid'} src={ProductImage} alt="Our Product"/>
                      </div>
                      <div className="content text-center">
                          <h5 className={'fs_20 fw_500 text-color mb_8 '}>₹ 15.00</h5>
                          <p className={'fs_16 fw_400 text-color mb_32'}>Durum wheat (Triticum durum)</p>

                          <button className={'button btn-border'}> Customise </button>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className={'product-box'}>
                      <div className="img-wrapper mb_22">
                          <img className={'img-fluid'} src={ProductImage} alt="Our Product"/>
                      </div>
                      <div className="content text-center">
                          <h5 className={'fs_20 fw_500 text-color mb_8 '}>₹ 15.00</h5>
                          <p className={'fs_16 fw_400 text-color mb_32'}>Durum wheat (Triticum durum)</p>

                          <button className={'button btn-border'}> Customise </button>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className={'product-box'}>
                      <div className="img-wrapper mb_22">
                          <img className={'img-fluid'} src={ProductImage} alt="Our Product"/>
                      </div>
                      <div className="content text-center">
                          <h5 className={'fs_20 fw_500 text-color mb_8 '}>₹ 15.00</h5>
                          <p className={'fs_16 fw_400 text-color mb_32'}>Durum wheat (Triticum durum)</p>

                          <button className={'button btn-border'}> Customise </button>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className={'product-box'}>
                      <div className="img-wrapper mb_22">
                          <img className={'img-fluid'} src={ProductImage} alt="Our Product"/>
                      </div>
                      <div className="content text-center">
                          <h5 className={'fs_20 fw_500 text-color mb_8 '}>₹ 15.00</h5>
                          <p className={'fs_16 fw_400 text-color mb_32'}>Durum wheat (Triticum durum)</p>

                          <button className={'button btn-border'}> Customise </button>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className={'product-box'}>
                      <div className="img-wrapper mb_22">
                          <img className={'img-fluid'} src={ProductImage} alt="Our Product"/>
                      </div>
                      <div className="content text-center">
                          <h5 className={'fs_20 fw_500 text-color mb_8 '}>₹ 15.00</h5>
                          <p className={'fs_16 fw_400 text-color mb_32'}>Durum wheat (Triticum durum)</p>

                          <button className={'button btn-border'}> Customise </button>
                      </div>
                  </div>
              </SwiperSlide>
          </Swiper>
      </>
  );
};

const slideStyle = {
    background: '#ddd',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
};

export default OurProductCarousel;
