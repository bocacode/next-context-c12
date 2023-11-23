"use client";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const _setUser = (data) => {
    if(data) { // login
      sessionStorage.setItem("user", JSON.stringify(data));
    } else { // logout
      sessionStorage.removeItem("user");
    }
    setUser(data);
  }

  return (
    <AuthContext.Provider value={{ user, setUser: _setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
