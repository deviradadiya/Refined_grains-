import React from "react";
import ArrowRightIcon from "../../assets/svg/arrow-right-white.svg";

const Home = () => {
  return (
      <>
        <div className={'customize-your-wheat'}>
            <div className="customize-box">
                <h2 className={'fs_40 text-white fw_700 mb_20'}>
                    Customize Your Wheat into Wholesome Flour
                </h2>
                <p className={'fs_20 fw_400 text-white mb_30'}>Select your preferred wheat variety, personalize it with nutritious add-ons, and transform it into wholesome, custom-made flour tailored to your needs.</p>
                <a href="#" className={'d-inline-block fs_20 fw_600 d-flex align-items-center text-decoration-underline'}>Get Started <img className={'img-fluid ml_12'} src={ArrowRightIcon} alt="Arrow Right White"/></a>
            </div>
        </div>
      </>
  );
};

export default Home;
