import React from 'react';
import banner from '../../assets/images/banner.png';
import grains from '../../assets/images/grains.png';
import deshborder from '../../assets/images/deshborder.png';
import grainsdot from '../../assets/images/grainsdot.png';
import removegrains from '../../assets/images/removegrains.png';

const Banner = () => {
    return (
        <div className='main-banner'>
            <section className="banner">
                <div className="banner-content">
                    <h1>
                        Turn Your Wheat
                        <br/>
                        Into Wholesome <br/>
                        Flour
                    </h1>
                    <p>Select, Customise, and Convert with Precision.</p>
                    <button className="btn-get-started">
                        <a>GET STARTED</a> <span className="arrow-a">→</span>
                    </button>
                </div>
                <div className='dash-border'>
                    <img src={deshborder} alt="Wheat Bag"/>
                </div>
                <div className="banner-image">
                    <img src={banner} alt="Wheat Bag"/>
                </div>

                <div className='grains-dot'>
                    <img src={grainsdot} alt="Wheat Bag"/>
                </div>
                <div className='remove-grains'>
                    <img src={removegrains} alt="Wheat Bag"/>
                </div>
            </section>
            <div className="grains-img">
                <img src={grains} alt="Wheat Grains"/>
            </div>
        </div>

    );
};

export default Banner;
