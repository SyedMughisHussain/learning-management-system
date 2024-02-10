import React from "react";
import ResponsiveAppBar from "../../components/Student Dashboard/NavBar/Header";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth } from "../../config/firebaseConfig/firebaseConfig";
import { db } from "../../config/firebaseConfig/firebaseConfig";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const StudentDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDataFromFireStore = async () => {
      const q = query(
        collection(db, "users"),
        where("uid", "==", auth.currentUser.uid)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        data.push(doc.data());
        setData([...data]);
      });
    };
    getDataFromFireStore();
  }, []);

  console.log(data);
  return (
    <>
      {data.length === 0 ? (
        <Box sx={{ display: "flex", marginTop: "250px", marginLeft: "600px" }}>
          <CircularProgress />
        </Box>
      ) : (
        <ResponsiveAppBar
          profileUrl={data[0].profileUrl}
          enrolledCourse={data[0].course}
          name={data[0].fullName}
          gender={data[0].gender}
          email={data[0].email}
          phone={data[0].phone}
        />
      )}
    </>
  );
};

export default StudentDashboard;
