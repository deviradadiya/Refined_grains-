import React from "react";
import "./Verify.css";
import { Link } from "react-router-dom";
const Verify = () => {
  return (
    <div>
      {" "}
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OTP Verification</title>
        <link rel="stylesheet" href="style.css" />
        <div className="otp-container">
          <header className="otp-header">
            <p>Welcome to</p>
          </header>
          <main className="otp-box">
            <h2>Verification</h2>
            <label className="otp-label">Enter your OTP</label>
            <div className="otp-input-group">
              <label htmlFor="otp" className="otp-text">
                OTP
              </label>
              <input type="text" id="otp" placeholder="" />
            </div>
            <div className="buttons">
              <button className="submit-btn">
                <Link
                  to="/Home"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Submit
                </Link>
                <span className="arrow">➜</span>
              </button>
            </div>
          </main>
        </div>
      </>
    </div>
  );
};

export default Verify;
