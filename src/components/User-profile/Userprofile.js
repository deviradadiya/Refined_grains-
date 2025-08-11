import React from "react";
import orderbox from "../../assets/svg/orderbox.svg";
import grainsuserp from "../../assets/images/grainsusrp .png";
import search from "../../assets/svg/search.svg";
import review from "../../assets/svg/review.svg";
import { Link } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";

const Userprofile = () => {
  return (
      <>
        <div className="user-profile-page">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <ProfileSidebar />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="main-content row">
            {/* Main Content */}
            <main className="custom-main-content col-md-9  col-lg-10 p-3">
              <div className="custom-wrapper pl_12">
                {/* Tabs */}
                <div className="custom-tab-content  d-flex justify-content-between pt_74 ">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button>Orders</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                          to="/userprofilebyagain"
                          className="nav-link"
                          id="profile-tab"
                          role="tab"
                      >
                        Buy Again
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                          to="/userprofilebyagain"
                          className="nav-link"
                          id="profile-tab"
                          role="tab"
                      >
                        Not Yet Shipped
                      </Link>
                    </li>
                    <Link
                        to="/userprofilebyagain"
                        className="nav-link"
                        id="profile-tab"
                        role="tab"
                    >
                      Cancelled Orders
                    </Link>
                  </ul>
                </div>
                <hr className="my-1  text-black"/>

                {/* Search + Filter */}
                <div
                    className="custom-search-content pl_14 pt-4 pb_20 d-flex justify-content-between align-items-center mb-3">
                  <h2 className="mb-0 fw-600 fs-24 ">Your Orders</h2>

                  <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search Your Order"
                        className="rounded-1 "
                    />
                    <img src={search} alt="Search" className="search-icon"/>
                  </div>
                </div>

                <div className="pl_20">
                  <div
                      className="custom-order-content  d-flex justify-content-between   align-items-center p-3  flex-wrap pb_20">
                    <div className="custom-order-sub-content d-flex align-items-center mb-2 mb-md-0">
                      <img
                          src={orderbox}
                          alt="Order Icon"
                          width="24"
                          className="me-2"
                      />
                      <span className="order-deliver-content  fw-500 fs_18 text-uppercase">
                    <h5> 1 ORDER DELIVER</h5>
                  </span>
                    </div>

                    <div className="drop-down-content">
                      <select className=" form-select form-select-sm w-auto border-0 ">
                        <option selected>Past 3 Months</option>
                        <option>2025</option>
                        <option>2024</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Order Card */}
                <div className="pl_20 pt_20">
                  <div className="custom-card-content p-4 mb-4 border-0 mt-4 ">
                    <div className="order-summary p-15 d-flex justify-content-between align-items-start">
                      <div className="order-details  d-flex gap-5">
                        <div>
                          <small className="fs_14 d-block">Order Deliver</small>
                          <p className=" fw-bold fs_18 pt_10 ">26 January 2025</p>
                        </div>

                        <div>
                          <small>Total</small>
                          <p className=" fw-bold fs_18 pt_10">168 Inr</p>
                        </div>
                        <div>
                          <small>Ship To</small>
                          <p className="fw-bold fs_18 pt_10">Home</p>
                        </div>
                      </div>
                      <div className="order-meta  text-right">
                    <span className="d-block fs_14">
                      order # 102-6955251-2562500
                    </span>
                        <a
                            href="#"
                            className="download-link d-flex justify-content-end fs_14  pt_10"
                        >
                          Download Invoice
                        </a>
                      </div>
                    </div>

                    <hr className="my-3   text-white"/>

                    {/* Product Row */}
                    <div className="custom-product-content d-flex align-items-start justify-content-start gap-4">
                      <img
                          src={grainsuserp}
                          alt="Wheat"
                          width="60"
                          height="60"
                          className="flex-shrink-0"
                      />

                      {/* Product Info + Badges */}
                      <div className="custom-product-info-content flex-grow-1">
                        <h6 className="fw-bold mb-2">MH Durum Wheat (4KG)</h6>

                        <div className="d-flex flex-wrap gap-2 mb-2">
                      <span className="badge  border-redius-1 text-dark">
                        Rice 1Kg
                      </span>
                          <span className="badge border-redius-2 text-dark ">
                        Oats 1Kg
                      </span>
                          <span className="badge  border-redius-2   text-dark">
                        Rajma 1Kg
                      </span>
                          <span className="badge  border-redius-2   text-dark ">
                        Fine
                      </span>
                          <span className="badge  border-redius-2   text-dark ">
                        Regular Paper Bag
                      </span>
                        </div>
                      </div>

                      {/* Rating Section */}
                      <div className="custom-rating-content w-30 text-end">
                        <div className="fw-400">You Have Rated 4 Star</div>
                        <div className="rating-content d-flex align-items-start pt_20 fs-5">
                          <img src={review} alt="Wheat" className="flex-shrink-0"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </>

  );
};

export default Userprofile;
