// style
import "./App.css";

// library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// // pages

import Authontication from "./pages/authontication/Authontication";
import HomePage from "./pages/homePage/HomePage";
import Signup from "./pages/authontication/Signup";
import Login from "./pages/authontication/Login";

function App() {
  return (
    <div className="App">
      <>
        <ToastContainer theme="colored"></ToastContainer>
        <Router>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/homepage" element={<HomePage />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
