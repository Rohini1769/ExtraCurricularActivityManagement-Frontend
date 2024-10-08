import React from "react";
import { Link } from "react-router-dom";
import art from '../assets/images/art.png'
export default function Signup() {
  return (
   <div>
    <div className="loginpage">
			<div className='loginpage-image'>
        <img className="loginlogo"src={art}alt="login"/>
            </div>
            <div className='login-container'>
                <p className='login-text'>Sing Up!</p>
                <div className="login-input-class">
                <input className="login-input"type="text" placeholder='Enter Name'/>
                <input className="login-input"type="password" placeholder='Enter Email'/>
                <input className="login-input"type="password" placeholder='Enter Password'/>
                <button className='login-button'>Login</button>
                <p>Already have an account?<a href="/login"><u className='login-signup'>Login Here!</u></a></p>
                </div>
            </div>
            </div>
   </div>
  );
}
