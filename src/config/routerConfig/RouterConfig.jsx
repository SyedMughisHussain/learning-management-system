import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "../../screens/login/Login";
import AdminDashboard from "../../screens/adminDashboard/AdminDashboard";
import StudentDashboard from "../../screens/studentDashboard/StudentDashboard";
import AllCourses from "../../screens/adminDashboard/AllCourses/AllCourses";
import AllStudents from "../../screens/adminDashboard/AllStudents/AllStudents";
import AddCourse from "../../screens/adminDashboard/AddCourse/AddCourse";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/adminDashboard" element={<AdminDashboard />}>
          <Route index element={<AllCourses />} />
          <Route path="allStudents" element={<AllStudents />} />
          <Route path="addCourse" element={<AddCourse />} />
        </Route>
        <Route path="/studentDashboard" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
