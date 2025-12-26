import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";


const App = () => {
  return (
    <>
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/admin" element={<AdminDashboard />} />
    
  </Routes>
  </>
  );
  
};
export default App;
