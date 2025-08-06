import React from "react";
import ArrowRightIcon from "../../assets/svg/arrow-right-white.svg";

const GetInTouch = () => {
  return (
      <>
          <div className={'customize-your-wheat get-in-touch'}>
              <div className="customize-box">
                  <h2 className={'fs_40 text-white fw_700 mb_20'}>Get in Touch With Us</h2>
                  <p className={'fs_20 fw_400 text-white mb_30 lh-1-5'}>Have a question, need help with your order, or want to learn more about our wholesome flour customization? We’re here to help! Reach out to us anytime — whether it’s through a quick message, call, or email. Our friendly support team will get back to you as soon as possible.</p>
                  <a href="#" className={'d-inline-block text-white fs_20 text-uppercase fw_500 d-flex align-items-center text-decoration-underline'}>Contact us<img className={'img-fluid ml_12'} src={ArrowRightIcon} alt="Arrow Right White"/></a>
              </div>
          </div>
      </>
  );
};

export default GetInTouch;
