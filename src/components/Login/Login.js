import React from "react";
import "./Login.css";

const Login = () => {
  return (
      <div className="login-container">
           <div className="nav-container">
              <h1>Welcome to</h1> 
              <h2>No Account ? <br/> <span>Log in</span> </h2>
        </div>
      <h3 className="log-in">Log in</h3>
      <label className="label">Enter your mobile number</label>
      <div className="input-group">
        <span className="country-code">+91</span>
        <input type="text" placeholder="Mobile number" />
      </div>
      <button className="continue-btn">
        CONTINUE <span className="arrow">➜</span>
      </button>
    </div>
  );
};

export default Login;
