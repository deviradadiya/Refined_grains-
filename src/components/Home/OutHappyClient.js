import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import Team1Image from "../../assets/images/team-1.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OurHappyClient = () => {

  return (
      <>
          <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={30}
              slidesPerView={3} // Show 3 slides at a time
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
                      slidesPerView: 3,
                  },
              }}
          >
              <SwiperSlide>
                  <div className={'our-client-box'}>
                      <div className={'d-flex align-items-center mb_18'}>
                          <div className="img-wrapper">
                              <img className={'img-wrapper'} src={Team1Image} alt="img-fluid"/>
                          </div>
                          <h6 className={'fs_20 fw_700 text-color mb-0'}>Anita R., Mumbai</h6>
                      </div>
                      <p className={'fs_20 fw_400 lh-1-5 mb-0 text-color'}>I love being able to choose my own wheat and add healthy extras like flax seeds and ragi. The flour is always fresh and the rotis taste amazing!</p>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                  <div className={'our-client-box'}>
                      <div className={'d-flex align-items-center mb_18'}>
                          <div className="img-wrapper">
                              <img className={'img-wrapper'} src={Team1Image} alt="img-fluid"/>
                          </div>
                          <h6 className={'fs_20 fw_700 text-color mb-0'}>Rahul S., Bangalore</h6>
                      </div>
                      <p className={'fs_20 fw_400 lh-1-5 mb-0 text-color'}>This service has completely changed how I buy flour. It's fresh, customized, and delivered to my doorstep—what more could I ask for?</p>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                  <div className={'our-client-box'}>
                      <div className={'d-flex align-items-center mb_18'}>
                          <div className="img-wrapper">
                              <img className={'img-wrapper'} src={Team1Image} alt="img-fluid"/>
                          </div>
                          <h6 className={'fs_20 fw_700 text-color mb-0'}>Meera K., Pune</h6>
                      </div>
                      <p className={'fs_20 fw_400 lh-1-5 mb-0 text-color'}>I love being able to choose my own wheat and add healthy extras like flax seeds and ragi. The flour is always fresh and the rotis taste amazing!</p>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                  <div className={'our-client-box'}>
                      <div className={'d-flex align-items-center mb_18'}>
                          <div className="img-wrapper">
                              <img className={'img-wrapper'} src={Team1Image} alt="img-fluid"/>
                          </div>
                          <h6 className={'fs_20 fw_700 text-color mb-0'}>Anita R., Mumbai</h6>
                      </div>
                      <p className={'fs_20 fw_400 lh-1-5 mb-0 text-color'}>I love being able to choose my own wheat and add healthy extras like flax seeds and ragi. The flour is always fresh and the rotis taste amazing!</p>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                  <div className={'our-client-box'}>
                      <div className={'d-flex align-items-center mb_18'}>
                          <div className="img-wrapper">
                              <img className={'img-wrapper'} src={Team1Image} alt="img-fluid"/>
                          </div>
                          <h6 className={'fs_20 fw_700 text-color mb-0'}>Rahul S., Bangalore</h6>
                      </div>
                      <p className={'fs_20 fw_400 lh-1-5 mb-0 text-color'}>This service has completely changed how I buy flour. It's fresh, customized, and delivered to my doorstep—what more could I ask for?</p>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                  <div className={'our-client-box'}>
                      <div className={'d-flex align-items-center mb_18'}>
                          <div className="img-wrapper">
                              <img className={'img-wrapper'} src={Team1Image} alt="img-fluid"/>
                          </div>
                          <h6 className={'fs_20 fw_700 text-color mb-0'}>Meera K., Pune</h6>
                      </div>
                      <p className={'fs_20 fw_400 lh-1-5 mb-0 text-color'}>I love being able to choose my own wheat and add healthy extras like flax seeds and ragi. The flour is always fresh and the rotis taste amazing!</p>
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

export default OurHappyClient;
