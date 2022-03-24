import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/" element={<LandingPage />} />
                

            </Routes>
        </Router>
    );
}

export default App;
