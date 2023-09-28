import React, { useState } from "react";
import "./authontication.css";
import Login from "./Login";
import Signup from "./Signup";

function Authontication() {
  const [active, setActive] = useState("login");
  const handelChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className="authontication">
      <div className="auth_left">
        <img
          src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk"
          alt=""
        />
      </div>
      <div className="auth_right">
        {active === "login" ? <Login /> : <Signup />}
        <div className="auth_more">
          <span>
            {active === "login" ? (
              <>
                Do'nt You Have Account ?
                <button onClick={handelChange}>Sign up</button>
              </>
            ) : (
              <>
                Do You Have Account ?
                <button onClick={handelChange}>log in</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authontication;
