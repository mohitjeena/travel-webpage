import React from 'react'
import { Link } from 'react-router-dom'
import homeImg from "../../images/homeImg.webp"
import "./home.css"
const home = () => {
  return (
    <div className='home-container'>
        <div className="container">
          <div className="start-container m-auto p-auto">
            <div className="col-md-6">
              <h1>We Collect <br /> High Quality Leads</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus alias molestias excepturi itaque modi sit quam cumque, pariatur voluptatem labore, similique est optio dolores mollitia error adipisci, aut magnam autem culpa? Ea minus eligendi numquam vero obcaecati iste tempore cumque tenetur.</p>
              <button className='start-btn' type='submit' style={{padding:"6px 10px",borderRadius:"8px"}}><Link to="/signup" style={{textDecoration:"none",color:"white"}}>CONTACT US</Link></button>
            </div>
            <div className="col-md-6 start-img">
            <img src={homeImg} alt=""  />
            </div>
          </div>
        </div>
    </div>
  )
}

export default home
