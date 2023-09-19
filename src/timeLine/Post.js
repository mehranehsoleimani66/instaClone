import React from 'react'
import './Post.css'
import {Avatar} from '@mui/material';
import  { MoreHorizOutlined } from '@mui/icons-material';
function Post() {
  return (
    <div className='post'>
     <div className='post_header'>
     <div className='post_header'>
     <Avatar>R</Avatar>
        radin_.<span>12h</span>
     </div>
     <MoreHorizOutlined/>
     </div>
  
     <div className='post-image'></div>
     <div className='post-footer'></div>
    </div>
  )
}

export default Post
