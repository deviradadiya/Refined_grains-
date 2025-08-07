import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className={'nav-background'}>
          <Link  className="navbar-brand" to={"/home"}>
            <img src={logo} alt="Refined Grains" className="logo img-fluid"/>
          </Link>

          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"/>
          </button>

          {/* Menu items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" to={'/home'}>
                  Home
                </Link>
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
            <button className="login-btn">Login</button>
          </div>
        </div>

      </div>
    </nav>
    </>

  );
};

export default Header;
 