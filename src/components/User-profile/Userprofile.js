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
const Userprofile = () => {
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
        <main className="custom-main-content col-md-9 col-lg-10 p-5">
          {/* Tabs */}
          <div className="custom-tab-content  d-flex justify-content-between ">
            <ul className="custom-tab-content nav mb-3">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Buy Again
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Not Yet Shipped
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cancelled Orders
                </a>
              </li>
            </ul>
          </div>
          {/* Search + Filter */}
          <div className="custom-search-content pt-4 d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0 fw-bold">Your Orders</h4>

            <div className="input-group w-50  bg-white ">
              <input
                type="text"
                className="form-control w-30 "
                placeholder="Search Your Order"
              />
              <span className="input-group-text bg-white">
                <img src={search} alt="My Orders" />
              </span>
            </div>
          </div>

          <div class="custom-order-content d-flex justify-content-between  align-items-center p-3  shadow-sm flex-wrap pb_20">
            <div class="d-flex align-items-center mb-2 mb-md-0">
              <img src={orderbox} alt="Order Icon" width="24" class="me-2" />
              <span class="fw-semibold text-uppercase">1 ORDER DELIVER</span>
            </div>

            <div>
              <select class="form-select form-select-sm w-auto">
                <option selected>Past 3 Months</option>
                <option>2025</option>
                <option>2024</option>
              </select>
            </div>
          </div>

          {/* Order Card */}
          <div className="custom-card-content p-4 mb-4 border-0 mt-4 shadow-sm  ">
            <div className="justify-content-between">
              <div className="d-flex">
                <div className="col-md">
                  <small className="text-muted d-block">Order Deliver</small>
                  <strong>26 January 2025</strong>
                </div>
                <div className="col-md">
                  <small className="text-muted d-block">Total</small>
                  <strong>168 Inr</strong>
                </div>
                <div className="col-md">
                  <small className="text-muted d-block">Ship To</small>
                  <strong>Home</strong>
                </div>
                <div className="col-md text-md-end">
                  <small className="text-muted d-block">Order #</small>
                  <strong>102-6955251-2562500</strong>
                  <br />
                  <a href="#" className="text-decoration-none text-brown small">
                    Download Invoice
                  </a>
                </div>
              </div>
            </div>

            <hr className="my-3" />

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
                  <span className="badge bg-light border text-dark fw-semibold">
                    Rice 1Kg
                  </span>
                  <span className="badge bg-light border text-dark fw-semibold">
                    Oats 1Kg
                  </span>
                  <span className="badge bg-light border text-dark fw-semibold">
                    Rajma 1Kg
                  </span>
                  <span className="badge bg-light border text-dark fw-semibold">
                    Fine
                  </span>
                  <span className="badge bg-light border text-dark fw-semibold">
                    Regular Paper Bag
                  </span>
                </div>
              </div>

              {/* Rating Section */}
              <div className="custom-rating-content w-30 text-end">
                <div className="fw-medium">
                  You Have
                  <br />
                  Rated 4 Star
                </div>
                <div className="text-warning fs-5">★★★★☆</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Userprofile;
