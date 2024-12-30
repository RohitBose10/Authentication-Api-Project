import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Registration from "../Components/sections/authentication/reg";
import Login from "../Components/sections/authentication/login";
import { Profile } from "../Components/sections/authentication/profile";
import { Navbar } from "../Components/layout/header";

const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Registration />} />
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default Routing;
