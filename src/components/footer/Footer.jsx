import React from 'react'
import spotify from "../../images/spotify.png"

import "./footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
      <h3>Join the Adventure newsletter to receive our best vacation deals</h3>
      <p>You can unsubscribe at any time.</p>
      <div className="footer-input">
        <input type="email" placeholder='Your Email'/>
        <button className='input-btn'>Subscribe</button>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-6 col-md-3 ">
            <div>
              <h3>About Us</h3>  
              <p>How it works</p>
              <p>Testimonials</p>
              <p>Careers</p>
              <p>Investors</p>
              <p>Terms of Service</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
            <div>
               <h3>Contact Us</h3>
               <p>Contact</p>
               <p>Support</p>
               <p>Destinations</p>
               <p>Sponsorships</p>
               </div>
            </div>
            <div className="col-6 col-md-3 ">
            <div>
             <h3>Videos</h3>
             <p>Submit Video</p>
             <p>Ambassadors</p>
             <p>Agency</p>
             <p>Influencer</p>
             </div>
            </div>
            <div className="col-6 col-md-3">
            <div>
             <h3>Social Media</h3>
             <p>Instagram</p>
             <p>Facebook</p>
             <p>Youtube</p>
             <p>Twitter</p>
             </div>
            </div>
        </div></div>
        <div className="container">
        <div className="row ">
          <div className="col-6 col-sm-4 footer-column footer-logo">
          <h1>TRVL</h1>
           <img src={spotify} alt="" width="26px"/>
          </div>
          <div className="col-6 col-sm-4 footer-column">
        <p className='footer-copy'>TRVL &copy; 2022</p>
          </div>
          <div className="col-6 col-sm-4 footer-column">
          <div>
          <i class="bi bi-facebook footer-icon"></i>
          <i class="bi bi-instagram footer-icon"></i>
          <i class="bi bi-twitter footer-icon"></i>
          <i class="bi bi-linkedin footer-icon"></i>
          <i class="bi bi-youtube footer-icon"></i>
          </div>
          </div>
        </div>
        </div>
      </div>
    
  )
}

export default Footer
