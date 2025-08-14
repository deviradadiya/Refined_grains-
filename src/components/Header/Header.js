import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import RightArrow from "../../assets/svg/arrow-right-white.svg";
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

      <>
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
              <button className="login-btn" data-bs-toggle="modal" data-bs-target="#loginModal" > Login </button>
              <Link to={"/my-order"} className={"profile-img ml_14"}>
                <img src={profile} alt="user_profile" className={"user-img"} />
              </Link>
              {/*{!isLoggedIn ? (*/}
              {/*    <button*/}
              {/*        className="login-btn"*/}
              {/*        onClick={() => {*/}
              {/*          localStorage.setItem("authToken", "dummy_token");*/}
              {/*          setIsLoggedIn(true);*/}
              {/*        }}*/}
              {/*    >*/}
              {/*      Login*/}
              {/*    </button>*/}
              {/*) : (*/}
              {/*    <Link to={"/my-order"} className={"profile-img ml_14"}>*/}
              {/*      <img src={profile} alt="user_profile" className={"user-img"} />*/}
              {/*    </Link>*/}
              {/*)}*/}
            </div>
          </div>
        </div>
      </nav>
        {/* Bootstrap Login Modal */}
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

              <div className="login">
                <div className="login-header mb_80 d-flex align-items-center justify-content-between gap-2">
                  <div className="d-flex align-items-center">
                    <h5 className={'fs_20 fw_400 text-black m-0 mr_6'}>Welcome to</h5>
                    <img src={logo} alt="Refined Grains" className="logo" />
                  </div>
                  <p className={'fs_13 fw_400 text-color'}>
                    No Account ?
                    <a href="#">Log in</a>
                  </p>
                </div>

                <div className="login-body">
                  <h2 className={'fs_55 fw_500 text-black lh-1 mb_98'}> Log in </h2>
                  <label className="label d-block fs_24 fw_600 mb_38">
                    Enter your mobile number
                  </label>

                  <div className="mobile-input-wrapper d-flex align-items-center">
                    <div className="country-code-box mr_32">
                      <span className="fw-bold fs_20 fw_600 pb_10 d-block">+91</span>
                    </div>
                    <input type="text" placeholder="Mobile number" className="mobile-number-input"/>
                  </div>

                  <button className={'button btn-solid text-uppercase mt_68 d-block mx-auto'}>
                    CONTINUE<img src={RightArrow} alt="Refined Grains" className="img-fluid ml_10" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
  );
};

export default Header;
