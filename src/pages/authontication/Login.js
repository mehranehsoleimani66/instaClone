import "./Login.css";
import axios from "axios";

import { useEffect } from "react";
import { useAuth } from "../../context/userContext";
import { useNavigate } from "react-router";

const Login = () => {
  const { userEmail, userPassword, setUserEmail, setUserPassword } = useAuth();
  //
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      const response = await axios.get(" http://localhost:3000/user");

      const { data } = response;
      console.log(data.userEmail, "lll");
      localStorage.setItem("useremail", data.userEmail);
      localStorage.setItem("userpassword", data.userPassword);

      if (data?.userEmail) {
        const storedUserEmail = JSON.parse(localStorage.getItem("userEmail"));
        const storedUserPassword = JSON.parse(
          localStorage.getItem("userPassword")
        );
        setUserEmail(storedUserEmail);
        setUserPassword(storedUserPassword);
        navigate("/homepage");
      }
    } catch (err) {
      console.error(err);
    }
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
