import React, { useState } from 'react'
// import Grid from '@mui/material/Grid';
import logo from '../assets/Logo zone.png'
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";

let loginData = {
  email: "",
  fullname: "",
  password: "",
  error:""
}


const SignUp = () => {

  const [userInfo,setUserInfo]= useState(loginData)
  const navigate = useNavigate();

  
  let handleLoginMove = () =>{
    navigate("/");
  }

  let handleChange = (e)=>{
    setUserInfo({
      ...userInfo,
      [e.target.name] : e.target.value
    })
  }

  let handleSubmit = ()=>{
    let {email,fullname,password ,error}= userInfo

    if(!email){
      setUserInfo({
        ...userInfo,
        error: "Please Enter a Valid Email"
      })
      return
    }
    if(!fullname){
      setUserInfo({
        ...userInfo,
        error: "Please Enter Fullname"
      })
      return
    }
    if(!password){
      setUserInfo({
        ...userInfo,
        error: "Please Enter Password"
      })
      return
    }

    if( email && password && fullname  ){
      setUserInfo({
        ...userInfo,
        email: "",
        fullname: "",
        password: "",
        error:"",
      })
    }
  }


  return (
    <>
      <div className='login_container'  >
        <div className='login_contain_box'>
          <div className='logo_img'>
            <img src={logo}/>
          </div>
          <div className='title_login_head'>
            <h2>Get started with easily register</h2>
            <h3>Free register and you can enjoy it</h3>
          </div>
          <div className='form_container_login'>
            <div className='emailform'>
              
              <TextField onChange={handleChange} value={userInfo.email} name='email' id="outlined-basic" label="Email Address" variant="outlined" />
              {userInfo.error.includes("Email") && <Alert className='email_alert' severity="error">{userInfo.error}</Alert>} 
            </div>
            <div className='fullnameform'>
              <TextField onChange={handleChange} value={userInfo.fullname} name='fullname' id="outlined-basic" label="Full Name" variant="outlined" />
              {userInfo.error.includes("Fullname") && <Alert className='email_alert' severity="error">{userInfo.error}</Alert>} 
            </div>
            <div className='passwordform'>
              <TextField onChange={handleChange} value={userInfo.password} name='password' id="outlined-basic" label="Password" variant="outlined" />
              {userInfo.error.includes("Password") && <Alert className='email_alert' severity="error">{userInfo.error}</Alert>} 
            </div>
          </div>
          <div className='signinbtn'>
            <button onClick={handleSubmit}>Sign In</button>
          </div>
          <div className='signup_account'>
            <Alert  severity="info">Have an account?  <span onClick={handleLoginMove}>Login</span></Alert>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp