// import React, { useEffect, useRef, useState } from "react";
// import "./Signup.css";
// import { jsxDEV as _jsxDEV2 } from "react/jsx-dev-runtime";
// import { message } from "antd";
// import axios from "axios";

import { SearchOff } from "@mui/icons-material";

// const USER_REGEX = /^[a-zA-Z] [a-zA-Z0-9-_]{3,23}$/;
// const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,23}$/;
// function Signup() {
//   const userNameRef = useRef();
//   const userError = useRef();

//   const [user, setUser] = useState("");
//   const [validName, setValidName] = useState("");
//   const [userFocus, setUserFocus] = useState(false);

//   const [pwd, setPwd] = useState("");
//   const [validPass, setValidPass] = useState(false);
//   const [passFocus, setPassFocus] = useState(false);

//   const [matchPwd, setMatchPwd] = useState("");
//   const [validMatch, setValidMatch] = useState(false);
//   const [matchFocus, setMatchFocus] = useState(false);

//   useEffect(() => {
//     const result = PASS_REGEX.test(user);
//     console.log(result);
//     console.log(user);
//     setUser(result);
//   }, [user]);

//   useEffect(() => {
//     userNameRef.current.focus();
//   }, []);

//   useEffect(() => {
//     const result = PASS_REGEX.test(pwd);
//     console.log(result);
//     console.log(pwd);
//     setValidPass(result);
//     const match = pwd === matchPwd;
//     setValidMatch(match);
//   }, [pwd, matchPwd]);

//   const registerHandler = async (e) => {
//     const v1 = USER_REGEX.test(user);
//     const v2 = PASS_REGEX.test(pwd);
//     if (!v1 || !v2) {
//       message.error("invalid");
//       return;
//     }
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/register",
//         JSON.stringify({ user, pwd })
//       );
//       console.log(response, "user");

//       message.success("succeed");
//     } catch {}
//   };

//   return (
//     <div className="signup">
//       <img src="./images.png" />
//       <input
//         ref={userNameRef}
//         type="text"
//         onChange={(e) => setUser(e.target.value)}
//         placeholder="Username"
//         aria-invalid={validName ? "false" : "true"}
//         onFocus={() => setUserFocus(true)}
//         onBlur={() => setUserFocus(false)}
//         required
//       />
//       <input
//         type="password"
//         onChange={(e) => setPwd(e.target.value)}
//         aria-invalid={validName ? "false" : "true"}
//         onFocus={() => setUserFocus(true)}
//         onBlur={() => setUserFocus(false)}
//         required
//       />

//       <input
//         type="password"
//         onChange={(e) => setPwd(e.target.value)}
//         aria-invalid={validName ? "false" : "true"}
//         onFocus={() => setMatchFocus(true)}
//         onBlur={() => setMatchFocus(false)}
//         required
//       />
//       <button
//         disabled={!validName || !validPass || !validMatch ? true : false}
//         onClick={registerHandler}
//       >
//         sign up
//       </button>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
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
      axios("http://localhost:3000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(obj)
      })
        .then((response) => {
          toast.success("Registered Success");
          console.log("registered");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Registered faild");
          console.log("faild");
        });
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
