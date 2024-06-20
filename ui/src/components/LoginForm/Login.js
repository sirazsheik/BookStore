import React from "react";


const Login=()=>{

  return (

    <div className="mainn-container">

      <div className="second-main">

        <div className="imagediv">

          <img className="image" src="/images/Bookslogo1.jpeg" alt="login"/>

        </div>

        <div className="secondHalf">

          <div className="corner-btn">

             <button className="btn-login" type="submit">Login</button>

             <button className="btn-register" type="submit">Register</button>

          </div>

          <div className="loginformdiv">

            <form className="formitems">

              <h1 className="h1">Login</h1>

              <p className="h6">Username</p>

              <input className="input" type="text" placeholder="enter your name"/>

              <p className="h6">Password</p>

              <input className="input" type="password" placeholder="enter your password"/>

              <div>

                <button className="submit-btn" type="submit">Sign In</button>

              </div>

              <div className="ancor">

                <a href="#0">Forgot password?</a>

                <div className="member-anchor">

                  <a href="#0">Not a Member Yet?</a>

                </div>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Login;
