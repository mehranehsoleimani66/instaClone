import React from 'react'
import './timeline.css'
import Suggestion from './Suggestion';
import Post from './Post';
function timeLine() {
  return (
    <div className='timeline'>
     <div className='timeline_left'>
      <div className='timeline_post'>
        <Post/>
      </div>
     </div>
     <div className='timeline_right'>
      <Suggestion/>
     </div>
    </div>
  )
}

export default timeLine;
