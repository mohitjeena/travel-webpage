import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "./signup.css"
import spotify from "../../images/spotify.png"
const Signup = () => {
  const [isSignUp,setIsSignUp]=useState(true)
  const [val,setVal]=useState({
    name:"",
    email:"",
    password:""
  })
  const formSubmit=(e)=>{
    let stat=isSignUp ? "your name is "+val.name+" and ":" ";
    alert(`${stat} your email id is ${val.email} and ${val.password} is your password`)
  }
  const change=()=>{
     setIsSignUp(! isSignUp)
  }
  const changeEvent=(event)=>{
          const {name,value}=event.target;
          setVal(preValue =>{
          return{...preValue,
            [name]:value
          }
          })
  }
  return (
    <div className='signup-container'>
    <div className="signup-container-logo">
       <img src={spotify} alt="" width="32px"/>
       {isSignUp ? 
       <h3>SignUp</h3>: <h3>LogIn</h3>}
       </div>
       <form >
       <div className="signup-container-div">
       {isSignUp &&
       <div>
       <label htmlFor="name">Display Name</label>
        <input onChange={changeEvent} type="text" id="name" name='name' value={val.name}/>
        </div>}
        <div>
       <label htmlFor="email">Email</label>
   
        <input onChange={changeEvent} type="email" id="email" name='email' value={val.email}/>
        </div>
        <div>
       
       <label htmlFor="password">Password</label>
       
        <input onChange={changeEvent} type="password" id="password" name='password' value={val.password}/>
        
        {!isSignUp && <p style={{color:"skyblue",marginBottom:"0px",cursor:"pointer"}}>forgot password?</p>}
     
        </div>
      
         <button onClick={formSubmit} type='submit' className='signup-btn'>{isSignUp ? "SignUp" :"LogIn"}</button>
       </div>
       </form>
       <p className='signup-link'>
       {isSignUp ?
       "Already have an account?" : "I haven't an account." } <Link onClick={change} style={{textDecoration:"none"}}>{isSignUp ?"Log in":"signUp"}</Link></p>
    </div>
  )
}

export default Signup
