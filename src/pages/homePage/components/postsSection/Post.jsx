import "./Post.css";
import React, { useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import TelegramIcon from "@mui/icons-material/Telegram";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Post = ({
  userName,
  userAvatar,
  likesCount,
  postImage,
  postTitle,
  timespamp,
  postBody
}) => {
  // define states for like button
  const [like, setLikesCount] = useState(likesCount);
  const [isLiked, setIsLiked] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({});

  // define likeClick handler
  const likeHandleClick = () => {
    setLikesCount(isLiked ? like - 1 : like + 1);
    setButtonStyle(isLiked ? { color: "white" } : { color: "red" });
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="post_header">
        <div className="post_headerAuthor">
          <img
            src={userAvatar}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              paddingRight: "5px"
            }}
          />
          <span className="userName">{userName}</span>
          <span className="timespamp">{timespamp}</span>
        </div>
        <MoreHorizIcon />
      </div>

      <div className="post-image">
        <img src={postImage} alt="" />
      </div>
      <div className="post-footer">
        <div className="post_footerIcons">
          <div className="post_iconsMain">
            <div style={{ padding: "10px" }}>
              <div
                onClick={likeHandleClick}
                disabled={isLiked}
                style={buttonStyle}
              >
                <FavoriteBorderIcon className="postIcon" />
              </div>
            </div>
            <ChatIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post_footerSaveIcon">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        <div className="post_title">{postTitle}</div>
        <div className="count_section">
          Liked by <span>{like}</span> people
          <p>{postBody}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
