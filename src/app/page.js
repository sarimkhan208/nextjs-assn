import Image from 'next/image'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import MainDashboard from './components/MainDashboard'
import Navbar from './components/Navbar'
import './home.css'


export default function Home() {
  return ( 
    <div>
     <div>
        <Navbar/>
      </div>
      <div className='body' >
        <div className='sidebars'  >
          <Sidebar/>
        </div>
        <div style={{width:'100%'}} >
          <MainDashboard/>
        </div>
      </div> 
    </div>
  
  )
}
