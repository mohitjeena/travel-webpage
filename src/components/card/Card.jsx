import React from 'react'
import adventure from "../../images/adventure.jfif"
import road from "../../images/road.jpg"
import kashmir from "../../images/kashmir.jpg"
import lake from "../../images/lake.jpg"
import "./card.css"
import tajmahal from "../../images/tajmahal.jpg"
import mountain from "../../images/mountain.webp"
const Card = () => {
  return (
    <div className='card-full-container'>
       <h2>Check out these Epic Destinations!</h2>
       <div className="card-container-1">
       <div className="card" >
  <img src={kashmir} className="card-img-top card-img" alt="..."/>
  <div className="card-body">
    <p className="card-text" style={{textAlign:"center"}}>Explore the hidden beautifull place.</p>
  </div>

</div>
       <div className="card" >
  <img src={mountain} className="card-img-top card-img" alt="..."/>
  <div className="card-body">
    <p className="card-text" style={{textAlign:"center"}}>Explore the hidden beautifull place.</p>
  </div>

</div>
</div>
       <div className="card-container-2">
       <div className="card" >
  <img src={road} className="card-img-top card-img" alt="..."/>
  <div className="card-body">
    <p className="card-text">Explore the hidden beautifull place.</p>
  </div>

</div>
       <div className="card" >
  <img src={adventure} className="card-img-top card-img " alt="..."/>
  <div className="card-body">
    <p className="card-text">Explore the hidden beautifull place.</p>
  </div>

</div>
       <div className="card" >
  <img src={lake} className="card-img-top card-img " alt="..."/>
  <div className="card-body">
    <p className="card-text">Explore the hidden beautifull place.</p>
  </div>

</div>
</div>
    </div>
  )
}

export default Card
