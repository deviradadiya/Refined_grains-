import React from "react";
import GetInTouch from "../Home/GetInTouch";
import ArrowRightIcon from "../../assets/svg/arrow-right-white.svg";
import AboutUsImage from "../../assets/images/about-us.png";
import WhyChooseImage from "../../assets/images/why-choose.png";
import Team1Image from "../../assets/images/team-1.png";
import Team2Image from "../../assets/images/team-2.png";
import Team3Image from "../../assets/images/team-3.png";
import Team4Image from "../../assets/images/team-4.png";

const AboutUs = () => {
  return (
      <>
          <div className="about-us pb_100 pt_100">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6">
                          <div className="about-content">
                              <h5 className={'fs_40 fw_700 mb_10 text-color'}>About Us</h5>
                              <h6 className={'fs_20 fw_600 mb_20 text-color'}>From Grain to Greatness — Naturally</h6>
                              <p className={'fs_20 fw_400 mb_18 text-color lh-1-5'}>
                                  At Wholesome Flour, we believe that the journey from wheat to flour should be as pure, honest, and nourishing as the final product itself. Our mission is simple — to help you transform your own wheat into fresh, stone-ground, preservative-free flour that's packed with nutrients and full of flavor.
                              </p>

                              <p className={'fs_20 fw_400 mb_58 text-color lh-1-5'}>
                                  We’re more than just a service. We’re a movement towards healthier living, sustainable practices, and reviving the age-old tradition of home-ground flour.
                              </p>

                              <button className={'button icon btn-solid'}>
                                  Get Started
                                  <img src={ArrowRightIcon} alt="arrow icon"/>
                              </button>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="img-wrapper text-end">
                              <img src={AboutUsImage} alt="about us image"/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="why-choose-us text-start">
              <div className="container">
                  <div className="row">
                      <div className="col-md-5 order-lg-1 order-2">
                          <div className="img-wrapper">
                              <img src={WhyChooseImage} alt="Why Choose Image"/>
                          </div>
                      </div>

                      <div className="col-md-7 order-lg-2">
                          <div className="why-chose-us-content ms-auto text-start">
                              <h5 className={'fs_40 fw_700 text-color mb_20'}>Why Choose Us?</h5>

                              <div className={'mb_20'}>
                                  <h6 className={'fs_20 fw_500 text-color mb_12'}>🌾 Farm-to-Flour Philosophy:</h6>
                                  <p className={'fs_20 fw_400 lh-1-5 text-color mb-0'}>100% traceable process. Your wheat, your flour — no mixing or fillers.</p>
                              </div>

                              <div className={'mb_20'}>
                                  <h6 className={'fs_20 fw_500 text-color mb_12'}>🌀 State-of-the-Art Milling:</h6>
                                  <p className={'fs_20 fw_400 lh-1-5 text-color mb-0'}>We use traditional stone grinding combined with modern tech for the best of both worlds.</p>
                              </div>

                              <div className={'mb_20'}>
                                  <h6 className={'fs_20 fw_500 text-color mb_12'}>🧼 Clean & Transparent Process:</h6>
                                  <p className={'fs_20 fw_400 lh-1-5 text-color mb-0'}>No chemicals. No preservatives. Just wholesome, natural goodness.</p>
                              </div>

                              <div>
                                  <h6 className={'fs_20 fw_500 text-color mb_12'}>🧑‍🍳 Perfect for All Needs:</h6>
                                  <p className={'fs_20 fw_400 lh-1-5 text-color mb-0'}>From daily chapatis to gourmet baking — our flour fits every kitchen.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="vision-box mt_100 py_60">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="content pb_48 our-vision">
                              <h5 className={'fs_40 fw_700 mb_20 text-white text-capitalize'}>Our Vision</h5>
                              <p className={'fs_20 fw_400 mb-0 lh-1-5 text-white text-capitalize'}>To reconnect people with the purity of their food by offering access to freshly milled flour that’s healthier, tastier, and more sustainable.</p>
                          </div>
                      </div>

                      <div className="col-md-6">
                          <div className="content our-promise pl_40 pb_48 h-100">
                              <h5 className={'fs_40 fw_700 mb_20 text-white text-capitalize'}>Our Promise</h5>
                              <p className={'fs_20 fw_400 mb-0 lh-1-5 text-white text-capitalize'}>We promise integrity in every grain. What you bring is what you get — milled with care, packed with love.</p>
                          </div>
                      </div>

                      <div className="col-12">
                          <div className="content text-lg-center mt_48 pb-0">
                              <h5 className={'fs_40 fw_700 mb_20 text-white text-capitalize'}>Let’s Bring Back the Taste of Tradition.</h5>
                              <p className={'fs_20 fw_400 mb-0 lh-1-5 text-white text-capitalize'}>We promise integrity in every grain. What you bring is what you get — milled with care, packed wWhether you're rediscovering ancestral wisdom or making a modern shift toward clean eating — Wholesome Flour is your trusted partner in every step.ith love.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="our-team py_100">
              <div className="container">
                  <div className="row g-4">
                      <div className="col-md-12">
                          <div className="team-section-title text-center">
                              <p className={'fs_20 lh-1-5 fw_400 text-color mb_8'}>OUR TEAM</p>
                              <h2 className={'fs_40 fw_700 mb_60 text-color lh-1'}>Experienced Stylists</h2>
                          </div>
                      </div>

                      <div className="col-md-3">
                          <div className="team-box">
                              <div className="img-wrapper">
                                  <img src={Team1Image} alt="team Image 1"/>
                              </div>

                              <div className="content">
                                  <h5 className={'fs_24 lh-1 fw_600 mb_10 text-color'}>Shannon</h5>
                                  <p className={'fs_16 lh-1 fw_400 mb_10 text-color'}>Senior Stylist</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="team-box">
                              <div className="img-wrapper">
                                  <img src={Team2Image} alt="team Image 1"/>
                              </div>

                              <div className="content">
                                  <h5 className={'fs_24 lh-1 fw_600 mb_10 text-color'}>Nathalie</h5>
                                  <p className={'fs_16 lh-1 fw_400 mb_10 text-color'}>Senior Stylist</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="team-box">
                              <div className="img-wrapper">
                                  <img src={Team3Image} alt="team Image 1"/>
                              </div>

                              <div className="content">
                                  <h5 className={'fs_24 lh-1 fw_600 mb_10 text-color'}>James</h5>
                                  <p className={'fs_16 lh-1 fw_400 mb_10 text-color'}>Make-up artist</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="team-box">
                              <div className="img-wrapper">
                                  <img src={Team4Image} alt="team Image 1"/>
                              </div>

                              <div className="content">
                                  <h5 className={'fs_24 lh-1 fw_600 mb_10 text-color'}>Madelyn</h5>
                                  <p className={'fs_16 lh-1 fw_400 mb_10 text-color'}>Senior Stylist</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <GetInTouch />
      </>
  );
};

export default AboutUs;
