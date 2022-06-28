import { Routes, Route, Navigate } from "react-router-dom";

import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Chat } from "./pages/Chat";

import { GlobalStyles } from "./globalStyles";

import "react-toastify/dist/ReactToastify.css";
import SetAvatar from "./pages/SetAvatar";

function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/set-avatar" element={<SetAvatar />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export { App };
