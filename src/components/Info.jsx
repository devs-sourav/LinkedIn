import React, { useEffect, useState } from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import exp1 from '../assets/exp1.png'
import exp2 from '../assets/exp2.png'
import edu1 from '../assets/edu1.png'
import { getDatabase, ref, set,push,onValue,remove } from "firebase/database";
import { FiEdit,FiImage,FiTrash2 } from 'react-icons/fi';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux'
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Switch from '@mui/material/Switch';





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
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const style3 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

let paragraph = {
  visibleText:"",
  moreText:""
}

let exp = {
  skillName:"",
  designation:"",
  location:"",
  exptext:""
}

let edu = {
  institutename: "",
  program:"",
  cgpa:"",
}

const Info = () => {
  const userData = useSelector((state) => state.loggedUser.loginUser)
  const db = getDatabase();
  const [isReadMore, setIsReadMore] = useState(false); 
  const [para, setPara] = useState(paragraph); 
  const [eduObj, setEduObj] = useState(edu); 
  const [expInfo, setExpInfo] = useState(exp); 
  const [flag1, setFlag1] = useState(true); 
  const [about, setAbout] = useState([]); 
  const [experience, setExperience] = useState([]); 
  const [educationList, setEducationList] = useState([]); 
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = useState(false);
  const [startDate, setStartDate] =useState(null);
  const [endDate, setEndDate] =useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const [checked, setChecked] = React.useState(false);









  const handleChange2 = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.checked)
    if(checked){
      setFlag1(true)
    }else{
      setFlag1(false)
    }
  };


  let handleChangeEdu = (e)=>{
    setEduObj({
      ...eduObj,
      [e.target.name] : e.target.value
    })
  }


  const toggleReadMore = () => { 
    setIsReadMore(!isReadMore); 
  }; 



  useEffect(()=>{
    const aboutref = ref(db, 'about/');
    onValue(aboutref, (snapshot) => {
      // const data = snapshot.val();
      let arr =[]
      snapshot.forEach((item)=>{
        if(userData.uid == item.key){
          arr.push({...item.val(),id:item.key})
        }
      })
      setAbout(arr)
    })
  },[])

  useEffect(()=>{
    const experienceref = ref(db, 'experience/');
    onValue(experienceref, (snapshot) => {
      // const data = snapshot.val();
      let arr =[]
      snapshot.forEach((item)=>{
        if(userData.uid == item.val().userId){
          arr.push({...item.val(),id:item.key})
        }
      })
      setExperience(arr)
    })
  },[])

  useEffect(()=>{
    const educationref = ref(db, 'education/');
    onValue(educationref, (snapshot) => {
      // const data = snapshot.val();
      let arr =[]
      snapshot.forEach((item)=>{
        if(userData.uid == item.val().userId){
          arr.push({...item.val(),id:item.key})
        }
      })
      setEducationList(arr)
    })
  },[])

  

  let handleChange = (e)=>{
    setPara({
      ...para,
      [e.target.name] : e.target.value
    })
  }

  let handleClickProjectEdit = ()=>{
    set(push(ref(db, 'experience/')), {
      userId: userData.uid
    }).then(()=>{
      setOpen2(false)
    })
  }


  let handleClick =()=>{
      set(ref(db, 'about/'+ userData.uid), {
        visibleText: para.visibleText,
        moreText: para.moreText,
      }).then(()=>{
        setOpen(false)
      })
  }

  let handleChangeExp = (e)=>{
    setExpInfo({
      ...expInfo,
      [e.target.name]:e.target.value,
    })
  }
  console.log(expInfo)
  let handleChangeStartDate =(e)=>{
    setStartDate(`${e.$d.getFullYear()}-${e.$d.getMonth()+1}-${e.$d.getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`)
  }
  console.log("StartDate",startDate)
  let handleChangeEndDate =(e)=>{
    setEndDate(`${e.$d.getFullYear()}-${e.$d.getMonth()+1}-${e.$d.getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`)
  }
  console.log("EndDate",endDate)

  let handleSaveExp = ()=>{
    if(checked){
      set(push(ref(db,'experience/')), {
        skillName:expInfo.skillName,
        designation:expInfo.designation,
        location:expInfo.location,
        exptext:expInfo.exptext,
        userId: userData.uid,
        present:true,
        startDate:startDate,
      }).then(()=>{
        setOpen2(false)
        setChecked(false)
      })
    }else{
      set(push(ref(db, 'experience/')), {
        skillName:expInfo.skillName,
        designation:expInfo.designation,
        location:expInfo.location,
        exptext:expInfo.exptext,
        userId: userData.uid,
        startDate:startDate,
        endDate:endDate,
        present:false
  
      }).then(()=>{
        setOpen3(false)
        setChecked(false)
      })
    }

  }

  let handleDeleteExperience = (item)=>{
    remove(ref(db, 'experience/' + item.id))
    // console.log(item)
  }
  let handleDeleteEdu = (item)=>{
    remove(ref(db, 'education/' + item.id))
    // console.log(item)
  }


  let handleSaveEdu = ()=>{

    if(checked){
      set(push(ref(db,'education/')), {
        institutename:eduObj.institutename,
        program:eduObj.program,
        address:eduObj.address,
        cgpa:eduObj.cgpa,
        userId: userData.uid,
        present:true,
        startDate:startDate,
      }).then(()=>{
        setOpen3(false)
        setChecked(false)
      })
    }else{
      set(push(ref(db, 'education/')), {
        institutename:eduObj.institutename,
        program:eduObj.program,
        address:eduObj.address,
        cgpa:eduObj.cgpa,
        userId: userData.uid,
        present:false,
        startDate:startDate,
        endDate:endDate,
      }).then(()=>{
        setOpen3(false)
        setChecked(false)
      })
    }

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
                    Edit About Information
                  </Typography>
                  <div className='visible_text'>
                    <TextField id="outlined-basic" name='visibleText' onChange={handleChange} label="Experience" variant="outlined" />
                    <TextField id="outlined-basic" name='moreText' onChange={handleChange} label="More Information" variant="outlined" />
                  </div>
                  <div className='ererrrtrt'>
                    <Button onClick={handleClick} variant="contained">Save</Button>
                  </div>
                </Box>
              </Modal>
              <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Edit About Information
                  </Typography>
                  <div className='visible_text'>
                    <TextField id="outlined-basic" name='visibleText' onChange={handleChange} label="Experience" variant="outlined" />
                    <TextField id="outlined-basic" name='moreText' onChange={handleChange} label="More Information" variant="outlined" />
                  </div>
                  <div className='ererrrtrt'>
                    <Button onClick={handleClickProjectEdit} variant="contained">Save</Button>
                  </div>
                </Box>
              </Modal>
              <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style2} className="style_boxing">
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Edit Experience
                  </Typography>
                  <div className='visible_text1 visible_text'>
                    <TextField id="outlined-basic" name='skillName' onChange={handleChangeExp} label="Skill Name" variant="outlined" />
                    <TextField id="outlined-basic" name='designation' onChange={handleChangeExp} label="Designation" variant="outlined" />
                    <TextField id="outlined-basic" name='location' onChange={handleChangeExp} label="Address" variant="outlined" />
                    <div className='sdsdsdsdsd'>
                      <h4>Starting Date</h4>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker onChange={handleChangeStartDate} />
                      </LocalizationProvider>
                    </div>
                    <div className='present_switch'>
                      <Switch
                        checked={checked}
                        onChange={handleChange2}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                      <h4>Present</h4>
                    </div>
                    {
                      flag1 && 
                      <div className='sdsdsdsdsd'>
                      <h4>Ending Date</h4>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker onChange={handleChangeEndDate} />
                      </LocalizationProvider>
                    </div>
                    }


                    <div className='exofjdfkjdjf'>
                    <TextField  id="outlined-basic" name='exptext' onChange={handleChangeExp} label="Experience Information" variant="outlined" />
                    </div>


                  </div>
                  <div className='ererrrtrt'>
                    <Button onClick={handleSaveExp}  variant="contained">Save</Button>
                  </div>
                </Box>
              </Modal>
              <Modal
                open={open3}
                onClose={handleClose3}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style3} className="style_boxing">
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Edit Education
                  </Typography>
                  <div className='visible_text1 visible_text'>
                    <TextField id="outlined-basic" name='institutename' onChange={handleChangeEdu} label="Insititute Name" variant="outlined" />
                    <TextField id="outlined-basic" name='program' onChange={handleChangeEdu} label="Program" variant="outlined" />
                    <TextField id="outlined-basic" name='address' onChange={handleChangeEdu} label="Address" variant="outlined" />
                    <TextField id="outlined-basic" name='cgpa' type='number' onChange={handleChangeEdu} label="CGPA" variant="outlined" />
                    
                    <div className='sdsdsdsdsd'>
                      <h4>Starting Date</h4>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker onChange={handleChangeStartDate} />
                      </LocalizationProvider>
                    </div>
                    <div className='present_switch'>
                      <Switch
                        checked={checked}
                        onChange={handleChange2}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                      <h4>Present</h4>
                    </div>
                    {
                      flag1 && 
                      <div className='sdsdsdsdsd'>
                      <h4>Ending Date</h4>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker onChange={handleChangeEndDate} />
                      </LocalizationProvider>
                    </div>
                    }
                  </div>
                  <div className='ererrrtrt'>
                    <Button onClick={handleSaveEdu}  variant="contained">Save</Button>
                  </div>
                </Box>
              </Modal>


        <div className='about'>
          <div className='about_container'>
              <h3 className='about_head'>About<span onClick={handleOpen}><FiEdit/></span></h3>
              {
                about.map((item)=>(
                  <p>{item.visibleText}{isReadMore ? ' ' : '.....'}
                  {
                    isReadMore && <span>{item.moreText}</span>
                  }
                  </p>
                ))
              }
              <h4 className='btn_see_more' onClick={toggleReadMore}>{isReadMore ? 'Less more' : 'See more'}</h4>
              </div>
              </div>
              <div className='projects'>
                <h3 className='about_head'>Projects <span>3 of 12</span> <FiEdit onClick={handleOpen1} className="imgeIcon"/></h3>
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
                <h3 className='about_head'>Experience <FiEdit onClick={handleOpen2} className="imgeIcon"/></h3>
                <div className='experience_menu'>
                  {
                    experience.map((item)=>(
                      <div className='experience_item'>
                        <div className='exp_img'>
                          <img src={exp1}/>
                        </div>
                        <div className='exp_info'>
                          <h3>{item.skillName}<FiTrash2 onClick={()=>handleDeleteExperience(item)} className='delete_icon'/></h3>
                          <div className='ex_info_inner_1'>
                            <h3>{item.designation}</h3>
                            <h3 className='fddfdf'>{item.location}</h3>
                          </div>
                          <div className='ex_info_inner_1'>
                            <h3 className='fddfdf'>{item.startDate} — {item.present ? 'Present': item.endDate}</h3>
                            <h3 className='fddfdddf'>3 yrs 3 mos</h3>
                          </div>
                          <p>{item.exptext}</p>
                        </div>
                      </div>
                    ))
                  }

                  {/* <div className='experience_item'>
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
                  </div> */}
                </div>
              </div>
              <div className='experience experience11'>
                <h3 className='about_head'>Education <FiEdit onClick={handleOpen3} className="imgeIcon"/></h3>
                <div className='experience_menu'>
                  {
                    educationList.map(item=>(
                      <div className='experience_item'>
                        <div className='exp_img'>
                          <img src={edu1}/>
                        </div>
                        <div className='exp_info'>
                          <h3>{item.institutename} <FiTrash2 onClick={()=>handleDeleteEdu(item)} className='delete_icon'/></h3>
                          <div className='ex_info_inner_1'>
                            <h3>{item.program}</h3>
                          </div>
                          <div className='ex_info_inner_1'>
                            <h3 className='fddfdf'>{item.startDate} — {item.present ? 'Present': item.endDate}</h3>
                          </div>
                          <p>{item.address}</p>
                        </div>
                      </div>
                    ))
                  }

                </div>
              </div>
    </>
  )
}

export default Info