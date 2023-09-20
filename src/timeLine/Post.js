import React from 'react'
import './Post.css'
import {Avatar} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const Post=({user,postImg,likes,timespamp,id})=> {
  
  return (
    <div className='post'>
     <div className='post_header'>
     <div className='post_headerAuthor'>
     <Avatar>R</Avatar>
        {user}<span>{timespamp}</span>
     </div>
     <MoreHorizIcon/>
     </div>
  
     <div className='post-image'>
      <img src={postImg} alt=''/>
     </div>
     <div className='post-footer'>
      <div className='post_footerIcons'>
        <div className='post_footerMainIcons'>
          <FavoriteBorderIcon className='post_icon'/>
          <ChatIcon className='post_icon'/>
          <TelegramIcon className='post_icon'/>
        </div>
        <div className='post_footerSaveIcon'>
          <BookmarkBorderIcon/>
        </div>
      </div>
      Liked by {likes} people
     </div>
    </div>
  )
}

export default Post
