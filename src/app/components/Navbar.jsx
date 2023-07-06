'use client'
import {BiDotsHorizontal} from 'react-icons/bi'
import {IoMdContact,IoMdNotifications} from 'react-icons/io'
import {RxCrossCircled} from 'react-icons/rx'
import "./navbar.css"
import { useState } from 'react'

const Navbar = () => {
    const [toggle,setToggle] = useState(false)
  return (
    <nav id='navbar' >

      <div className='hamburger' onClick={()=>setToggle(!toggle)} >
        <span className='bar' ></span>
        <span className='bar' ></span>
        <span className='bar' ></span>
      </div>

      <div className='brand' >
        Constructor
      </div>

      <ul className={toggle?'nav-menu active':'nav-menu'} >
        <li className='nav-item' >Dashboard</li>
        <li className='nav-item' >About Us</li>
        <li className='nav-item' >News</li>
        <li className='nav-item' >User Policy</li>
        <li className='nav-item' >Contacts</li>
        <li className='nav-item mt-1 hidden sm:block' style={{fontSize:'18px'}}>{<BiDotsHorizontal/>}</li>
      </ul>

      <div className='searchbar' >
        <input className='text-sm' type="text" placeholder='Search Products Order and Clients' />

        <div className='clayton' >
            <div className='mt-1 mr-1' style={{fontSize:'18px'}} >{<IoMdContact/>}</div>
            <div>Clayton Santos</div>
        </div>

        <div className='notification' >
            <div>{<IoMdNotifications/>}</div>
        </div>

        <div className='cross' >
            <div>{<RxCrossCircled/>}</div>
        </div>
      </div>

    <div className='contact' >
        <div style={{fontSize:'18px'}} >{<IoMdContact/>}</div>
    </div>


    </nav>
  )
}

export default Navbar
