import React, { useRef } from "react";
import "./Signup.css";
import axios from "axios";

import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const inputUsernameRef = useRef(null);

  const registerHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      id: Math.random(),
      userName: inputUsernameRef.current.value,
      userPassword: inputPasswordRef.current.value,
      userEmail: inputEmailRef.current.value
    };
    await axios
      .post("http://localhost:3000/users", newUser)
      .then((response) => {
        toast.success("Registered Success");
        console.log(response);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Registered faild");
        console.log("faild");
      });
  };

  return (
    <form className="signup-page" onSubmit={registerHandler}>
      <div className="sign_left">
        <img
          src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk"
          alt=""
        />
      </div>
      <div className="sign_right">
        <div className="sign_component ">
          <img src="./images/images.png" />
          <label>
            User Name<span className="errmsg">*</span>
          </label>
          <input type="text" placeholder="Username" ref={inputUsernameRef} />

          <label>
            User Email<span className="errmsg">*</span>
          </label>
          <input ref={inputEmailRef} />

          <label>
            User Password<span className="errmsg">*</span>
          </label>
          <input type="password" ref={inputPasswordRef} />

          <button>sign up</button>
        </div>

        <div className="sign_more">
          <span>
            Do You Have an Account ?<a href="/login">Log In</a>
          </span>
        </div>
      </div>
    </form>
  );
}

export default Signup;
