import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer-contact'>
            <p className='footer-contact-us'>Contact Us</p>
            <p> Mobile:630029423</p>
            <p>gmail:studentiva@gmail.com</p>
        </div>
        <div className='footer-subscribe'>
            <div className='footer-subscribe-header'>
                <p>Subscribe For More Details</p>
            </div>
            <div className='footer-subscribe-card'>
                <input className='footer-input' type='text' placeholder='Enter email'/>
                <button className="footer-button">Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Footer