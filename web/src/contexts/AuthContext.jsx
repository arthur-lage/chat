import { useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  function handleChangeToken(newToken) {
    setToken(newToken);
    localStorage.setItem("chat::token", JSON.stringify(newToken));
  }

  useEffect(() => {
    async function getUserInfo() {
      const tokenFromLocalStorage = JSON.parse(
        localStorage.getItem("chat::token")
      );

      setToken(tokenFromLocalStorage);

      api.defaults.headers.authorization = `Bearer ${tokenFromLocalStorage}`;

      const userInfo = await api.get("/users/auth");

      setCurrentUser(userInfo.data);
    }

    if (
      JSON.parse(localStorage.getItem("chat::token")) !== null &&
      JSON.parse(localStorage.getItem("chat::token")) !== ""
    ) {
      getUserInfo();
    } else {
      localStorage.setItem("chat::token", null);
      setToken(JSON.stringify(null));
    }
  }, [token]);

  useEffect(() => {
    if (currentUser) {
      if (!currentUser.isAvatarSet) {
        navigate("/set-avatar");
      } else {
        navigate("/chat");
      }
    }

    if(!currentUser) {
      navigate("/login")
    }
  }, [currentUser]);

  const value = { setCurrentUser, currentUser, token, handleChangeToken };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
