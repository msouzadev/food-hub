import { createContext, useContext, useState } from "react";

const APP_CONTEXT_DEFAULT_VALUE = {
  isLogged: false,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext(APP_CONTEXT_DEFAULT_VALUE);

export const AuthProvider = ({ children }: any) => {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => {
    setTimeout(() => {
      setIsLogged(true);
    }, 1500);
  };
  const handleLogout = () => {
    setIsLogged(false);
  };
  return (
    <AuthContext.Provider
      value={{ isLogged, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
