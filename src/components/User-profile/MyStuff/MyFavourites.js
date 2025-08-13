import React, {useState} from "react";
import OrderBoxIcon from "../../../assets/svg/orderbox.svg";
import search from "../../../assets/svg/search.svg";
import FillStartIcon from "../../../assets/svg/fill-star.svg";
import StartIcon from "../../../assets/svg/star.svg";
import CartProductIcon from "../../../assets/images/packaged-delivered.png";

const MyFavourites = () => {

  return (
      <>
        <div className="main-content">
          <div className="d-flex align-items-center justify-content-between mb_28 stuff-title-order">
            <h2 className="mb-0 fw_600 fs_24 lh-1">Favourites (1)</h2>
            <div className={'form-input search-field'}>
              <input type="text" className="form-control" id="search" placeholder="Search Your Order" />
              <img src={search} alt="Search" className="search-icon"/>
            </div>
          </div>

          <div className={'order-list-box'}>

            <div className="order-grid-list">

              <div className="cart-grid d-flex align-items-center justify-content-between gap-2">
                <div className={'d-flex align-items-center'}>
                  <div className="img-wrapper">
                    <img className={'img-fluid'} src={CartProductIcon} alt="cart product"/>
                  </div>
                  <div>
                    <div className={' mb_10'}>
                      <h6 className={'fs_24 fw_700 text-color mb-0'}>MH Durum wheat (4KG)</h6>
                    </div>
                    <div className={'tag-list d-flex align-items-center'}>
                      <div className="tag py_10 px_10 fs_12 text-color">Rice 1Kg</div>
                      <div className="tag py_10 px_10 fs_12 text-color">Oats 1Kg</div>
                      <div className="tag py_10 px_10 fs_12 text-color">Rajma 1Kg</div>
                      <div className="tag py_10 px_10 fs_12 text-color">Fine</div>
                      <div className="tag py_10 px_10 fs_12 text-color">Regular Paper Bag</div>
                    </div>
                  </div>
                </div>

                <div className={''}>
                  <p className={'fs_18 fw_400 lh-1-5 mb_20 text-color'}>You Have Rated 4 Star</p>

                  <div className={'d-flex align-items-center  gap-2'}>
                    <img src={FillStartIcon} className={'img-fluid'} alt=""/>
                    <img src={FillStartIcon} className={'img-fluid'} alt=""/>
                    <img src={FillStartIcon} className={'img-fluid'} alt=""/>
                    <img src={FillStartIcon} className={'img-fluid'} alt=""/>
                    <img src={StartIcon} className={'img-fluid'} alt=""/>
                  </div>
                </div>

                <button className={'button button-border text-capitalize'}>Buy</button>
              </div>
            </div>
          </div>
        </div>
      </>

  );
};

export default MyFavourites;
