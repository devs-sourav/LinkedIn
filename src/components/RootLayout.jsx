import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../assets/Logo zone.png'
import navProfile from '../assets/navprofile.png'
import { HiRss } from 'react-icons/hi';
import { FiUsers,FiBriefcase, FiMoreHorizontal } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

const RootLayout = () => {
  const navigate = useNavigate();


  let handleFeedMove = () =>{
    navigate("/feed")
  }
  let handleProfileMOve = () =>{
    navigate("/profile/info")
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
                <li>
                  <div className='item' onClick={handleFeedMove}>
                    <span>
                      <HiRss/>
                    </span>
                    <h3>Feed</h3>
                  </div>
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
          </div>
          <div className='nav_dots_cont'>
              <div className='dot_item'>
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