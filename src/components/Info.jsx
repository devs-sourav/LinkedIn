import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import exp1 from '../assets/exp1.png'
import exp2 from '../assets/exp2.png'
import edu1 from '../assets/edu1.png'

const Info = () => {
  return (
    <>
                      <div className='about'>
                  <div className='about_container'>
                    <h3 className='about_head'>About</h3>
                    <p>I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites. </p>
                    <h4 className='btn_see_more'>See more</h4>
                  </div>
              </div>
              <div className='projects'>
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
              </div>
              <div className='experience'>
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
              </div>
              <div className='experience experience11'>
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
              </div>
    </>
  )
}

export default Info