import React from "react";
import "./Header.css";
import logo from "../../assets/Logo/logo.png";
import profile from "../../assets/images/profile.jpg";

const Header = () => {
  return (
    <>
      <title>Refined Grains</title>

      <nav className="navbar navbar-expand-lg bg-white  py-2">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Refined Grains" className="logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Menu items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#"
                  style={{ color: "#A37C4D" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Customise Wheat
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            {/* Login Button */}
            <button class="login-btn">LOGIN</button>

            <div className="profile-img  pl_14">
              <img src={profile} alt="User_profile" className="user-img" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
