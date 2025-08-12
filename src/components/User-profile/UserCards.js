import React from "react";

import thomas from "../../assets/images/Thomas.png";
import arrow from "../../assets/svg/arrow.svg";
import pside from "../../assets/svg/pside.svg";
import Payments from "../../assets/svg/payment.svg";
import Stuff from "../../assets/svg/stuff.svg";
import logout from "../../assets/svg/logout-btn.svg";
import cardlogo from "../../assets/svg/cardlogo.svg";

const UserCards = () => {
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
        <main className="custom-main-content col-md-9 mt_10  col-lg-10 p-5">
          <div class="profile-container ">
            <ul class="nav nav-tabs mb-4">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Saved Cards
                </a>
              </li>
            </ul>
          </div>

          <div className="card-info-container">
            <div className="card-container pt_18 ">
              {/* Credit Card */}
              <div className="card-item">
                <label className="radio-wrapper">
                  <input type="radio" name="card" defaultChecked="" />
                  <span className="custom-radio" />
                </label>
                <div className="card-info pt_22">
                  <div className="card-name fw_400 fs_16">Credit Card</div>
                  <div className="card-number fw_400 pt_8 fs_16">****8523</div>
                </div>
                <div className="card-actions d-flex gap-3">
                  <a href="#" className="edit-link">
                    Edit
                  </a>
                  <img
                    src={cardlogo}
                    className="card-logo"
                    alt="Mastercard Logo"
                  />
                </div>
              </div>
              <hr className="divider" />
              {/* Debit Card */}
              <div className="card-item">
                <label className="radio-wrapper">
                  <input type="radio" name="card" defaultChecked="" />
                  <span className="custom-radio" />
                </label>
                <div className="card-info pt_22">
                  <div className="card-name fw_400 fs_16">Credit Card</div>
                  <div className="card-number fw_400 pt_8 fs_16">****4025</div>
                </div>
                <div className="card-actions d-flex gap-3">
                  <a href="#" className="edit-link">
                    Edit
                  </a>
                  <img
                    src={cardlogo}
                    className="card-logo"
                    alt="Mastercard Logo"
                  />
                </div>
              </div>

              <hr className="divider" />
              <div className="add-card pt_28">
                <a href="#" className="fs_16 ">
                  + ADD NEW CARD
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserCards;
