import React from "react";
import "./Login.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Verify from "../Verify/Verify";
const Login = () => {
  return (
    <div className="login-container">
      <div className="header pb_88 d-flex justify-content-between align-items-start">
        <div className="logo-section d-flex">
          <p className="fs_20 m-0">Welcome to</p>
          <img src={logo} alt="Refined Grains" className="logo" />
        </div>
        <div className="signup-link">
          <p className="fs_13">
            No Account ? <br />
            <a href="#">
              <span>Log in</span>
            </a>
          </p>
        </div>
      </div>
      <h1 className="title fs_55 fw_500">Log in</h1>
      <label className="label d-block mt_20 fs_24 fw_600 pb_42  pt_56 ">
        Enter your mobile number
      </label>

      <div className="mobile-input-wrapper pb_70 pt_38 ">
        <div className="country-code-box pb_18 ">
          <span className="fw-bold fs_16 ">+91</span>
        </div>
        <input
          type="text"
          placeholder="Mobile number"
          className="mobile-number-input pb_18 fs_16"
        />
      </div>

      <button className="submit-btn pt_70">
        <Link
          to="/Verify"
          style={{
            textDecoration: "none",
            textTransform: "uppercase",
            color: "inherit",
          }}
        >
          continue
        </Link>
        <span className="arrow">➜</span>
      </button>
    </div>
  );
};

export default Login;
