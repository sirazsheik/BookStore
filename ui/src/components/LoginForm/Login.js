import React from "react";
import {Link} from "react-router-dom";
import "./Login.css";


const Login=()=>{
  return (
    <div className="background-main">
        <div className="mainn-container">
          <div className="second-main">
            <div className="imagediv">
              <img className="image" src="/images/Bookslogo1.jpeg" alt="login"/>
            </div>
            <div className="secondHalf">
              <div className="corner-btn">
                <Link to="/Login">
                  <button className="btn-login" type="submit">Login</button>
                </Link>
                <Link to="/register">
                  <button className="btn-register" type="submit">Register</button>
                </Link>
              </div>
              <div className="loginformdiv">
                <form className="formitems">
                  <h1 className="main-heading">Login</h1>
                  <label className="h6 input-label">Username</label>
                  <input className="input" type="text" placeholder="Enter your name"/>
                  <label className="h6 input-label">Password</label>
                  <input className="input" type="password" placeholder="Enter your password"/>
                  {/* <div>
                    <button className="submit-btn" type="submit">Sign In</button>
                  </div> */}
                  <button className="submit-btn" type="submit">Sign In</button>
                  <div className="ancor">
                    <a className="anchor-link" href="#0">Forgot password?</a>
                    <a className="anchor-link" href="#0">Not a Member Yet?</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Login;