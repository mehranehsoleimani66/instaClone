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
    setUsers
  } = AuthCountext();

  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUsers(res.data))

      .catch((err) => console.log(err));
  }, []);

  const LoginHandler = () => {
    console.log(users[0]);
    let user = users?.filter(
      (u) =>
        u.userEmail === inputEmailRef.current.value &&
        u.userPassword === inputPasswordRef.current.value
    );

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
  useEffect(() => {
    LoginHandler();
  }, []);

  return (
    <div className="login">
      <img src="./images.png" alt="logo" />
      <input ref={inputEmailRef} type="email" placeholder="Email" />
      <input ref={inputPasswordRef} type="password" placeholder="Password" />
      <button onClick={LoginHandler}>Log in</button>
    </div>
  );
};

export default Login;
