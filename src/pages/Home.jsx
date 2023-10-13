import React from 'react'
import coverpic from '../assets/cover.png'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import exp1 from '../assets/exp1.png'
import exp2 from '../assets/exp2.png'
import edu1 from '../assets/edu1.png'
import friend1 from '../assets/friend1.png'
import userPic from '../assets/Ellipse.png'
import { FiEdit, FiNavigation } from 'react-icons/fi';

const Home = () => {
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
              <section className='profile_nav_container'>

                  <div className='menu_prof'>
                    <div className='profile_nav_menu'>
                      <div className='profile_nav_item active'>
                        <h3>Profile</h3>
                      </div>
                      <div className='profile_nav_item'>
                        <h3>Friends</h3>
                      </div>
                      <div className='profile_nav_item last_item '>
                        <h3>Post</h3>
                      </div>
                    </div>

                </div>
              </section>
              <section className='about'>
                  <div className='about_container'>
                    <h3 className='about_head'>About</h3>
                    <p>I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites. </p>
                    <h4 className='btn_see_more'>See more</h4>
                  </div>
              </section>
              <section className='projects'>
                <h3 className='about_head'>Projects <span>3 of 12</span></h3>
                <div className='projects_menu'>
                  <div className='projects_menu_item'>
                    <img src={project1}/>
                  </div>
                  <div className='projects_menu_item'>
                    <img src={project2}/>
                  </div>
                  <div className='projects_menu_item'>
                    <img src={project3}/>
                  </div>
                </div>
              </section>
              <section className='experience'>
                <h3 className='about_head'>Experience</h3>
                <div className='experience_menu'>
                  <div className='experience_item'>
                    <div className='exp_img'>
                      <img src={exp1}/>
                    </div>
                    <div className='exp_info'>
                      <h3>Freelance UX/UI designer</h3>
                      <div className='ex_info_inner_1'>
                        <h3>Self Employed</h3>
                        <h3 className='fddfdf'>Around the world</h3>
                      </div>
                      <div className='ex_info_inner_1'>
                        <h3 className='fddfdf'>Jun 2016 — Present</h3>
                        <h3 className='fddfdddf'>3 yrs 3 mos</h3>
                      </div>
                      <p>Work with clients and web studios as freelancer.  Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.</p>
                    </div>
                  </div>
                  <div className='experience_item'>
                    <div className='exp_img'>
                      <img src={exp2}/>
                    </div>
                    <div className='exp_info'>
                      <h3>Freelance UX/UI designer</h3>
                      <div className='ex_info_inner_1'>
                        <h3>Self Employed</h3>
                        <h3 className='fddfdf'>Around the world</h3>
                      </div>
                      <div className='ex_info_inner_1'>
                        <h3 className='fddfdf'>Jun 2016 — Present</h3>
                        <h3 className='fddfdddf'>3 yrs 3 mos</h3>
                      </div>
                      <p>Work with clients and web studios as freelancer.  Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.</p>
                    </div>
                  </div>
                  <div className='experience_item'>
                    <div className='exp_img'>
                      <img src={exp1}/>
                    </div>
                    <div className='exp_info'>
                      <h3>Freelance UX/UI designer</h3>
                      <div className='ex_info_inner_1'>
                        <h3>Self Employed</h3>
                        <h3 className='fddfdf'>Around the world</h3>
                      </div>
                      <div className='ex_info_inner_1'>
                        <h3 className='fddfdf'>Jun 2016 — Present</h3>
                        <h3 className='fddfdddf'>3 yrs 3 mos</h3>
                      </div>
                      <p>Work with clients and web studios as freelancer.  Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className='experience experience11'>
                <h3 className='about_head'>Education</h3>
                <div className='experience_menu'>
                  <div className='experience_item'>
                    <div className='exp_img'>
                      <img src={edu1}/>
                    </div>
                    <div className='exp_info'>
                      <h3>Moscow State Linguistic University</h3>
                      <div className='ex_info_inner_1'>
                        <h3>Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance</h3>
                      </div>
                      <div className='ex_info_inner_1'>
                        <h3 className='fddfdf'>2013 — 2017</h3>
                      </div>
                      <p>Additional English classes and UX profile courses​.</p>
                    </div>
                  </div>
                </div>
              </section>
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