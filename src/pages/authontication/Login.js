import "./Login.css";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { AuthCountext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    userEmail,
    setUserEmail,
    setUserPassword,
    userPassword,
    users,
    setUsers,
    user,
    setUser
  } = AuthCountext();

  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const navigate = useNavigate();

  const LoginHandler = async () => {
    await axios
      .get("http://localhost:3000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
    const user = users.filter(
      (u) =>
        u.userEmail === inputEmailRef.current.value &&
        u.userPassword === inputPasswordRef.current.value
    );
    setUser(user);
    if (user.length > 0) {
      console.log(user, "hastam");
      const userArrayString = JSON.stringify(user);
      localStorage.setItem("myArray", userArrayString);
      console.log(userArrayString, "myArray");

      const storedArrayUser = localStorage.getItem("myArray");

      const parsedEmailArray = JSON.parse(storedArrayUser);

      setUserEmail(parsedEmailArray[0].userEmail);
      setUserPassword(parsedEmailArray[0].userPassword);

      console.log(parsedEmailArray[0].userEmail);
      console.log(parsedEmailArray[0].userPassword);

      navigate("/homePage");
    }
  };

  return (
    <div className="login-page">
      <div className="login_left">
        <img
          src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk"
          alt=""
        />
      </div>
      <div className="login_right">
        <div className="login_component ">
          <img src="./images/images.png" />

          <label>
            User Email<span className="errmsg">*</span>
          </label>
          <input
            ref={inputEmailRef}
            type="email"
            onChange={(e) => setUserEmail(e.target.value)}
          />

          <label>
            User Password<span className="errmsg">*</span>
          </label>
          <input
            ref={inputPasswordRef}
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
          />

          <button onClick={LoginHandler}>login</button>
        </div>

        <div className="login_more">
          <span>
            Do'nt You Have Account ?<a href="/">Sign Up</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
