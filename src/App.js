// style
import "./App.css";

// hooks
import { useEffect, useState } from "react";

// context
import { UserProvider } from "./context/userContext";

// library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // pages

import Authontication from "./pages/authontication/Authontication";
import HomePage from "./pages/homePage/HomePage";

//create useContext

function App() {
  //   // localState
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div className="App">
      <>
        <UserProvider
          value={{
            userName,
            userEmail,
            userPassword,
            setUserName,
            setUserEmail,
            setUserPassword
          }}
        >
          <Router>
            <Routes>
              <Route path="/" element={<Authontication />} />
              <Route path="/homepage" element={<HomePage />} />
            </Routes>
          </Router>
        </UserProvider>
      </>
    </div>
  );
}

export default App;
