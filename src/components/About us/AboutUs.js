import React from "react";
import ArrowRightIcon from "../../assets/svg/arrow-right-white.svg";
import ChooseWeatIcon from "../../assets/images/choose-weat.png";
import PreferredNutrientsIcon from "../../assets/images/preferred-nutrients.png";
import FreshForYouIcon from "../../assets/images/fresh-for-you.png";
import PackagedDeliveredIcon from "../../assets/images/packaged-delivered.png";
import HowWeWorkIcon from "../../assets/images/how-we-work.png";
import PlayIcon from "../../assets/images/play-icon.png";
import GetInTouch from "./GetInTouch";

const AboutUs = () => {
  return (
      <>
          <div className="about-us">
              <div className="container">
                  <div className="row">
                      <div className="col-md-7">
                          <h5 className={'fs_40 fw_700 mb_10 '}>AboutUs</h5>
                      </div>
                  </div>
              </div>
          </div>

          <GetInTouch />
      </>
  );
};

export default AboutUs;
