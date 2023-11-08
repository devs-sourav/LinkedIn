import React, { useState,useEffect } from 'react'
import coverpic from '../assets/cover.jpg'
import { useNavigate,Outlet, useLocation } from "react-router-dom";
import { getDatabase, ref, set,push,onValue,remove } from "firebase/database";
import friend1 from '../assets/friend1.png'
import userPic from '../assets/profile.jpg'
import { FiEdit, FiNavigation,FiUserPlus } from 'react-icons/fi';
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

let flag=1

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Home = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const userData = useSelector((state) => state.loggedUser.loginUser)
  const [profilebtn,setProfileBtn] = useState(true)
  const [friendBtn,setFriendBtn] = useState(null)
  const [postBtn,setPostBtn] = useState(null)
  const [bioText,setBioText] = useState('')
  const [biolist,setBioList] = useState('')
  const [friendList,setFriendList] = useState([])
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
  const db = getDatabase();


  useEffect(()=>{
    const bioref = ref(db, 'bio/');
    onValue(bioref, (snapshot) => {
      // const data = snapshot.val();
      let arr =[]
      snapshot.forEach((item)=>{
        if(userData.uid == item.key){
          arr.push({...item.val(),id:item.key})
        }
      })
      setBioList(arr)
    })
  },[])

  useEffect(()=>{
    const friendsref = ref(db, 'users/');
    onValue(friendsref, (snapshot) => {
      // const data = snapshot.val();
      let arr =[]
      snapshot.forEach((item)=>{
        if(userData.uid != item.key){
          arr.push({...item.val(),id:item.key})
        }
      })
      setFriendList(arr)
    })
  },[])

  let handleChange = (e)=>{
    setBioText(e.target.value)
  }

  let handleBioSave = ()=>{
    set(ref(db, 'bio/'+ userData.uid), {
      bioInfo: bioText
    }).then(()=>{
      setOpen(false)
    })
  }

  


  if(location.pathname == '/social/profile/info' && flag ==1 ){
    setProfileBtn(true)
    setFriendBtn(false)
    setPostBtn(false)
    flag++
  }

  if(location.pathname == '/social/profile/friend' && flag ==1 ){
    setProfileBtn(false)
    setFriendBtn(true)
    setPostBtn(false)
    flag++
  }

  if(location.pathname == '/social/profile/post' && flag ==1 ){
    setProfileBtn(false)
    setFriendBtn(false)
    setPostBtn(true)
    flag++
  }


  let handleProfileMove = () =>{
    navigate("/social/profile/info")
    setProfileBtn(true)
    setFriendBtn(false)
    setPostBtn(false)
  }
  let handleFriendMove = () =>{
    navigate("/social/profile/friend")
    setProfileBtn(false)
    setFriendBtn(true)
    setPostBtn(false)
  }
  let handlePostMove = () =>{
    navigate("/social/profile/post")
    setProfileBtn(false)
    setFriendBtn(false)
    setPostBtn(true)
    
  }

  // console.log(userData)

  let handleEditBio = ()=>{
    
  }




  return (
    <>

  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
      >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Edit Bio
      </Typography>
      <div className='visible_text'>
        <TextField id="outlined-basic" name='bio' onChange={handleChange} label="Bio" variant="outlined" />
      </div>
      <div className='ererrrtrt'>
        <Button onClick={handleBioSave} variant="contained">Save</Button>
      </div>
    </Box>
  </Modal>
      
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
                        <h2>{userData.displayName}</h2>
                        <h3><span><FiNavigation/></span> Saint Petersburg, Russian Federation</h3>
                      </div>
                      {
                        biolist.length != 0
                        ? 
                          biolist.map((item)=>(
                            <p>{item.bioInfo}<span className='bio_edits' onClick={handleOpen}><FiEdit/></span></p>
                          ))
                        :
                        <p>Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.<span className='bio_edits' onClick={handleOpen}><FiEdit/></span></p>
                      }

                      
                      <button className='contact_btn'>Contact info</button>
                    </div>
                  </div>
                  
                </div>
                <div className='erere'></div>
              </div>
              <div className='profile_nav_container'>
                  <div className='menu_prof'>
                    <div className='profile_nav_menu'>
                      {
                        profilebtn ? 
                        <div className='profile_nav_item active' onClick={handleProfileMove}>
                          <h3>Profile</h3>
                        </div>
                        :
                        <div className='profile_nav_item' onClick={handleProfileMove}>
                          <h3>Profile</h3>
                        </div>
                      }
                      {
                        friendBtn ? 
                        <div className='profile_nav_item active' onClick={handleFriendMove}>
                          <h3>Friends</h3>
                        </div>
                        :
                        <div className='profile_nav_item' onClick={handleFriendMove}>
                          <h3>Friends</h3>
                        </div>
                      }
                      {
                        postBtn ? 
                        <div className='profile_nav_item active' onClick={handlePostMove}>
                          <h3>Post</h3>
                        </div>
                        :
                        <div className='profile_nav_item' onClick={handlePostMove}>
                          <h3>Post</h3>
                        </div>
                      }
                    </div>

                </div>
              </div>
              <Outlet/>

            </div>
            <div className='profile_right_container'>
              <div className='paddingBG'></div>
              <section className='friends'>
                <div className='friend_head'>
                  <h3><span className='friends_length'>{friendList.length}</span>Friends</h3>
                  <h3>view all</h3>
                </div>
                <div className='friendd_list'>
                  {
                    friendList.map(item=>(
                      <div className='friend_item'>
                        <div className='friend_img'>
                          <img src={item.profile_picture}/>
                        </div>
                        <div className='friend_name'>
                          <h3>{item.fullname} <span className='add_friend'><FiUserPlus/></span></h3>
                          <p>{item.email}</p>
                        </div>
                      </div>
                    ))
                  }


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