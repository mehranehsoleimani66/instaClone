import React from 'react'
import './Post.css'
import {Avatar} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const Post=({userName,userAvatar,likesCount,commentText,postImage,postTitle,postBody,timespamp})=> {
  
  return (
    <div className='post'>
     <div className='post_header'>
     <div className='post_headerAuthor'>
     {/* <Avatar >{userAvatar}</Avatar> */}
     <img src={userAvatar} style={{width:'50px', height:'50px', borderRadius:'50px',paddingRight:'5px'}} alt="User Avatar"/>
        {userName}<span>{timespamp}</span>
     </div>
     <MoreHorizIcon/>
     </div>
  
     <div className='post-image'>
      <img src={postImage} alt=''/>
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
      <div>{postTitle}</div>
      Liked by {likesCount} people
     </div>
    </div>
  )
}

export default Post
