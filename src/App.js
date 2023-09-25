// style
import "./App.css";

// hooks
import { useEffect, useState } from "react";

// context
import { UserProvider } from "./context/userContext";

// library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages

import Authontication from "./pages/authontication/Authontication";
import HomePage from "./pages/homePage/HomePage";

//create useContext

function App() {
  // localState
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  //get the user from the localStorage
  useEffect(() => {
    const storedUserName = JSON.parse(localStorage.getItem("userName"));
    const storedUserEmail = JSON.parse(localStorage.getItem("userEmail"));
    const storedUserPassword = JSON.parse(localStorage.getItem("userPassword"));
    const doesUserExist =
      !!storedUserName && !!storedUserEmail && !!storedUserPassword;
    if (doesUserExist) {
      setUserName(storedUserName);
      setUserEmail(storedUserEmail);
      setUserPassword(storedUserPassword);
    }
  }, []);

  const setUserHandler = (userName, userEmail, userPassword) => {
    setUserName(userName);
    setUserEmail(userEmail);
    setUserPassword(userPassword);
    localStorage.setItem("userName", userName);
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("userPassword", userPassword);
  };

  return (
    <div className="App">
      <UserProvider
        value={{ userName, userEmail, userPassword, setUserHandler }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Authontication />} />
            <Route path="/homepage" element={<HomePage />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
