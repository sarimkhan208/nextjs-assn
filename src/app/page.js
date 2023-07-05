import Image from 'next/image'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'


export default function Home() {
  return (
  //  <div className='flex' >
  //     <div>
  //       <Sidebar/>
  //     </div>
  //     <div>
  //       <Profile/>
  //     </div>
  //  </div>
  <div>
    <Profile/>
  </div>
  )
}
