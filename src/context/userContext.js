import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});
export function useAuth() {
  return useContext(AuthContext);
}

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  return (
    <AuthContext.Provider
      value={{
        userName,
        userEmail,
        userPassword,
        setUserName,
        setUserEmail,
        setUserPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

// import { createContext } from "react";

// const UserContext = createContext();

// export const UserProvider = UserContext.Provider;

// export default UserContext;
