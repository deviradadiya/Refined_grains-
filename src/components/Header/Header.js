import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/images/profile.jpg";
import Login from "../Login/Login"; // <-- Import your Login component

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
<<<<<<< HEAD
          <div className="nav-background">
            <Link className="navbar-brand" to={"/home"}>
              <img src={logo} alt="Refined Grains" className="logo img-fluid" />
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
              <span className="navbar-toggler-icon" />
            </button>
=======
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
>>>>>>> 3a7c97fccfd25cf97b16ed29d1c1860a678b0184

            {/* Menu items */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                {HeaderMenu.map((item, idx) => (
<<<<<<< HEAD
                  <li className="nav-item" key={idx}>
                    <NavLink to={item.path} className="nav-link">
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* LOGIN Button - opens modal */}
              <button
                className="login-btn"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                LOGIN
              </button>

              <div className="profile-img pl_14">
                <img src={profile} alt="user_profile" className="user-img" />
              </div>
=======
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
>>>>>>> 3a7c97fccfd25cf97b16ed29d1c1860a678b0184
            </div>
          </div>
        </div>
      </nav>
<<<<<<< HEAD

      {/* Bootstrap Modal for Login */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="">
            <div className="modal-header border-0"></div>
            <div className="modal-body">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
=======
>>>>>>> 3a7c97fccfd25cf97b16ed29d1c1860a678b0184
  );
};

export default Header;
