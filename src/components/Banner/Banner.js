import React from 'react';
import BannerImage from '../../assets/images/banner.png';
import RightArrowIcon from '../../assets/svg/arrow-right-white.svg';

const Banner = () => {
    return (
        <>
            <div className="banner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="banner-content pt_94">
                                <h1 className={'fs_60 fw_700 text-capitalize mb_56'}>Turn your Wheat In to Wholesome Flour</h1>
                                <p className={'fs_20 fw_400 lh-1 text-color mb_70'}>Select Customise, and convert with precision.</p>
                                <button className={'button btn-solid'}>Get Started <img className={'img-fluid ml_12'} src={RightArrowIcon} alt="arrow Icon"/></button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-wrapper">
                                <img className={'img-fluid'} src={BannerImage} alt="Banner Image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Banner;
