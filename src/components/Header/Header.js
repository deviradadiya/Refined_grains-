import React from "react";
import "./Header.css";
import logo from "../../assets/Logo/logo.png";

const Header = () => {
  return (
   
    <>
    
    <title>Refined Grains</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <nav className="navbar navbar-expand-lg bg-white shadow py-2">
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
              <a className="nav-link active" href="#" style={{color:"#A37C4D"}}>
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
        </div>
      </div>
    </nav>
    </>

  );
};

export default Header;
