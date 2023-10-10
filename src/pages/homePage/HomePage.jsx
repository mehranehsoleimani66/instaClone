import './HomePage.css'
import React from 'react'

import Posts from './Posts'
import SideBar from './SideBar'

function HomePage() {
  return (
    <div className='homepage'>
      <div className='homepage_nav'>
        <SideBar />
      </div>
      <div className='homepage_timeline'>
        <Posts />
      </div>
    </div>
  )
}

export default HomePage
