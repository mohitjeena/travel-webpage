import React from 'react'
import "./homemainbar.css"
import natureIMG from "../../images/nature.jpg"
import { Link } from 'react-router-dom'
import world from "../../video/world.m4v"
import play from "../../images/play.svg"
import { useState } from 'react'
const HomeMainbar = () => {
  const [vid,setvid]=useState({
    src:"",
    img:natureIMG
  })

  const changeBackground=()=>{
    
   setvid({img:"",src:world })
  }
  return (
    <div className='home-mainbar' style={{backgroundImage:`url(${vid.img})`}}>
      <h1>ADVENTURE AWAITS</h1>
      <div className="video-container">
      <video autoPlay loop muted src={vid.src}></video></div>
      <h4>What are you waiting for?</h4>
      <div className="home-mainbar-btn">
      <button><Link to="/travel-webpage/home" style={{textDecoration:"none",color:"white"}}>GET STARTED</Link></button>
      <button onClick={changeBackground}>WATCH TRAILER <img src={play} alt="" /></button>
      </div>
    </div>
  )
}

export default HomeMainbar
