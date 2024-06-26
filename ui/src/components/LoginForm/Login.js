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
                  <p className="h6">Username</p>
                  <input className="input" type="text" placeholder="enter your name"/>
                  <p className="h6">Password</p>
                  <input className="input" type="password" placeholder="enter your password"/>
                  <div>
                    <button className="submit-btn" type="submit">Sign In</button>
                  </div>
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
