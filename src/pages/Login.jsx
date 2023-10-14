import React, { useState } from 'react'
import logo from '../assets/Logo zone.png'
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { RxEyeOpen, RxEyeNone } from 'react-icons/rx';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import {userData} from '../slices/user/userSlice'


let loginData = {
  email: "",
  password: "",
  error:"",
  eye:true,
  loading:false
}



const Login = () => {

  const auth = getAuth();
  const [userInfo,setUserInfo]= useState(loginData)
  const navigate = useNavigate();
  const dispatch = useDispatch()



  let handleLoginMove = () =>{
    navigate("/signup");
    toast('Welcome to Sign Up Page', {
      position: "top-right",
      autoClose: 800,
      limit:1,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  let handleChange = (e)=>{
    setUserInfo({
      ...userInfo,
      [e.target.name] : e.target.value,
    })
  }

  let handleSubmit = ()=>{
    let {email,password }= userInfo
// Use regex to remove leading spaces
    email = email.replace(/^\s+/g, '');
    password = password.replace(/^\s+/g, '');

    if(!email){
      setUserInfo({
        ...userInfo,
        error: "Please Enter a Valid Email",
        email:""
      })
      return
    }
    if(!password){
      setUserInfo({
        ...userInfo,
        error: "Please Enter Password",
        password:""
      })
      return
    }

    if( email && password ){
      setUserInfo({
        ...userInfo,
        loading:true
      })
      signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        // Signed in 
        // setUserInfo()
        // console.log(user.user)
        localStorage.setItem("user",JSON.stringify(user.user))
        dispatch(userData(user.user))
        navigate('/social/feed')
        setUserInfo({
          ...userInfo,
          email: "",
          password: "",
          error:"",
          loading:false
        })
        
        
        toast.success('Login Successful ❤️', {
          position: "top-right",
          autoClose: 1000,
          limit:1,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        
        // ...
      })
      .catch((error1) => {
        const errorCode = error1.code;
        console.log(errorCode)
        setUserInfo({
          ...userInfo,
          email: "",
          password: "",
          error:"",
          loading:false
        })
      });



    }
  }
  let handleEye = ()=>{
    if(userInfo.eye){
      setUserInfo({
        ...userInfo,
        eye: false
      })
    }else{
      setUserInfo({
        ...userInfo,
        eye: true
      })
    }

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
            <div className='emailform'>
              <TextField onChange={handleChange} value={userInfo.email} id="outlined-basic" type='email' label="Email Address" name='email'  variant="outlined" />
              {userInfo.error.includes("Email") && <Alert className='email_alert' severity="error">{userInfo.error}</Alert>} 
            </div>
            <div className='passwordform'>
              <TextField id="outlined-basic" value={userInfo.password}  onChange={handleChange} type={(userInfo.eye )? 'password' : 'text'} name='password'  label="Password" variant="outlined" />
              {userInfo.error.includes("Password") && <Alert className='email_alert' severity="error">{userInfo.error}</Alert>}
              {userInfo.eye ?
              <span onClick={handleEye} className='eyesign'><RxEyeNone/></span>
              :
              <span onClick={handleEye} className='eyesign'><RxEyeOpen/></span>
              }
            </div>
          </div>
          <div className='signinbtn'>
            {
              userInfo.loading ?
              <LoadingButton endIcon={<SendIcon />} loading={userInfo.loading} loadingPosition="end" variant="contained">
                <span>Send</span>
              </LoadingButton>
              :
              <button onClick={handleSubmit} >Sign In</button>
            }


          </div>
          <div className='signup_account'>
            <Alert severity="info">Have no account?  <span onClick={handleLoginMove}>Sign Up</span></Alert>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login