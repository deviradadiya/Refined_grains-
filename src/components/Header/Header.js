import React from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/images/profile.jpg";

const Header = () => {
  const HeaderMenu = [
    { name: "Home", path: "/home" },
    { name: "Shop", path: "/shop" },
    { name: "Customise Wheat", path: "/customize-wheat" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg p-0 position-fixed w-100 z-3">
        <div className="container">
          <div className={"nav-background"}>
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

            {/* Menu items */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                {HeaderMenu.map((item, idx) => (
                  <li className={"nav-item"}>
                    <NavLink key={idx} to={item.path} className="nav-link">
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              {/* Login Button */}
              <button className="login-btn">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  LOGIN
                </Link>
              </button>
              <div className={"profile-img pl_14"}>
                <img src={profile} alt="user_profile" className={"user-img"} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
