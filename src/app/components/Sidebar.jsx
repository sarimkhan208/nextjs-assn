import React from 'react'
import './sidebar.css'
import {MdOutlineExplore} from 'react-icons/md'
import {AiTwotoneStar,AiFillMessage,AiOutlinePlusCircle} from 'react-icons/ai'
import {FaGlobeAfrica} from 'react-icons/fa'
import {SiGoogleanalytics} from 'react-icons/si'
import {TfiStatsUp} from 'react-icons/tfi'

import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className='main' style={{borderRight:'1px solid #C3CAD9'}} >
        
        <div>
            <div className='rounded-full mt-5 sidebarcompo'>
                <div style={{color:'#3361FF'}} className='icons' >
                    {<MdOutlineExplore/>}
                </div>
            </div>

            <div className='rounded-full mt-5 sidebarcompo'>
                <div className='icons' >
                    {<AiTwotoneStar/>}
                </div>
            </div>

            <div className='rounded-full mt-5 sidebarcompo'>
                <div className='icons' >
                    {<AiFillMessage/>}
                </div>
            </div>

            <div className='rounded-full mt-5 sidebarcompo'>
                <div className='icons' >
                    {<TfiStatsUp/>}
                </div>
            </div>

            <div className='rounded-full mt-5 sidebarcompo'>
                <div className='icons' >
                    {<FaGlobeAfrica/>}
                </div>
            </div>

            <div className='rounded-full mt-5 sidebarcompo'>
                <div className='icons' >
                    {<SiGoogleanalytics/>}
                </div>
            </div>
        </div>

        <div className='mt-16'>
            <div className='bg-white h-9 w-9 rounded-full ml-3 mb-4' >
                <Image src='/avatar1.png' width={33} height={33} alt='image' />
            </div>
            <div className='bg-white h-9 w-9 rounded-full ml-3 mb-4' >
                <Image src='/avatar2.png' width={33} height={33} alt='image'  />
            </div>
            <div className='bg-white h-9 w-9 rounded-full ml-3 mb-4' >
                <Image src='/avatar3.png' width={33} height={33} alt='image' />
            </div>
            <div className='bg-white h-9 w-9 rounded-full ml-3 mb-4' >
                <Image src='/avatar4.png' width={33} height={33} alt='image' />
            </div>

            <div className='rounded-full mt-5 sidebarcompo'>
                <div className='icons' >
                    {<AiOutlinePlusCircle/>}
                </div>
            </div>
        </div>

        
         

        
    
        
    </div>
  )
}

export default Sidebar