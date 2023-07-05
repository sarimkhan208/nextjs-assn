import React from 'react'
import {RxAvatar} from 'react-icons/rx'
import {BsThreeDots} from 'react-icons/bs'
import {MdDashboard} from 'react-icons/md'
import './profile.css'
import Image from 'next/image'


const Profile = () => {
  return (
    <div className='main'>
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
        <div className='grid-box'>
            <div  className='icon' >{<MdDashboard/>}</div>
            <div className='icon-name'>Dashboard</div>
        </div>
        <div className='grid-box'>
            <div>{<MdDashboard/>}</div>
            <div>Dashboard</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
