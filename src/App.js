// style
import "./App.css";

// library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// // pages

import HomePage from "./pages/homePage/HomePage";
import Signup from "./pages/authontication/Signup";
import Login from "./pages/authontication/Login";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div className="App">
      <>
        <ToastContainer theme="colored"></ToastContainer>
        <Router>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/homepage" element={<HomePage />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
