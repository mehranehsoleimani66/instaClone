// style
import "./App.css";

// library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // pages

import Authontication from "./pages/authontication/Authontication";
import HomePage from "./pages/homePage/HomePage";
// import { AuthCountext } from "./context/AuthContext";

//create useContext

function App() {
  // const { userEmail, userPassword, setUserEmail, setUserPassword } =
  //   AuthCountext();
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Authontication />} />
            <Route path="/homepage" element={<HomePage />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
