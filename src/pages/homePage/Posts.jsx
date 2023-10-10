import React, { useEffect, useState } from 'react'
import './Posts.css'
import Post from './Post'
import Suggestion from './Suggestion'
import axios from 'axios'

const Posts = () => {
  const [posts, setPost] = useState([])
  const getPostsHandler = async () => {
    const response = await axios.get('http://localhost:3000/posts')
    const { data } = response
    setPost(data)
  }

  useEffect(() => {
    getPostsHandler()
  }, [])

  return (
    <div className='timeline'>
      <div className='timeline_left'>
        <div className='timeline_post'>
          {posts.map((item) => (
            <Post
              key={item.postId}
              userName={item.userName}
              userAvatar={item.userAvatar}
              likesCount={item.likesCount}
              commentText={item.commentText}
              postImage={item.postImage}
              postTitle={item.postTitle}
              postBody={item.postBody}
              timespamp={item.timespamp}
            />
          ))}
        </div>
      </div>
      <div className='timeline_right'>
        <Suggestion />
      </div>
    </div>
  )
}

export default Posts
