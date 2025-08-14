import React from "react";
import search from "../../../assets/svg/search.svg";
import CartProductIcon from "../../../assets/images/packaged-delivered.png";

const NotShipped = () => {
  return (
      <>
        <div className="main-content">
          <div className="d-flex align-items-center justify-content-between mb_28 order-content-box">
            <div>
              <h2 className="mb-0 fw_600 fs_24 lh-1">Your Orders</h2>
            </div>
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
                  <button className={'button btn-solid text-uppercase'}>Track Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default NotShipped;
