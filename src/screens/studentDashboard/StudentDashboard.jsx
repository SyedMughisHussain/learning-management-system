import React from "react";
import StudentDrawer from "../../components/Student Dashboard/StudentDrawer";
import { Routes, Route} from "react-router-dom";
import Student from "./Student/Student";

const StudentDashboard = () => {
  return (
    <>
      <StudentDrawer
        screen={
          <Routes>
            <Route path="/" element={<Student />} />
          </Routes>
        }
      />
    </>
  );
};

export default StudentDashboard;
