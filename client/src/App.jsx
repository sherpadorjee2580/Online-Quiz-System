import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import CreateQuiz from "./pages/CreateQuiz/CreateQuiz";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
      </Routes>
    </>
  );
};
export default App;
