import React from "react";

import thomas from "../../assets/images/Thomas.png";
import arrow from "../../assets/svg/arrow.svg";
import pside from "../../assets/svg/pside.svg";
import Payments from "../../assets/svg/payment.svg";
import Stuff from "../../assets/svg/stuff.svg";
import logout from "../../assets/svg/logout-btn.svg";

// import grainsuserp from "../../assets/images/grainsusrp .png";
import search from "../../assets/svg/search.svg";
import review from "../../assets/svg/review.svg";

const UserprofileInfo = () => {
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
        <main className="custom-main-content col-md-9 mt_10 col-lg-10 p-5">
          <div class="profile-container">
            <ul class="nav nav-tabs mb-4">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Profile Information
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Manage Address
                </a>
              </li>
            </ul>

            <form>
              <div class="form-container pt_20 row mb-3">
                <div class="account-profile-form col-md-5">
                  <label class="form-label">
                    Name <span class="required">*</span>
                  </label>
                  <input type="text" class="form-control " />
                </div>
                <div class="col-md-5">
                  <label class="form-label">
                    Mobile No <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value="000-000-0000"
                  />
                </div>
              </div>

              <div class="row pt_20 mb-3">
                <div class="col-md-5">
                  <label class="form-label">
                    Pin Code <span class="required">*</span>
                  </label>
                  <input type="text" class="form-control" value="" />
                </div>
                <div class="col-md-5">
                  <label class="form-label">
                    Location <span class="required">*</span>
                  </label>
                  <input type="text" class="form-control" value="" />
                </div>
              </div>

              <div class="mb-3 col-md-10  pt_20">
                <label class="form-label">
                  Address (Area and Street) <span class="required">*</span>
                </label>
                <textarea class="form-control" rows="2">
                  2118 Thornridge Cir. Syracuse, Connecticut 35624
                </textarea>
              </div>

              <div class="row mb-5   pt_20">
                <div class="col-md-5">
                  <label class="form-label">
                    City/District/Town <span class="required">*</span>
                  </label>
                  <input type="text" class="form-control" value="Syracuse" />
                </div>
                <div class="col-md-5 ">
                  <label class="form-label">
                    State <span class="required">*</span>
                  </label>
                  <select class="form-select form-control">
                    <option selected>Connecticut</option>
                  </select>
                </div>
              </div>

              <div class="row mb-4  pt_20">
                <div class="col-md-5">
                  <label class="form-label">Landmark (Optional)</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="col-md-5">
                  <label class="form-label">Alternate Phone (Optional)</label>
                  <input type="text" class="form-control" />
                </div>
              </div>

              <div class="form-actions col-md-10 d-flex justify-content-end gap-3">
                <div className="d-flex gap-2">
                  <button type="button" className="btn-cancel fw_400">
                    Cancel
                  </button>
                  <button type="submit" className="btn-save">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserprofileInfo;
