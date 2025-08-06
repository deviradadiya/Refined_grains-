import React from 'react';
import banner from '../../assets/images/banner.png';
import grains from '../../assets/images/grains.png';
import deshborder from '../../assets/images/deshborder.png';
import grainsdot from '../../assets/images/grainsdot.png';
import removegrains from '../../assets/images/removegrains.png';
import grainsbwole from '../../assets/images/grainsbwole.png';

const Banner = () => {
  return (
    <div className='main-banner'>
      
    <section className="banner">
      <div className="banner-content">
        <h1>
          Turn Your Wheat
          <br />
          Into Wholesome <br />
          Flour
        </h1>
        <p>Select, Customise, and Convert with Precision.</p>
        <button className="btn-get-started">
         <a>GET STARTED</a>  <span className="arrow-a">→</span>
        </button>
      </div>
          <div className='dash-border'>
            <img src={deshborder} alt="Wheat Bag" />
          </div>
          <div className="banner-image">
            <img src={banner} alt="Wheat Bag" />
          </div>

          <div className='grains-dot'>
            <img src={grainsdot} alt="Wheat Bag" />
          </div>
        <div className='remove-grains'>
          <img src={removegrains} alt="Wheat Bag" />
        </div>
      </section>

      <div className="grains-img">
        <img src={grains} alt="Wheat Grains" />
      </div>

     
      <div className='main-product-section'>
        
      <div className='product-section'>
    <div className="container">
    <div className="product-content text-center">
      <h1 className="fw-bold">Our Products</h1>
      <p className="text-muted">
        Select Customise, And Convert With Precision.
      </p>
    </div>
   
    <div className="scroll-container d-flex overflow-auto gap-4 pb-3">
      
      <div className="card flex-shrink-0" style={{ width: 240 }}>
          <img
                src={grainsbwole }
          className="card-img-top"
          alt="Wheat"
        />
        <div className="card-body text-center">
          <h6 className="fw">₹ 15.00</h6>
          <p className="text-muted">Durum wheat (Triticum durum)</p>
          <button className="btn btn-custom px-4 py-1 d-block mx-auto p-20 fw-400">CUSTOMISE</button>
        </div>
      </div>
    
      <div className="card flex-shrink-0" style={{ width: 240 }}>
          <img
            src={grainsbwole }
            className="card-img-top"
            alt="Wheat"
          />
          <div className="card-body text-center">
            <h6 className="fw">₹ 15.00</h6>
            <p className="text-muted small">Durum wheat (Triticum durum)</p>
        <button className="btn btn-custom px-4 py-1 d-block mx-auto">CUSTOMISE</button>
          </div>
      </div>
    
      <div className="card flex-shrink-0" style={{ width: 240 }}>
          <img
          src={grainsbwole }
            className="card-img-top"
            alt="Wheat"
          />
          <div className="card-body text-center">
            <h6 className="fw">₹ 15.00</h6>
            <p className="text-muted ">Durum wheat (Triticum durum)</p>
            <button className="btn btn-custom px-4 py-1 d-block mx-auto">CUSTOMISE</button>
          </div>
      </div>

      <div className="card flex-shrink-0" style={{ width: 240 }}>
        <img
          src={grainsbwole }
          className="card-img-top"
          alt="Wheat"
        />
        <div className="card-body text-center">
          <h6 className="fw">₹ 15.00</h6>
          <p className="text-muted small">Durum wheat (Triticum durum)</p>
         <button className="btn btn-custom px-4 py-1 d-block mx-auto">CUSTOMISE</button>
        </div>
      </div>
            
      <div className="card flex-shrink-0" style={{ width: 240 }}>
        <img
           src={grainsbwole }
          className="card-img-top"
          alt="Wheat"
        />
        <div className="card-body text-center">
          <h6 className="fw">₹ 15.00</h6>
          <p className="text-muted small">Durum wheat (Triticum durum)</p>
     <button className="btn btn-custom px-4 py-1 d-block mx-auto">CUSTOMISE</button>
        </div>
      </div>
            
      <div className="card flex-shrink-0" style={{ width: 240 }}>
        <img
           src={grainsbwole }
          className="card-img-top"
          alt="Wheat"
        />
        <div className="card-body text-center">
          <h6 className="fw">₹ 15.00</h6>
          <p className="text-muted small">Durum wheat (Triticum durum)</p>
          <button className="btn btn-custom px-4 py-1 d-block mx-auto">CUSTOMISE</button>
        </div>
      </div>
            
      <div className="card flex-shrink-0" style={{ width: 240 }}>
        <img
           src={grainsbwole }
          className="card-img-top"
          alt="Wheat"
        />
        <div className="card-body text-center">
          <h6 className="fw">₹ 15.00</h6>
          <p className="text-muted small">Durum wheat (Triticum durum)</p>
         <button className="btn btn-custom px-4 py-1 d-block mx-auto">CUSTOMISE</button>
        </div>
      </div>
          </div>
    </div>
  </div>

      
</div>
    
</div>

  );
};

export default Banner;
