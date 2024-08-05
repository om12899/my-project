import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Navbar from "../Components/Navbar";
import NotFound from "../Pages/NotFound";
import React from "react";

function Layout() {
  return (
    <Router>
      <div className=" mx-18 flex flex-col ">
        <div className=" fixed bg-dark-gray/50 top-0 left-0 w-full z-10">
          <Navbar />
        </div>
        <div className="flex-grow mt-16 p-4">
          {" "}
          {/* Adjust mt-16 based on the height of your Navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Layout;
