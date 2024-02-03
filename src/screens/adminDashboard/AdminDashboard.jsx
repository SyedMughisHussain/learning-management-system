import React from "react";
import { Routes, Route } from "react-router-dom";
import PersistentDrawerLeft from "../../components/Drawer";
import AddCourse from "./AddCourse/AddCourse";
import AllCourses from "./AllCourses/AllCourses";
import AllStudents from "./AllStudents/AllStudents";


const AdminDashboard = () => {
  return (
    <>
      <PersistentDrawerLeft
        screen={
          <Routes>
            <Route path="/" element={<AddCourse />} />
            <Route path="/allCourses" element={<AllCourses />} />
            <Route path="/allStudents" element={<AllStudents />} />
          </Routes>
        }
      />
    </>
  );
};

export default AdminDashboard;
