import React, { useState } from 'react'
import './timeline.css'
import Suggestion from './Suggestion';
import Post from './Post';
const TimeLine=()=> {
  const [posts,setPost]=useState([
    {
      id: 0,
      user:'marriam_34',
      postImg:'./pic2.png',
      likes:'128',
      timespamp:'12h'

    },
    {id:1 ,
      user:'raddin_.',
      postImg:'./pic1.png',
      likes:'128',
      timespamp:'1min'},
      {
        id: 2,
      user:'maxiee2098',
      postImg:'./pic3.png',
      likes:'1098',
      timespamp:'3h'

      }

  ])
  return (
    <div className='timeline'>
     <div className='timeline_left'>
      <div className='timeline_post'>
        {posts.map((item)=>(
          <Post 
          key={item.id}
          user={item.user}
          postImg={item.postImg}
          likes={item.likes}
          timespamp={item.timespamp}
          />
          
        )
          
        )}
       

      </div>
     </div>
     <div className='timeline_right'>
      <Suggestion/>
     </div>
    </div>
  )
}

export default TimeLine;
