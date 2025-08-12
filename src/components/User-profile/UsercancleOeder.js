import React from "react";
import profile from "../../assets/images/profile.jpg";
import thomas from "../../assets/images/Thomas.png";
import arrow from "../../assets/svg/arrow.svg";
import pside from "../../assets/svg/pside.svg";
import Payments from "../../assets/svg/payment.svg";
import Stuff from "../../assets/svg/stuff.svg";
import logout from "../../assets/svg/logout-btn.svg";
import orderbox from "../../assets/svg/orderbox.svg";
import grainsuserp from "../../assets/images/grainsusrp .png";
import search from "../../assets/svg/search.svg";
import review from "../../assets/svg/review.svg";
import noreview from "../../assets/svg/noreview.svg";

const UsercancleOeder = () => {
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
                  <button>Buy Again</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button>Not Yet Shipped</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button>Cancelled Orders</button>
                </li>
              </ul>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  ...
                </div>
              </div>
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

            <div className="pl_20">
              <div class="custom-order-content  d-flex justify-content-between   align-items-center p-3  flex-wrap pb_20">
                <div class="custom-order-sub-content d-flex align-items-center mb-2 mb-md-0">
                  <img
                    src={orderbox}
                    alt="Order Icon"
                    width="24"
                    class="me-2"
                  />
                  <span class="order-deliver-content  fw-500 fs_18 text-uppercase">
                    <h5> 1 ORDER DELIVER</h5>
                  </span>
                </div>

                <div className="drop-down-content">
                  <select class=" form-select form-select-sm w-auto border-0 ">
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

                <hr className="my-3   text-white" />

                {/* Product Row */}
                <div className="custom-product-content d-flex pt_40 align-items-start justify-content-start gap-4">
                  <img
                    src={grainsuserp}
                    alt="Wheat"
                    width="60"
                    height="60"
                    className="flex-shrink-0"
                  />

                  {/* Product Info + Badges */}
                  <div className="custom-product-info-content flex-grow-1 ">
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
                  <div className="custom-rating-content d-flex gap-3 pt_10 text-right">
                    <div className="fw-400 ">Rate Product</div>
                    <img src={noreview} alt="Wheat" className="flex-shrink-0" />
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

export default UsercancleOeder;
