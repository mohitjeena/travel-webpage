import React from 'react'
import playstation from "../../images/playstation.jpg"
import bape from "../../images/bape.jpg"
import cardLogo from "../../images/cardLogo.jpg"
import "./common.css"
const Common = (props) => {
    const obj={
        backgroundImage:`url(${props.imgURL})`
    }
  return (
    <div className='common-container' style={obj}>
       <div>
      <h1>{props.title}</h1>
      <div className="container">
      
        <div className="row">
  <div className="col-md-4 col-sm-6">
    <div className="card">
      <div className="card-body">
      <img src={cardLogo} alt="" width="55"/>
        <h5 className="card-title" style={{color:"green",fontWeight:"500"}}>SUMMER TRAVEL</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Check Out</a>
      </div>
    </div>
  </div>
  <div className="col-md-4 col-sm-6">
    <div className="card">
      <div className="card-body">
      <img src={bape} alt="" width="70"/>
        <h5 className="card-title" style={{color:"green",fontWeight:"500"}}>ACTIVE TOURS</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Check Out</a>
      </div>
    </div>
  </div>
  <div className="col-md-4 col-sm-6">
    <div className="card">
      <div className="card-body">
      <img src={bape} alt="" width="70"/>
        <h5 className="card-title" style={{color:"green",fontWeight:"500"}}>FLIGHT RESEARCH</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Check Out</a>
      </div>
    </div>
  </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Common
