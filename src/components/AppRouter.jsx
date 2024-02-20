import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
// import Research from "./Research";
// import Singing from "./Singing";

export default function AppRouter() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/research" element={<Research />} /> */}
          {/* <Route path="/singing" element={<Singing />} /> */}
        </Routes>
      </div>
    </>
  );
}
