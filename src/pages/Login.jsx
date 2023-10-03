import React from 'react'
import logo from '../assets/Logo zone.png'
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';




const Login = () => {

  const navigate = useNavigate();

  let handleLoginMove = () =>{
    navigate("/signup");
  }


  return (
    <>
      <div className='login_container'  container direction="row" justifyContent="center" alignItems="center">
        <div className='login_contain_box'>
          <div className='logo_img'>
            <img src={logo}/>
          </div>
          <div className='title_login_head'>
            <h2>Login</h2>
            <h3>Free register and you can enjoy it</h3>
          </div>
          <div className='form_container_login'>
            <TextField id="outlined-basic" label="Email Address" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
          </div>
          <div className='signinbtn'>
            <button>Sign In</button>
          </div>
          <div className='signup_account'>
            <Alert severity="info">Have an account?  <span onClick={handleLoginMove}>Sign Up</span></Alert>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login