import React, { useState,useEffect } from 'react'
import { FiEdit, FiNavigation,FiUserPlus } from 'react-icons/fi';
import { useSelector } from 'react-redux'
import { getDatabase, ref, set,push,onValue,remove } from "firebase/database";


const Friend = () => {

  const [friendList,setFriendList] = useState([])
  const userData = useSelector((state) => state.loggedUser.loginUser)
  const db = getDatabase();
  
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


  return (
    < >
              <section className='friends jhjhj'>
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
    </>
  )
}

export default Friend