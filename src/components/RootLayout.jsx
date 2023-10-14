import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../assets/Logo zone.png'
import navProfile from '../assets/navprofile.png'
import { HiRss } from 'react-icons/hi';
import { FiUsers,FiBriefcase, FiMoreHorizontal } from 'react-icons/fi';
import { useNavigate, useLocation } from "react-router-dom";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FiLogOut } from 'react-icons/fi';

let menus = {
  feedBtn:true,
  networkBtn:null,
  jobBtn:null,
}
let flag=1

const RootLayout = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [btnList,setBtnList] = useState(menus)
  const location = useLocation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  


  if(location.pathname == '/social/feed' && flag ==1 ){
    setBtnList({
      feedBtn:true,
      networkBtn:false,
      jobBtn:false
    })
    flag++
  }
  if(location.pathname == '/social/network' && flag==1 ){
    setBtnList({
      feedBtn:false,
      networkBtn:true,
      jobBtn:false
    })
    flag++
  }
  if(location.pathname == '/social/job' && flag==1 ){
    setBtnList({
      feedBtn:false,
      networkBtn:false,
      jobBtn:true
    })
    flag++
  }

  let handleFeedMove = () =>{
    navigate("/social/feed")
    setBtnList({
      feedBtn:true,
      networkBtn:false,
      jobBtn:false
    })
  }

  let handleNetworkMove = () =>{
    navigate("/social/network")
    setBtnList({
      feedBtn:false,
      networkBtn:true,
      jobBtn:false
    })
  }
  let handlePostMove = () =>{
    navigate("/social/job")
    setBtnList({
      feedBtn:false,
      networkBtn:false,
      jobBtn:true
    })
  }
  let handleProfileMOve = () =>{
    navigate("/social/profile/info")
    setBtnList({
      feedBtn:false,
      networkBtn:false,
      jobBtn:false
    })
  }
  let handleLogOut = () =>{
    navigate("/")
  }


  return (
    <>
      <nav className='navbar'>
        <div className='navbar_container'>
          <div className='nav_image'>
              <img src={Logo}/>
          </div>
          <div className='navbar_menu_container'>
            <ul className='Menu_container'>
              {
                btnList.feedBtn ?
                <li className='active' onClick={handleFeedMove}>
                  <div className='item'>
                    <span>
                      <HiRss/>
                    </span>
                    <h3>Feed</h3>
                  </div>
                </li>
                :
                <li onClick={handleFeedMove}>
                  <div className='item'>
                    <span>
                      <HiRss/>
                    </span>
                    <h3>Feed</h3>
                  </div>
                </li>
              }
              {
                btnList.networkBtn ?
                <li className='active' onClick={handleNetworkMove}>
                  <div className='item'>
                    <span>
                      <FiUsers/>
                    </span>
                    <h3>Network</h3>
                  </div>
                </li>
                :
                <li onClick={handleNetworkMove}>
                  <div className='item'>
                    <span>
                      <FiUsers/>
                    </span>
                    <h3>Network</h3>
                  </div>
                </li>
              }
              {
                btnList.jobBtn ?
                <li className='active' onClick={handlePostMove}>
                  <div className='item'>
                    <span>
                      <FiBriefcase/>
                    </span>
                    <h3>Jobs</h3>
                  </div>
                </li>
                :
                <li onClick={handlePostMove}>
                  <div className='item'>
                    <span>
                      <FiBriefcase/>
                    </span>
                    <h3>Jobs</h3>
                  </div>
                </li>
              }
            </ul>
            <div className='profile_nav' onClick={handleProfileMOve}>
              <div className='profile_nav_img'>
                <img src={navProfile}/>
              </div>
              <h3>Sourav Acherjee</h3>
              <div>

              </div>
            </div>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <h3 onClick={handleLogOut} className='logout_btn'><FiLogOut/><span>Logout</span></h3>
            </Popover>
          </div>
          <div className='nav_dots_cont'>
              <div className='dot_item' onClick={handleClick}>
                <span>
                  <FiMoreHorizontal/>
                </span>
                <h3>Other</h3>
              </div>
          </div>
        </div>

      </nav>
      <div className='hsghdfhgsfdgh'>
        <Outlet/>
      </div>
    </>

  )
}

export default RootLayout