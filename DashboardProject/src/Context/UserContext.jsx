import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("dark");
  const value = {
    username,
    password,
    theme,
    setUsername,
    setPassword,
    setTheme,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
