import React, { useEffect, useState } from "react";
import "./suggestion.css";
import { Avatar } from "@mui/material";
import axios from "axios";

function Suggestion() {
  const [suggestion, setSuggestion] = useState([]);
  const getSuggestionHandler = async () => {
    const response = await axios.get("http://localhost:3000/posts");
    const { data } = response;
    setSuggestion(data);
    // console.log(data,'data')
  };

  useEffect(() => {
    getSuggestionHandler();
  }, []);

  return (
    <div className="suggestion">
      <div className="suggestion_title">Suggestion for you</div>

      {suggestion.map((item) => (
        <div className="suggestion_users" key={item.postId}>
          <div className="suggestion_usernameLeft">
            <span className="avatar">
              <img
                src={item.userAvatar}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50px",
                  paddingRight: "5px"
                }}
                alt=""
              />
            </span>
            <div className="username_info">
              <span className="username">{item.userName}</span>
              <span className="relation">new in instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>
      ))}
    </div>
  );
}
export default Suggestion;
