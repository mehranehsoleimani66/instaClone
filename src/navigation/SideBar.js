import React from 'react'
import './SideBar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
function SideBar() {
  return (
    <div className='sidebar'>
   <img className='sidebar_logo' src='./images.png' alt=''/>
   <div className='sidebar-buttons'>
   <button className='sidebar_button'>
    <HomeIcon/>
    <span>Home</span>
    </button> 
    <button className='sidebar_button'>
    <SearchIcon/>
    <span>Search</span>
    </button> 
   
    <button className='sidebar_button'>
    <ExploreIcon/>
    <span>Explore</span>
    </button>

    <button className='sidebar_button'>
    <SlideshowIcon/>
    <span>Reels</span>
    </button>

    <button className='sidebar_button'>
    <ChatIcon/>
    <span>Messages</span>
    </button>

    <button className='sidebar_button'>
    <FavoriteBorderIcon/>
    <span>Notification</span>
    </button>

    <button className='sidebar_button'>
    <AddCircleOutlineIcon/>
    <span>Create</span>
    </button>
<div className='sidebar_more'> 
<button className='sidebar_button'>
    <MenuIcon/>
    <span>More</span>
    </button>
</div>
    
    </div>
    </div>
  )
}

export default SideBar
