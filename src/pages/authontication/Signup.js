import React from "react";
import "./Signup.css";
import axios from "axios";
import { AuthCountext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Signup() {
  const {
    userEmail,
    setUserEmail,
    setUserPassword,
    userPassword,
    userName,
    setUserName
  } = AuthCountext();

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errmsg = "please enter the value in ";
    if (userName === null || userName === "") {
      isproceed = false;
      errmsg += "userName";
    }
    // if (userEmail === null || userEmail === "") {
    //   isproceed = false;
    //   errmsg += "Email";
    // }
    // if (userPassword === null || userPassword === "") {
    //   isproceed = false;
    //   errmsg += "password";
    // }

    if (!isproceed) {
      toast.warning(errmsg);
    }
    // } else {
    //   if (/^[a-zA-Z0-9]+@[a-zA-z0-9]+\.[A-Za-z]$/.test(userEmail)) {
    //   } else {
    //     isproceed = false;
    //     toast.warning("please enter the valid Email");
    //   }
    //   console.log(isproceed);
    // }
    return isproceed;
  };

  const registerHandler = () => {
    let obj = { userName, userEmail, userPassword };
    console.log(obj);

    if (IsValidate()) {
      axios
        .post("http://localhost:3000/users")
        // , {
        //   headers: { "content-type": "application/json" },
        //   body: JSON.stringify(obj)
        // })
        .then((response) => {
          toast.success("Registered Success");
          console.log(response);
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Registered faild");
          console.log("faild");
        });
      // axios("http://localhost:3000/users", {
      //   method: "POST",
      //   headers: { "content-type": "application/json" },
      //   body: JSON.stringify(userEmail)
      // })
      //   .then((response) => {
      //     toast.success("Registered Success");
      //     console.log(response);
      //     navigate("/login");
      //   })
      //   .catch((err) => {
      //     toast.error("Registered faild");
      //     console.log("faild");
      //   });
    }
  };

  return (
    <div className="signup-page">
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
          <input
            value={userName}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
          />

          <label>
            User Email<span className="errmsg">*</span>
          </label>
          <input
            value={userEmail}
            type="email"
            onChange={(e) => setUserEmail(e.target.value)}
          />

          <label>
            User Password<span className="errmsg">*</span>
          </label>
          <input
            value={userPassword}
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
          />

          <button onClick={registerHandler}>sign up</button>
        </div>

        <div className="sign_more">
          <span>
            Do You Have an Account ?<a href="/login">Log In</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
