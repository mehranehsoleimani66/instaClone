import React, { useContext } from 'react'

const { useState } = require('react')
const { createContext } = require('react')

const ThemeContext = createContext()
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)
  return <ThemeContext.Provider value={{ darkMode, setDarkMode }}>{children}</ThemeContext.Provider>
}
export const useThemeContext = () => {
  return useContext(ThemeContext)
}
