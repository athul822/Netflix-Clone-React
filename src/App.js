import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import { SignIn } from "./Pages/SignIn";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<SignIn />} />
        </Routes>
    );
}

export default App;
