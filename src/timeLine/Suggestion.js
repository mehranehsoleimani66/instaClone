import React from 'react'
import './suggestion.css'
import { Avatar } from '@mui/material'
function Suggestion() {
  return (
    <div className='suggestion'>
<div className='suggestion_title'>Suggestion for you
</div>
<div className='suggestion_users'>
  <div className='suggestion_usernameLeft'>
    <span className='avatar'>
    <Avatar>R</Avatar>
    </span>
    <div className='username_info'>
    <span className='username'>radin</span>
    <span className='relation'>new in instagram</span>
    </div>
    
  </div>

<button className='follow_button'>Follow</button>
    </div>

    <div className='suggestion_users'>
  <div className='suggestion_usernameLeft'>
    <span className='avatar'>
    <Avatar>R</Avatar>
    </span>
    <div className='username_info'>
    <span className='username'>radin</span>
    <span className='relation'>new in instagram</span>
    </div>
    
  </div>

<button className='follow_button'>Follow</button>
    </div>

    <div className='suggestion_users'>
  <div className='suggestion_usernameLeft'>
    <span className='avatar'>
    <Avatar>R</Avatar>
    </span>
    <div className='username_info'>
    <span className='username'>radin</span>
    <span className='relation'>new in instagram</span>
    </div>
    
  </div>

<button className='follow_button'>Follow</button>
    </div>
    </div>
  )
}

export default Suggestion
