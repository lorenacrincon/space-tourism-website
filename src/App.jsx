import React, { useState } from "react";
import "./App.css";
import "./assets/styles/navbar.css";
import "./assets/styles/home.css";
import "./assets/styles/destination.css";
import "./assets/styles/crew.css";
import "./assets/styles/technology.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/features/Home";
import Destination from "./assets/features/Destination";
import Crew from "./assets/features/Crew";
import Technology from "./assets/features/Technology";

function App() {
  const [selectedLink, setSelectedLink] = useState("");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setSelectedLink={setSelectedLink} />} />
        <Route
          path="/destination"
          element={<Destination setSelectedLink={setSelectedLink} />}
        />
        <Route
          path="/crew"
          element={<Crew setSelectedLink={setSelectedLink} />}
        />
        <Route
          path="/technology"
          element={<Technology setSelectedLink={setSelectedLink} />}
        />
      </Routes>
    </>
  );
}

export default App;
