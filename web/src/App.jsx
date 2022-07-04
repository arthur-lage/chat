import { Routes, Route, Navigate } from "react-router-dom";

import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Chat } from "./pages/Chat";

import { GlobalStyles } from "./globalStyles";

import "react-toastify/dist/ReactToastify.css";
import SetAvatar from "./pages/SetAvatar";
import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";

import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const { currentUser } = useAuth();

  return (
    <>
      <AuthProvider>
        <GlobalStyles />

        <Routes>
          <Route
            path="/"
            element={
              currentUser ? <Navigate to="/chat" /> : <Navigate to="/login" />
            }
          />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/set-avatar"
            element={
              <PrivateRoute>
                <SetAvatar />
              </PrivateRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export { App };
