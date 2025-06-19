import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import WelcomeScreen from "./pages/WelcomeScreen";
import LoadingScreen from "./pages/LoadingScreen";
import Navbar from "./components/Navbar";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); // 🔍 get current route

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // 🔒 Show loading screen first
  if (isLoading) return <LoadingScreen />;

  // ❌ Don't show navbar on Welcome screen
  const hideNavbarOn = ["/"]; // you can add "/login" too if needed
  const shouldShowNavbar = !hideNavbarOn.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />} {/* ✅ Conditionally render Navbar */}
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
