import React from "react";
import ProductImage from "../../assets/images/our-product.png";

const OurProduct = () => {

  return (
      <>
          <div className={'product-box'}>
              <div className="img-wrapper mb_22">
                  <img className={'img-fluid'} src={ProductImage} alt="Our Product"/>
              </div>
              <div className="content text-center">
                  <h5 className={'fs_20 fw_500 text-color mb_8 '}>₹ 15.00</h5>
                  <p className={'fs_16 fw_400 text-color mb_32'}>Durum wheat (Triticum durum)</p>

                  <button className={'button btn-border'}> Customise </button>
              </div>
          </div>
      </>
  );
};

export default OurProduct;
