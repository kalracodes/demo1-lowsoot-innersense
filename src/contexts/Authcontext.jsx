import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const Authcontext = createContext();
export function Authprov({ children }) {
  const { clienttoken, loginstatus } = JSON.parse(
    localStorage.getItem("login")
  ) || {
    clienttoken: null,
    loginstatus: false,
  };
  const [token, setToken] = useState(clienttoken);
  const [isuserloggedin, setIsuserloggedin] = useState(loginstatus);
  return (
    <Authcontext.Provider
      value={{ token, setToken, isuserloggedin, setIsuserloggedin }}
    >
      {children}
    </Authcontext.Provider>
  );
}
export const useAuth = () => useContext(Authcontext);
