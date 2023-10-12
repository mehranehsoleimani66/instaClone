import React from 'react'
import './App.css'
// library
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
// // pages

import HomePage from './pages/homePage/HomePage'
import Signup from './pages/authentication/Signup'
import Login from './pages/authentication/Login'
import Profile from './pages/profile/Profile'
import { useThemeContext } from './context/ThemeContext'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
function App() {
  const theme = useThemeContext()
  const darkMode = theme.darkMode

  const modeHandler = () => {
    theme.setDarkMode(!darkMode)
  }
  return (
    <div className={`${darkMode ? 'App-dark' : 'App-light'}`}>
      <button onClick={modeHandler} className={`${darkMode ? 'btn-light' : 'btn-dark'}`} style={{ float: 'right', margin: '10px' }}>
        <PowerSettingsNewIcon></PowerSettingsNewIcon>
        {/* {darkMode ? 'تاریک' : 'روشن'} */}
      </button>
      <ToastContainer theme='colored'></ToastContainer>
      <Router>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/homepage' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
