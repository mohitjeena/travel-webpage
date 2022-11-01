import React from 'react'
import "./navbar.css"
import Home from "../pages/Home"
import navIcon from "../../images/navIcon.svg"
import {Link,Routes,Route} from "react-router-dom"
import spotify from "../../images/spotify.png"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  web-navbar">
  <div className="container-fluid container-md">
    <span className="navbar-brand mb-0 h1 web-navbar-logo-container" href="#">TRVL <img src={spotify} alt="" width="30" className='ms-1' /></span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse web-navbar-list-container" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
        <li className="nav-item">
          <a className="nav-link active me-3" aria-current="page" href="#"><span><Link to="/travel-webpage" style={{color:"white",textDecoration:"none"}}>Home</Link></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-3" aria-current="page" href="#"><span><Link to="/travel-webpage/service" style={{color:"white",textDecoration:"none"}}>Services</Link></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-3" aria-current="page" href="#"><span><Link to="/travel-webpage/products" style={{color:"white",textDecoration:"none"}}>Products</Link></span></a>
        </li>
     
      
        <button className='web-navbar-btn'><Link to="/travel-webpage/signup" style={{color:"white",textDecoration:"none"}}>SIGN UP</Link></button>
     
       
      </ul>
     
    </div>
  </div>
</nav>

  )
}

export default Navbar

{/* <div classNameName="web-navbar">
<div classNameName='web-navbar-container'>
    <div classNameName="web-navbar-logo-container" >
 <h2> TRVL</h2> <img src={spotify} alt="" width="30" />
    </div>
    <div classNameName="web-navbar-list-container">
<ul>
      
       <li> <span><Link to="/" style={{color:"white",textDecoration:"none"}}>Home</Link></span></li>
       <li> <span><Link to="/service" style={{color:"white",textDecoration:"none"}}>Services</Link></span></li>
       <li> <span><Link to="/products" style={{color:"white",textDecoration:"none"}}>Products</Link></span></li>
     </ul>
<button classNameName='web-navbar-btn'><Link to="/signup" style={{color:"white",textDecoration:"none"}}>SIGN UP</Link></button>


 
    
    </div>
</div>
</div> */}