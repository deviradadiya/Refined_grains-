import React from "react";

import thomas from "../../assets/images/Thomas.png";
import arrow from "../../assets/svg/arrow.svg";
import pside from "../../assets/svg/pside.svg";
import Payments from "../../assets/svg/payment.svg";
import Stuff from "../../assets/svg/stuff.svg";
import logout from "../../assets/svg/logout-btn.svg";

import grainsuserp from "../../assets/images/grainsusrp .png";
import search from "../../assets/svg/search.svg";
import review from "../../assets/svg/review.svg";
import { Link } from "react-router-dom";
const UserprofileByAgain = () => {
  return (
    <div className="container-fluid">
      <div className="main-content row">
        {/* Sidebar */}
        <aside className="custom-sidebar col-md-3 col-lg-2 min-vh-100 p-lg-5 ">
          <div className="img-container mb_58">
            <img
              src={thomas}
              alt="Avatar"
              className="rounded-circle"
              width={50}
            />
            <p className="avtar-content text-muted mt-2 fw_400 pl_20">
              Hello,
              <br />
              Thomas W. Holmes
            </p>
          </div>
          <nav className="nav-wrapper flex-column">
            <span className="order-wrapper">
              <a className="nav-link  active" href="#">
                <img src={arrow} alt="My Orders" />
                <span className="my-order-nav fs_16 text-capitalize  fw_600 pl_18">
                  My Orders
                </span>
              </a>
            </span>
            <span className="setting-wrapper text-capitalize fs_16 mt_48">
              <a className="nav-link  active" href="#">
                <img src={pside} alt="My Orders" />
                <span className="account-wrapper  text-muted fw_400 pl_18 ">
                  Account Settings
                </span>
                <div className="pt_18  ">
                  <span className="profile-wrapper text-muted fs_14 pl_50">
                    Profile Information
                  </span>
                  <br />

                  <br />
                  <span className="manage-wrapper text-muted pl_50 fs_14 ">
                    Manage Address
                  </span>
                </div>
              </a>
            </span>

            <span className="payment-wrapper  mt_48 ">
              <a className="nav-link" href="#">
                <img src={Payments} alt="My Orders" />
                <span className="pay-wrapper text-muted fw_400 pl_18 fs_16 text-uppercase">
                  Payments
                </span>
              </a>
            </span>

            <span className="stuff-wrapper text-capitalize text-muted small mt_48">
              <a className="nav-link  active" href="#">
                <img src={Stuff} alt="My Orders" />
                <span className="stuff-content-wrapper fs_16 fw_400 pl_18 ">
                  MY STUFF
                </span>
                <div className=" pt_18">
                  <span className="review-favourite-wrapper fs_16 pl_50">
                    my Reviews
                  </span>
                  <br />
                  <br />
                  <span className="review-favourite-wrapper pl_50 ">
                    my Favourite
                  </span>
                </div>
              </a>
            </span>
          </nav>
          <div className="logout-btn pt_104">
            <img src={logout} alt="My Orders" />
            <a href="#" className="pl_28 fs_18 fw_700 fw-bold">
              LOGOUT
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="custom-main-content col-md-9  col-lg-10 p-3">
          <div className="custom-wrapper pl_12">
            {/* Tabs */}
            <div className="custom-tab-content  d-flex justify-content-between pt_74 ">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button>Orders</button>
                </li>
                <li class="nav-item" role="presentation">
                  <Link
                    to="/userprofilebyagain"
                    className="nav-link"
                    id="profile-tab"
                    role="tab"
                  >
                    Buy Again
                  </Link>
                </li>
                <li class="nav-item" role="presentation">
                  <Link to="" className="nav-link" id="profile-tab" role="tab">
                    Not Yet Shipped
                  </Link>
                </li>
                <Link to="" className="nav-link" id="profile-tab" role="tab">
                  Cancelled Orders
                </Link>
              </ul>
            </div>
            <hr className="my-1  text-black" />

            {/* Search + Filter */}
            <div className="custom-search-content pl_14 pt-4 pb_20 d-flex justify-content-between align-items-center mb-3">
              <h2 className="mb-0 fw-600 fs-24 ">Your Orders</h2>

              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search Your Order"
                  className="rounded-1 "
                />
                <img src={search} alt="Search" className="search-icon" />
              </div>
            </div>

            {/* Order Card */}
            <div className="pl_20 pt_15">
              <div className="custom-card-content p-4 mb-4 border-0 mt-4 ">
                {/* Product Row */}
                <div className="custom-product-content d-flex align-items-start justify-content-start gap-4 pt_20">
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

                  <div className="again-btn  text-end">
                    <a href="#"> Buy Again </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserprofileByAgain;
