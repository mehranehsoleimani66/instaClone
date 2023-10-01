import React, { useEffect, useState } from "react";
import "./timeline.css";
import Suggestion from "./Suggestion";
import axios from "axios";
import Post from "./Post";
const TimeLine = () => {
  const [posts, setPost] = useState([]);
  const getPostsHandler = async () => {
    const response = await axios.get("http://localhost:3000/posts");
    const { data } = response;
    setPost(data);
    // console.log(data,'data')
  };

  useEffect(() => {
    getPostsHandler();
  }, []);

  return (
    <div className="timeline">
      <div className="timeline_left">
        <div className="timeline_post">
          {posts.map((item) => (
            <Post
              postId={item.postId}
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
      <div className="timeline_right">
        <Suggestion />
      </div>
    </div>
  );
};

export default TimeLine;
