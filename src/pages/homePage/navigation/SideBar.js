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
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/userContext";

function SideBar() {
  const navigate = useNavigate();
  const { userEmail, setUserEmail, setUserPassword } = useAuth();
  const logOutHandler = () => {
    localStorage.clear();
    setUserEmail("");
    setUserPassword("");
    message.success("خارج شدید");
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="user__info ">
        {userEmail ? (
          <div>
            <div className="user__email">
              <Avatar></Avatar>
              <span className="email__text">{userEmail}</span>
            </div>

            <button className="logout__button" onClick={logOutHandler}>
              logout
            </button>
          </div>
        ) : null}
      </div>

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
