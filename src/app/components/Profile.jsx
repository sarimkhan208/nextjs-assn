import React from 'react'
import {RxAvatar} from 'react-icons/rx'
import {BsThreeDots} from 'react-icons/bs'
import {MdDashboard} from 'react-icons/md'
import {CgNotes} from 'react-icons/cg'
import {VscTasklist} from 'react-icons/vsc'
import {BsFillCloudFill} from 'react-icons/bs'
import {MdEmail,MdOutlineSettings} from 'react-icons/md'
import {BsPersonCheckFill} from 'react-icons/bs'
import {SlCalender} from 'react-icons/sl'
import {BiSolidPhone} from 'react-icons/bi'
import {GrMail} from 'react-icons/gr'
import {MdChromeReaderMode} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'
import './profile.css'
import Image from 'next/image'


const Profile = () => {
  return (
    <div className='main' style={{border:'none'}} >
      <div className='flex justify-between' >
        <div className='rounded-full mt-5 sidebarcompo'>
            <div  className='icons' >
                {<RxAvatar/>}
            </div>
        </div>

        <div className='rounded-full mt-5 sidebarcompo'>
            <div className='icons' >
                {<BsThreeDots/>}
            </div>
        </div>
      </div>

      <div className='m-auto'>
        <Image width={150} style={{borderRadius:'100%',marginTop:'20px'}} height={150} src='/heroimage.jpg' alt='image'/>
        <div className='m-auto profile-name'>
            Hello Alfred Bryant
        </div>
        <div className='mail'>
            adrainnader@yahoo.com
        </div>
      </div>

      <div className='grid grid-cols-2' >
        <div className='grid-box' id='top-left-box'>
            <div  className='icon' >{<MdDashboard/>}</div>
            <div className='icon-name'>Dashboard</div>
        </div>
        <div className='grid-box' id='top-right-box'>
            <div className='icon' >{<CgNotes/>}</div>
            <div className='icon-name'>Notes</div>
        </div>

        <div className='grid-box'>
            <div  className='icon' >{<VscTasklist/>}</div>
            <div className='icon-name'>Tasks</div>
        </div>
        <div className='grid-box'>
            <div className='icon' >{<BsFillCloudFill/>}</div>
            <div className='icon-name'>Files</div>
        </div>

        <div className='grid-box'>
            <div  className='icon' >{<MdEmail/>}</div>
            <div className='icon-name'>Emails</div>
        </div>
        <div className='grid-box'>
            <div className='icon' >{<BsPersonCheckFill/>}</div>
            <div className='icon-name'>Clients</div>
        </div>

        <div className='grid-box' id='bottom-left-box'>
            <div  className='icon' >{<SlCalender/>}</div>
            <div className='icon-name'>Calender</div>
        </div>
        <div className='grid-box' id='bottom-right-box'>
            <div className='icon' >{<MdOutlineSettings/>}</div>
            <div className='icon-name'>Settings</div>
        </div>
      </div>

      <div className='bottom-bar' >
        <div style={{color:'#FF6633'}} >{<BiSolidPhone/>}</div>
        <div style={{color:'#29CC39'}} >{<GrMail/>}</div>
        <div style={{color:'#8833FF'}} >{<MdChromeReaderMode/>}</div>
        <div style={{color:'#33BFFF'}} >{<FaTelegramPlane/>}</div>
        <div style={{color:'#29CC39'}} >{<ImWhatsapp/>}</div>
      </div>
    </div>
  )
}

export default Profile
