import React, {useState} from "react";
import OrderBoxIcon from "../../../assets/svg/orderbox.svg";
import search from "../../../assets/svg/search.svg";
import FillStartIcon from "../../../assets/svg/fill-star.svg";
import StartIcon from "../../../assets/svg/star.svg";
import CartProductIcon from "../../../assets/images/packaged-delivered.png";

const Order = () => {

  return (
      <>
        <div className="main-content">
          <div className="d-flex align-items-center justify-content-between mb_28 order-content-box">
            <div className={'d-flex align-items-center justify-content-between gap-2'}>
              <h2 className="mb-0 fw_600 fs_24 lh-1">Your Orders</h2>
              <div className="drop-down-content d-md-none">
                <select className="form-select select-transparent">
                  <option selected>Past 3 Months</option>
                  <option>2025</option>
                  <option>2024</option>
                </select>
              </div>
            </div>

            <div className={'form-input search-field'}>
              <input type="text" className="form-control" id="search" placeholder="Search Your Order" />
              <img src={search} alt="Search" className="search-icon"/>
            </div>
          </div>

          <div className={'d-flex align-items-center justify-content-between gap-2 py_14 px_32 order-box mb_28'}>
            <div className={'d-flex align-items-center'}>
              <img src={OrderBoxIcon} alt="Order Icon" className="img-fluid"/>
              <h5 className={'fs_18 fw_500 text-color lh-1 text-uppercase ml_10'}>1 Order Deliver</h5>
            </div>
            <div className="drop-down-content">
              <select className="form-select select-transparent">
                <option selected>Past 3 Months</option>
                <option>2025</option>
                <option>2024</option>
              </select>
            </div>
          </div>
          <div className={'order-list-box'}>
            <div className="order-invoice d-flex align-items-center justify-content-between gap-2 mb_30">
              <div className={'d-flex align-items-center delivery-details'}>
                <div className={'order-name'}>
                  <p className={'fs_14 fw_400 lh-1 text-color mb_10'}>Order Deliver</p>
                  <h6 className={'fs_18 fw_500 lh-1 text-color mb-0'}>26 january 2025</h6>
                </div>

                <div className={'order-name'}>
                  <p className={'fs_14 fw_400 lh-1 text-color mb_10'}>Total</p>
                  <h6 className={'fs_18 fw_500 lh-1 text-color mb-0'}>168 Inr</h6>
                </div>

                <div className={'order-name'}>
                  <p className={'fs_14 fw_400 lh-1 text-color mb_10'}>Ship To</p>
                  <h6 className={'fs_18 fw_500 lh-1 text-color mb-0'}>Home</h6>
                </div>
              </div>

              <div className="invoice-download text-end">
                <p className={'fs_14 fw_400 lh-1 text-color mb_10'}>order # 102-6955251-2562500</p>
                <h6 className={'fw_400 fs_16 lh-1 text-decoration-underline'}>Download Invoice</h6>
              </div>
            </div>

            <div className="order-grid-list">

              <div className="cart-grid d-flex align-items-center justify-content-between gap-2">
                <div className={'d-flex align-items-start'}>
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
              </div>
            </div>
          </div>
        </div>
      </>

  );
};

export default Order;
