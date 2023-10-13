import React, { useState } from 'react'
// import Grid from '@mui/material/Grid';
import logo from '../assets/Logo zone.png'
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { RxEyeOpen, RxEyeNone } from 'react-icons/rx';
import { getDatabase, ref, set } from "firebase/database";
import { toast } from 'react-toastify';



let loginData = {
  email: "",
  fullname: "",
  password: "",
  error:"",
  eye:true,
  loading:false
}


const SignUp = () => {

  const [userInfo,setUserInfo]= useState(loginData)
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();

  
  let handleLoginMove = () =>{
    navigate("/signin");
    toast('Welcome to Login Page', {
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
      [e.target.name] : e.target.value
    })
  }

  let handleSubmit = ()=>{
    let {email,fullname,password }= userInfo
  // Use regex to remove leading spaces
    email = email.replace(/^\s+/g, '');
    fullname = fullname.replace(/^\s+/g, '');
    password = password.replace(/^\s+/g, '');

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


    if( email && password && fullname){
      setUserInfo({
        ...userInfo,
        loading:true,
      })
      createUserWithEmailAndPassword(auth, email, password).then((user) =>{
          updateProfile(auth.currentUser, {
            displayName: userInfo.fullname, 
            photoURL: "https://i.ibb.co/VBsbBpv/avatar.png"
          }).then(() => {
            console.log(user)
              set(ref(db, 'users/'+ user.user.uid), {
                fullname: userInfo.fullname,
                email: userInfo.email,
                profile_picture : user.user.photoURL
              });
          }).then(()=>{
            navigate('/signin')
            setUserInfo({
              ...userInfo,
              email: "",
              fullname: "",
              password: "",
              error:"",
              loading:false
            })
            toast('SignUp Successful ❤️', {
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
          })
        })


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
              <TextField onChange={handleChange} type='text' value={userInfo.email} name='email' id="outlined-basic" label="Email Address" variant="outlined" />
              {userInfo.error.includes("Email") && <Alert className='email_alert' severity="error">{userInfo.error}</Alert>} 
            </div>
            <div className='fullnameform'>
              <TextField onChange={handleChange} type='email' value={userInfo.fullname} name='fullname' id="outlined-basic" label="Full Name" variant="outlined" />
              {userInfo.error.includes("Fullname") && <Alert className='email_alert' severity="error">{userInfo.error}</Alert>} 
            </div>
            <div className='passwordform'>
              <TextField onChange={handleChange} type={userInfo.eye ? 'password' : 'text'} value={userInfo.password} name='password' id="outlined-basic" label="Password" variant="outlined" />
              {userInfo.eye ?
              <span onClick={handleEye} className='eyesign'><RxEyeNone/></span>
              :
              <span onClick={handleEye} className='eyesign'><RxEyeOpen/></span>
              }
              {userInfo.error.includes("Password") && <Alert className='email_alert' severity="error">{userInfo.error}</Alert>} 
            </div>
          </div>
          <div className='signinbtn'>
            {
              userInfo.loading ?
              <LoadingButton endIcon={<SendIcon />} loading={userInfo.loading} loadingPosition="end" variant="contained">
                <span>Send</span>
              </LoadingButton>
              :
              <button onClick={handleSubmit} >Sign Up</button>
            }
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