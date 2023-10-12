import './HomePage.css'
import React from 'react'

import Posts from './Posts'
import SideBar from './SideBar'
import { useThemeContext } from '../../context/ThemeContext'

function HomePage() {
  const theme = useThemeContext()
  const darkMode = theme.darkMode
  return (
    // <div className='homepage'>
    <div className={`homepage ${darkMode ? 'homePageDark' : 'homePageLight'}`}>
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
