import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/images/profile.jpg";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem("authToken"); // ya sessionStorage
    setIsLoggedIn(!!token);
  }, []);

  const HeaderMenu = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Customise Wheat", path: "/customize-wheat" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" }
  ];

  return (
      <nav className="navbar navbar-expand-lg p-0 position-fixed w-100 z-3">
        <div className="container">
          <div className={"nav-background"}>
            <div>
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
              <Link className="navbar-brand" to={"/"}>
                <img src={logo} alt="Refined Grains" className="logo img-fluid" />
              </Link>
            </div>

            {/* Menu items */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                {HeaderMenu.map((item, idx) => (
                    <li className={"nav-item"} key={idx}>
                      <NavLink to={item.path} className="nav-link">
                        {item.name}
                      </NavLink>
                    </li>
                ))}
              </ul>
            </div>

            {/* Login/Profile Section */}
            <div className={"d-flex align-items-center"}>
              {!isLoggedIn ? (
                  <button
                      className="login-btn"
                      onClick={() => {
                        localStorage.setItem("authToken", "dummy_token");
                        setIsLoggedIn(true);
                      }}
                  >
                    Login
                  </button>
              ) : (
                  <Link to={"/my-order"} className={"profile-img ml_14"}>
                    <img src={profile} alt="user_profile" className={"user-img"} />
                  </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Header;
