import React from 'react'
import coverpic from '../assets/cover.png'
import { useNavigate } from "react-router-dom";
import friend1 from '../assets/friend1.png'
import userPic from '../assets/Ellipse.png'
import { FiEdit, FiNavigation } from 'react-icons/fi';
import { Outlet } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  let handleProfileMove = () =>{
    navigate("/profile/info")
  }
  let handleFriendMove = () =>{
    navigate("/profile/friend")
  }
  let handlePostMove = () =>{
    navigate("/profile/post")
  }



  return (
    <>
      
      <section className='profile_cont'>
        <div className='container'>
          <div className='profile_main_cont'>
            <div className='profile_left_container'>
              <div className='paddingBG'></div>
              <div className='profile_main_item'>
                <div className='cover_image'>
                  <img src={coverpic}></img>
                  <div className='edit_profile'>
                    <FiEdit/>
                    <h3>Edit Profile</h3>
                  </div>
                </div>
                <div className='profile_main_item_info'>
                  <div className='profile_info'>
                    <div className='profile_info_img'>
                      <div className='profile_img1'>
                        <img src={userPic}/>
                      </div>
                    </div>
                    <div className='profile_details'>
                      <div className='prof_heading'>
                        <h2>Dmitry Kargaev</h2>
                        <h3><span><FiNavigation/></span> Saint Petersburg, Russian Federation</h3>
                      </div>
                      <p>Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.</p>
                      <button className='contact_btn'>Contact info</button>
                    </div>
                  </div>
                  
                </div>
                <div className='erere'></div>
              </div>
              <div className='profile_nav_container'>
                  <div className='menu_prof'>
                    <div className='profile_nav_menu'>
                      <div className='profile_nav_item active' onClick={handleProfileMove}>
                        <h3>Profile</h3>
                      </div>
                      <div className='profile_nav_item' onClick={handleFriendMove}>
                        <h3>Friends</h3>
                      </div>
                      <div className='profile_nav_item last_item '  onClick={handlePostMove}>
                        <h3>Post</h3>
                      </div>
                    </div>

                </div>
              </div>
              <Outlet/>

            </div>
            <div className='profile_right_container'>
              <div className='paddingBG'></div>
              <section className='friends'>
                <div className='friend_head'>
                  <h3>10 Friends</h3>
                  <h3>view all</h3>
                </div>
                <div className='friendd_list'>
                  <div className='friend_item'>
                    <div className='friend_img'>
                      <img src={friend1}/>
                    </div>
                    <div className='friend_name'>
                      <h3>Darlene Black</h3>
                      <p>HR-manager, 10 000 connec...</p>
                    </div>
                  </div>
                  <div className='friend_item'>
                    <div className='friend_img'>
                      <img src={friend1}/>
                    </div>
                    <div className='friend_name'>
                      <h3>Darlene Black</h3>
                      <p>HR-manager, 10 000 connec...</p>
                    </div>
                  </div>
                  <div className='friend_item'>
                    <div className='friend_img'>
                      <img src={friend1}/>
                    </div>
                    <div className='friend_name'>
                      <h3>Darlene Black</h3>
                      <p>HR-manager, 10 000 connec...</p>
                    </div>
                  </div>
                  <div className='friend_item'>
                    <div className='friend_img'>
                      <img src={friend1}/>
                    </div>
                    <div className='friend_name'>
                      <h3>Darlene Black</h3>
                      <p>HR-manager, 10 000 connec...</p>
                    </div>
                  </div>
                </div>

              </section>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home