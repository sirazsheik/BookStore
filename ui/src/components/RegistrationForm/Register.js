import React from "react";
import {Link} from 'react-router-dom';
import "./Register.css";

const Register=()=>{


    return(
        <div className="main-container">
            <div className="middlediv">
                <div className="imagediv">
                    <img className="image" src="/images/Bookslogo1.jpeg" alt="login"/>
                </div>
                <div className="formcontainer">
                    <div className="corner-btns">
                        <Link to="/register">
                            <button className="register-btn" type="submit">Register</button>
                        </Link>
                        <Link to="/Login">
                            <button className="login-btn" type="submit">Login</button>
                        </Link>
                    </div>
                    <div className="registrationformdiv">
                        <form className="registrationformitems">
                            <h2 className="heading">Register</h2>
                            <p className="ptag">Email ID:</p>
                            <input className="inputEle" type="email" placeholder="enter email id"/>
                            <p className="ptag">Username:</p>
                            <input className="inputEle" type="text" placeholder="enter your name"/>
                            <p className="ptag">Password:</p>
                            <input className="inputEle" type="password" placeholder="enter your password"/>
                            <p className="ptag"> Confirm Password:</p>
                            <input className="inputEle" type="password" placeholder="enter your password"/>
                            <div>
                                <button className="signup-btn" type="submit">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;