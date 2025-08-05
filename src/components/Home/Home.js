import React from "react";
import ArrowRightIcon from "../../assets/svg/arrow-right-white.svg";
import ChooseWeatIcon from "../../assets/images/choose-weat.png";
import PreferredNutrientsIcon from "../../assets/images/preferred-nutrients.png";
import FreshForYouIcon from "../../assets/images/fresh-for-you.png";
import PackagedDeliveredIcon from "../../assets/images/packaged-delivered.png";
import HowWeWorkIcon from "../../assets/images/how-we-work.png";
import PlayIcon from "../../assets/images/play-icon.png";

const Home = () => {
  return (
      <>
          <div className={'customize-your-wheat'}>
            <div className="customize-box">
                <h2 className={'fs_40 text-white fw_700 mb_20'}>
                    Customize Your Wheat into Wholesome Flour
                </h2>
                <p className={'fs_20 fw_400 text-white mb_30'}>Select your preferred wheat variety, personalize it with nutritious add-ons, and transform it into wholesome, custom-made flour tailored to your needs.</p>
                <a href="#" className={'d-inline-block fs_20 fw_500 text-white text-uppercase d-flex align-items-center text-decoration-underline'}>Get Started<img className={'img-fluid ml_12'} src={ArrowRightIcon} alt="Arrow Right White"/></a>
            </div>
        </div>

          <div className="how-it-work py_100">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="section-title pb_30">
                              <h5>How It Works</h5>
                              <p>Creating your own custom flour is simple and rewarding</p>
                          </div>
                      </div>

                      <div className="col-md-12">
                          <div className={'d-flex pb_100 work-1 how-work position-relative'}>
                              <div className="how-it-work text-end pb_100 d-flex justify-content-end">
                                  <div className={'how-it-work-content'}>
                                      <h5 className={'fs_24 fw_700 mb_38 text-color pt_20'}>Choose Your Wheat</h5>
                                      <p className={'fs_20 fw_400 text-color mb-0 lh-1-5 text-capitalize'}>Start by selecting from a variety of high-quality wheat types—such as Sharbati, Lokwan, or MP Wheat—based on your taste, texture preference, and nutritional needs. Each variety offers a unique flavor and health benefit.</p>
                                  </div>
                                  <div className={'work-number ml_40'}>
                                      <span className={'fs_40 fw_700 text-white'}>1</span>
                                  </div>
                              </div>
                              <div className="how-it-work-img ml_36">
                                  <img className={'img-fluid'} src={ChooseWeatIcon} alt="Choose Your Wheat ICon"/>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-12">
                          <div className={'d-flex justify-content-end pb_100 work-2 how-work position-relative'}>
                              <div className="how-it-work-img mr_36">
                                  <img className={'img-fluid'} src={PreferredNutrientsIcon} alt="Preferred Nutrients Icon"/>
                              </div>
                              <div className="how-it-work pb_100 d-flex">
                                  <div className={'work-number mr_40'}>
                                      <span className={'fs_40 fw_700 text-white'}>2</span>
                                  </div>
                                  <div className={'how-it-work-content'}>
                                      <h5 className={'fs_24 fw_700 mb_38 text-color pt_20'}>Add Your Preferred Nutrients</h5>
                                      <p className={'fs_20 fw_400 text-color mb-0 lh-1-5 text-capitalize'}>Enhance your flour by adding healthy ingredients like flax seeds for Omega-3s, ragi for calcium, oats for fiber, or other superfoods. You can choose single or multiple add-ons to suit your dietary goals.</p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-12">
                          <div className={'d-flex pb_100 work-3 how-work position-relative'}>
                              <div className="how-it-work text-end pb_100 d-flex justify-content-end">
                                  <div className={'how-it-work-content'}>
                                      <h5 className={'fs_24 fw_700 mb_38 text-color pt_20'}>We Mill It Fresh for You</h5>
                                      <p className={'fs_20 fw_400 text-color mb-0 lh-1-5 text-capitalize'}>Once your selection is finalized, we freshly grind your wheat and add-ons using hygienic, slow-cold milling methods to preserve nutrients, aroma, and natural taste—without any preservatives or chemicals.</p>
                                  </div>
                                  <div className={'work-number ml_40'}>
                                      <span className={'fs_40 fw_700 text-white'}>3</span>
                                  </div>
                              </div>
                              <div className="how-it-work-img ml_36">
                                  <img className={'img-fluid'} src={FreshForYouIcon} alt="Fresh For You Icon"/>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-12">
                          <div className={'d-flex justify-content-end'}>
                              <div className="how-it-work-img mr_36">
                                  <img className={'img-fluid'} src={PackagedDeliveredIcon} alt="Packaged Delivered Icon"/>
                              </div>
                              <div className="how-it-work d-flex">
                                  <div className={'work-number mr_40'}>
                                      <span className={'fs_40 fw_700 text-white'}>4</span>
                                  </div>
                                  <div className={'how-it-work-content'}>
                                      <h5 className={'fs_24 fw_700 mb_38 text-color pt_20'}>Packaged & Delivered</h5>
                                      <p className={'fs_20 fw_400 text-color mb-0 lh-1-5 text-capitalize'}>Your wholesome, customized flour is then securely packed in eco-friendly packaging and delivered straight to your doorstep—fresh, flavorful, and ready to use.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="how-we-work py_100">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-12">
                          <div className="section-title mx-850 mb_50">
                              <h5>See How We Work – From Grain to Greatness</h5>
                          </div>
                      </div>

                      <div className="col-md-10">
                          <div className="how-it-work-video position-relative">
                              <img className={'img-fluid w-100'} src={HowWeWorkIcon} alt=""/>
                              <img className={'img-fluid play-icon'} src={PlayIcon} alt=""/>
                          </div>

                          <p className={'mt_30 fs_20 fw_400 text-color lh-1-5'}>Watch our process come to life! This video takes you behind the scenes to show how we carefully select premium wheat, blend it with your chosen add-ons, and freshly mill it into wholesome flour. From sourcing to packaging, every step is designed to ensure quality, purity, and freshness — all delivered right to your doorstep.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className={'customize-your-wheat get-in-touch'}>
              <div className="customize-box">
                  <h2 className={'fs_40 text-white fw_700 mb_20'}>
                      Get in Touch With Us
                  </h2>
                  <p className={'fs_20 fw_400 text-white mb_30'}>Have a question, need help with your order, or want to learn more about our wholesome flour customization? We’re here to help! Reach out to us anytime — whether it’s through a quick message, call, or email. Our friendly support team will get back to you as soon as possible.</p>
                  <a href="#" className={'d-inline-block text-white fs_20 text-uppercase fw_500 d-flex align-items-center text-decoration-underline'}>Contact us<img className={'img-fluid ml_12'} src={ArrowRightIcon} alt="Arrow Right White"/></a>
              </div>
          </div>
      </>
  );
};

export default Home;
