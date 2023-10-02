import React, { useEffect, useRef, useState } from "react";
import "./Signup.css";
import { jsxDEV as _jsxDEV2 } from "react/jsx-dev-runtime";
import { message } from "antd";
import axios from "axios";

const USER_REGEX = /^[a-zA-Z] [a-zA-Z0-9-_]{3,23}$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,23}$/;
function Signup() {
  const userNameRef = useRef();
  const userError = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState("");
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    const result = PASS_REGEX.test(user);
    console.log(result);
    console.log(user);
    setUser(result);
  }, [user]);

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  useEffect(() => {
    const result = PASS_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPass(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  const registerHandler = async (e) => {
    const v1 = USER_REGEX.test(user);
    const v2 = PASS_REGEX.test(pwd);
    if (!v1 || !v2) {
      message.error("invalid");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/register",
        JSON.stringify({ user, pwd })
      );
      console.log(response, "user");

      message.success("succeed");
    } catch {}
  };

  return (
    <div className="signup">
      <img src="./images.png" />
      <input
        ref={userNameRef}
        type="text"
        onChange={(e) => setUser(e.target.value)}
        placeholder="Username"
        aria-invalid={validName ? "false" : "true"}
        onFocus={() => setUserFocus(true)}
        onBlur={() => setUserFocus(false)}
        required
      />
      <input
        type="password"
        onChange={(e) => setPwd(e.target.value)}
        aria-invalid={validName ? "false" : "true"}
        onFocus={() => setUserFocus(true)}
        onBlur={() => setUserFocus(false)}
        required
      />

      <input
        type="password"
        onChange={(e) => setPwd(e.target.value)}
        aria-invalid={validName ? "false" : "true"}
        onFocus={() => setMatchFocus(true)}
        onBlur={() => setMatchFocus(false)}
        required
      />
      <button
        disabled={!validName || !validPass || !validMatch ? true : false}
        onClick={registerHandler}
      >
        sign up
      </button>
    </div>
  );
}

export default Signup;
