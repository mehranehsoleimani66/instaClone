import React from 'react'
import './HomePage.css';
import SideBar from '../homePage/navigation/SideBar';
import TimeLine from '../homePage/timeLine/TimeLine';

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
