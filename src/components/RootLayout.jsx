import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../assets/Logo zone.png'
import navProfile from '../assets/navprofile.png'
import { HiRss } from 'react-icons/hi';
import { FiUsers,FiBriefcase, FiMoreHorizontal } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FiLogOut } from 'react-icons/fi';

const RootLayout = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [feedBtn,setFeedBtn] = useState(true)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  let handleFeedMove = () =>{
    navigate("/social/feed")
  }
  let handleProfileMOve = () =>{
    navigate("/social/profile/info")
  }
  let handleLogOut = () =>{
    navigate("/")
  }
  let handleFeedBtn = () =>{
    setFeedBtn(true)
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
                <li onClick={handleFeedMove}>
                  {
                    feedBtn ?
                    <div className='item' onClick={handleFeedBtn}>
                      <span>
                        <HiRss/>
                      </span>
                      <h3>Feed</h3>
                    </div>
                    :
                    <div className='item' onClick={handleFeedBtn}>
                      <span>
                        <HiRss/>
                      </span>
                      <h3>Feed</h3>
                    </div>
                  }

                </li>

                <li>
                  <div className='item'>
                    <span>
                      <FiUsers/>
                    </span>
                    <h3>Network</h3>
                  </div>
                </li>

                <li>
                  <div className='item'>
                    <span>
                      <FiBriefcase/>
                    </span>
                    <h3>Jobs</h3>
                  </div>
                </li>
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