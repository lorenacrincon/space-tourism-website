import "./App.css";
import "./assets/styles/home.css";
import "./assets/styles/navbar.css";
import "./assets/styles/prueba.css";
import "./assets/styles/destination.css";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";
import Destination from "./assets/components/Destination";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </>
  );
}

export default App;
