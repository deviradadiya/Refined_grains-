import React from 'react'
import "./Header.css";
import logo from "../../assets/Logo/logo.png"; 
const Header = () => {
    return (
      
      <div className='main-nav'>
           <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2">
    <div className="container d-flex align-items-center">
      {/* Logo */}
      <a className="navbar-brand nav-logo" href="#">
         <img src={logo} alt="Logo" className="header-logo" />
      </a>
      {/* Centered Navigation */}
      <div className="nav-center">
        <ul className="navbar-nav d-flex flex-row justify-content-around" >
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
      </div>
      {/* Login Button */}
      <div className="nav-login-btn" >
        <button className="btn btn-login" ><a href=''>LOGIN</a></button>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Header