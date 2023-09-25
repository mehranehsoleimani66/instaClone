import React, { useContext } from "react";
import "./SideBar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

import { message } from "antd";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import UserContext from "../../../context/userContext";

function SideBar() {
  const myUserContext = useContext(UserContext);
  const navigate = useNavigate();

  const logOutHandler = () => {
    console.log(myUserContext, "pak shod");
    myUserContext.setUserHandler({});
    message.success("خارج شدید");
    // navigate("Authontication")
  };

  return (
    <div className="sidebar">
      <img className="sidebar_logo" src="./images.png" alt="" />
      <div className="sidebar-buttons">
        <button className="sidebar_button">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="sidebar_button">
          <SearchIcon />
          <span>Search</span>
        </button>

        <button className="sidebar_button">
          <ExploreIcon />
          <span>Explore</span>
        </button>

        <button className="sidebar_button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>

        <button className="sidebar_button">
          <ChatIcon />
          <span>Messages</span>
        </button>

        <button className="sidebar_button">
          <FavoriteBorderIcon />
          <span>Notification</span>
        </button>

        <button className="sidebar_button">
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>
        {myUserContext.user.user ? (
          <button className="sidebar_button">
            <Avatar></Avatar>
            <span>{myUserContext.user.user}</span>
            <button className="logout__button" onClick={logOutHandler}>
              Log out
            </button>
          </button>
        ) : (
          <button className="sidebar_button">
            <Avatar></Avatar>
            <span></span>
            <Link to="/" className="login__button">
              Login
            </Link>
          </button>
        )}
        <div className="sidebar_more">
          <button className="sidebar_button">
            <MenuIcon />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
