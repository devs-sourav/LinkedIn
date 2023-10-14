import React from 'react'
import { FiImage,FiSend,FiMoreHorizontal } from 'react-icons/fi';
import UserPic from '../assets/user1.png'
import status1 from '../assets/status1.png'
import cover from '../assets/cover.png'
import profilepic from '../assets/Ellipse.png'
import { useNavigate} from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();

  let handleMoveProfile = () =>{

    navigate("/social/profile/info")

  }



  return (
    <>
      <div className='container'>
        <div className='feed_container'>
          <div className='feed_right_box'>
            <div className='post_box'>
              <h3>new post</h3>
              <div className='input_box_con'>
                <textarea placeholder='What’s on your mind?'/>
                <div className='text_icon_list'>
                  <span className='images_icon'><FiImage/></span>
                  <span className='images_icon_send'><FiSend/></span>
                </div>
              </div>
            </div>
            <div className='status_box'>
              <div className='status_fil'>
                <div className='dot_part'>
                  <span><FiMoreHorizontal/></span>
                </div>
              </div>
              <div className='status_info'>
                <div className='status_info_box_cont'>
                  <div className='status_cont_box'>
                    <div className='status_user'>
                      <div className='user_image'>
                        <img src={UserPic}/>
                      </div>
                      <div className='user_text'>
                        <h3>Theresa Steward</h3>
                        <h4>iOS developer</h4>
                      </div>
                    </div>
                  </div>
                  <div className='status_time'>
                    <h3>4 hours ago</h3>
                  </div>
                </div>
                <p>
                  What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).
                </p>

              </div>
            </div>
            <div className='status_box'>
              <div className='status_fil'>
                <div className='dot_part'>
                  <span><FiMoreHorizontal/></span>
                </div>
              </div>
              <div className='status_info'>
                <div className='status_info_box_cont'>
                  <div className='status_cont_box'>
                    <div className='status_user'>
                      <div className='user_image'>
                        <img src={UserPic}/>
                      </div>
                      <div className='user_text'>
                        <h3>Theresa Steward</h3>
                        <h4>iOS developer</h4>
                      </div>
                    </div>
                  </div>
                  <div className='status_time'>
                    <h3>4 hours ago</h3>
                  </div>
                </div>
                <p>How’s your day going, guys?</p>
                <div className='status_img'>
                  <img src={status1}/>
                </div>

              </div>
            </div>
          </div>
          <div className='feed_left_box'>
            <div className='prof_box_status' onClick={handleMoveProfile}>
              <div className='prof_box12'>
                <img src={cover}/>
                <div className='prof_status_small_img_box'>
                  <div className='prof_status_small_img_box11'>
                    <img src={profilepic}/>
                  </div>
                </div>
              </div>
              <div className='prof_box21'>
                <h3>Dmitry Kargaev</h3>
                <p>Freelance UX/UI designer, 80+ projects  in web design, mobile apps (iOS & android) and creative projects. Open to offers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feed