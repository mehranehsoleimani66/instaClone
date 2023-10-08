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
import { Link, useNavigate } from "react-router-dom";
import { AuthCountext } from "../../../context/AuthContext";
import { useEffect } from "react";

function SideBar() {
  const { user, setUser } = AuthCountext();
  // console.log(userEmail, "userEmail hast");
  // console.log(UserPassword, "UserPassword hast");

  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.clear();
    // setUserEmail("");
    // setUserPassword("");
    setUser("");
    message.success("خارج شدید");
    navigate("/login");
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("myArray"));
    setUser(user);
    // setUserEmail(userEmail);
  }, []);

  return (
    <div className="sidebar">
      <img className="sidebar_logo" src="./images/logo.png" alt="" />
      <div className="sidebar-buttons">
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <button className="sidebar_button">
            {user[0].userName ? (
              <div className="user__email">
                <Avatar
                  style={{
                    border: "3px solid green"
                  }}
                  src="./images/profile.png"
                ></Avatar>
                <span className="email__text">{user[0].userName}</span>
              </div>
            ) : null}
          </button>
        </Link>

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
        <div className="user__info ">
          {user ? (
            <div>
              <button className="logout__button" onClick={logOutHandler}>
                logout
              </button>
            </div>
          ) : null}
        </div>
        <div className="sidebar_more">
          <button>
            <MenuIcon />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
