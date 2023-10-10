import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [users, setUsers] = useState([])
  const [user, setUser] = useState('')

  return (
    <AuthContext.Provider
      value={{
        userName,
        userEmail,
        userPassword,
        setUserName,
        setUserEmail,
        setUserPassword,
        users,
        setUsers,
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
const AuthCountext = () => {
  return useContext(AuthContext)
}

export { AuthProvider as MyAuthProvider, AuthCountext }
