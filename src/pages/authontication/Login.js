import "./Login.css";
import axios from "axios";

import { useState, useContext, useEffect } from "react";
import AuthContext, { AuthProvider } from "../../context/userContext";
import { useNavigate } from "react-router";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const LOG_URL = "/user";
  const navigate = useNavigate();

  const loginHandler = async () => {
    const response = await axios.get("http://localhost:3000/user");
    const { userEmail, userPassword } = response;
    setAuth({ userEmail, userPassword });
    setUserEmail(userEmail);
    setUserPassword(userPassword);
    navigate("/");
  };

  useEffect(() => {
    loginHandler();
  }, []);

  return (
    <div className="login">
      <img src="./images.png" />
      <input
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={loginHandler}>Log in</button>
    </div>
  );
};

export default Login;
