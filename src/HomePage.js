import React from 'react'
import SideBar from './navigation/SideBar'
import './HomePage.css';
import TimeLine from './timeLine/TimeLine'
function HomePage() {
  return (
    <div className='homepage'>
      <div className='homepage_nav'>
        <SideBar/>
      </div>
      <div className='homepage_timeline'>
        <TimeLine/>
      </div>
    </div>
  )
}

export default HomePage;
