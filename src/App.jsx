import React, { useState } from "react";
import "./App.css";
import "./assets/styles/navbar.css";
import "./assets/styles/home.css";
import "./assets/styles/destination.css";
import "./assets/styles/crew.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/features/Home";
import Destination from "./assets/features/Destination";
import Crew from "./assets/features/Crew";

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
      </Routes>
    </>
  );
}

export default App;
