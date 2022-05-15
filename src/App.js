import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen z-1">
      <Nav />
      <div className="w-3/4 md:w-1/2 bg-opacity-95 bg-yellow-900 text-gray-300 mx-auto mt-8 p-4 mb-8 rounded-lg">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <div className="p-4 bg-yellow-900 w-full">
        <Footer />
      </div>
    </div>
  );
}
export default App;
