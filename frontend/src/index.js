import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import GetInvolved from "./pages/GetInvolved";
import Programs from "./pages/Programs";
import Group from "./pages/Group";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/group/:id" element={<Group />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
