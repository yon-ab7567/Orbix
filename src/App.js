import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import AppRoutes from "./routes";
import AuthScreen from "./screens/Auth";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsub();
  }, []);

  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/feed">Feed</Link>
        <Link to="/games">Games</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/profile">Profile</Link>
        {user && <button onClick={() => auth.signOut()}>Logout</button>}
      </nav>
      <Routes>
        <Route path="/login" element={<AuthScreen onLogin={setUser} />} />
        <Route path="/*" element={<AppRoutes user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}