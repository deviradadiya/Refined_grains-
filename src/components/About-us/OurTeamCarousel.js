import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Team1Image from "../../assets/images/team-1.png";

const OurTeamCarousel = () => {

  return (
      <>
          <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={18}
              slidesPerView={5} // Show 3 slides at a time
              navigation
              pagination={{ clickable: true }}
              loop={true}
              breakpoints={{
                  320: {
                      slidesPerView: 1.5,
                  },
                  676: {
                      slidesPerView: 2,
                  },
                  776: {
                      slidesPerView: 3,
                  },
                  1200: {
                      slidesPerView: 4,
                  },
              }}
          >
              <SwiperSlide>
                  <div className="team-box">
                      <div className="img-wrapper">
                          <img src={Team1Image} alt="team Image 1"/>
                      </div>

                      <div className="content">
                          <h5 className={'fs_24 lh-1 fw_600 mb_10 text-color'}>Shannon</h5>
                          <p className={'fs_16 lh-1 fw_400 mb_10 text-color'}>Senior Stylist</p>
                      </div>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                  <div className="team-box">
                      <div className="img-wrapper">
                          <img src={Team1Image} alt="team Image 1"/>
                      </div>

                      <div className="content">
                          <h5 className={'fs_24 lh-1 fw_600 mb_10 text-color'}>Shannon</h5>
                          <p className={'fs_16 lh-1 fw_400 mb_10 text-color'}>Senior Stylist</p>
                      </div>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                  <div className="team-box">
                      <div className="img-wrapper">
                          <img src={Team1Image} alt="team Image 1"/>
                      </div>

                      <div className="content">
                          <h5 className={'fs_24 lh-1 fw_600 mb_10 text-color'}>Shannon</h5>
                          <p className={'fs_16 lh-1 fw_400 mb_10 text-color'}>Senior Stylist</p>
                      </div>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                  <div className="team-box">
                      <div className="img-wrapper">
                          <img src={Team1Image} alt="team Image 1"/>
                      </div>

                      <div className="content">
                          <h5 className={'fs_24 lh-1 fw_600 mb_10 text-color'}>Shannon</h5>
                          <p className={'fs_16 lh-1 fw_400 mb_10 text-color'}>Senior Stylist</p>
                      </div>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                  <div className="team-box">
                      <div className="img-wrapper">
                          <img src={Team1Image} alt="team Image 1"/>
                      </div>

                      <div className="content">
                          <h5 className={'fs_24 lh-1 fw_600 mb_10 text-color'}>Shannon</h5>
                          <p className={'fs_16 lh-1 fw_400 mb_10 text-color'}>Senior Stylist</p>
                      </div>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                  <div className="team-box">
                      <div className="img-wrapper">
                          <img src={Team1Image} alt="team Image 1"/>
                      </div>

                      <div className="content">
                          <h5 className={'fs_24 lh-1 fw_600 mb_10 text-color'}>Shannon</h5>
                          <p className={'fs_16 lh-1 fw_400 mb_10 text-color'}>Senior Stylist</p>
                      </div>
                  </div>
              </SwiperSlide>
          </Swiper>
      </>
  );
};
export default OurTeamCarousel;
