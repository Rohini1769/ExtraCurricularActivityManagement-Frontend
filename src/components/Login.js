import React from 'react';
import { Link } from 'react-router-dom';
import art from '../assets/images/art.png'
import './styles.css'
const preventRefresh = (e) => {
	e.preventDefault();
};

export default function Login() {
	return (
		<div className="loginpage">
			<div className='loginpage-image'>
        <img className="loginlogo"src={art}alt="login"/>
            </div>
            <div className='login-container'>
                <p className='login-text'>Login</p>
                <div className="login-input-class">
                <input className="login-input"type="text" placeholder='Enter Email'/>
                <input className="login-input"type="password" placeholder='Enter Email'/>
                <button className='login-button'>Login</button>
                <p>Don't have an account<a href="/signup"><u className='login-signup'>Sign Up Here!</u></a></p>
                </div>
            </div>
			
		</div>
	);
}
