import React from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  return (
    <div className="d-flex justify-content-around mt-5">
      <form className="d-flex justify-content-center w-100">
        <div className="w-50">
          <label htmlFor="fullName">
             Full Name
            <br />
            <input
            id="fullName"
              type="text"
              required
              placeholder="Full Name"
              style={{
                width: "400px",
              }}
              className="p-2"
            />
          </label>
          <br />
          <br />
          <label htmlFor="email">
            Email
            <br />
            <input
              type="email"
              id="email"
              required
              placeholder="Email"
              style={{
                width: "400px",
              }}
              className="p-2"
            />
          </label>
          <br />
          <br />
          <label htmlFor="password">
            Password
            <br />
            <input
              id="password"
              type="password"
              required
              placeholder="Password"
              style={{
                width: "400px",
              }}
              className="p-2"
            />
          </label>
          <br />
          <br />
          <label htmlFor="address">
            Address
            <br />
            <input
              type="text"
              id="address"
              required
              placeholder="Address"
              style={{
                width: "400px",
              }}
              className="p-2"
            />
          </label>
          <br />
          <label htmlFor="fullName">
            Upload Profile Picture
            <br />
            <input
              type="file"
              required
              placeholder="Full Name"
              style={{
                width: "400px",
              }}
              className="p-2"
            />
          </label>
          <button
            style={{
              marginTop: "20px",
              padding: "5px",
              width: "1040px",
              color: "white",
              fontSize: "18px",
              border: "none",
              backgroundColor: "#0D6DB7",
            }}
          >
            Register
          </button>
        </div>
        <div>
          <label htmlFor="course">
            Select Course
            <br />
            <select className="p-2" style={{
              width: "400px"
            }} id="course">
              <option value="volvo">Select Course</option>
              <option value="saab">Full Stack Web Development</option>
              <option value="opel">Mobile App Development</option>
              <option value="audi">Artificial Intelligence</option>
              <option value="audi">Graphic Designing</option>
              <option value="audi">Laptop Repairing</option>
            </select>
          </label>
          <br />
          <br />
          <label htmlFor="gender">
              Select Gender
            <br />
            <select className="p-2" style={{
              width: "400px"
            }} id="gender">
              <option value="volvo">Select Gender</option>
              <option value="saab">Male</option>
              <option value="saab">Female</option>
            </select>
          </label>
          <br />
          <br />
          <label htmlFor="phone">
            Phone
            <br />
            <input
              type="number"
              id="phone"
              required
              placeholder="Phone"
              style={{
                width: "400px",
              }}
              className="p-2"
            />
          </label>
          <br />
          <br />
          <label htmlFor="fatherName">
            Father Name
            <br />
            <input
              type="text"
              required
              id="fatherName"
              placeholder="Father Name"
              style={{
                width: "400px",
              }}
              className="p-2"
            />
          </label>
          <br />
          <br />
          <Link to={"/login"}>Aready have an account? Log In</Link>
        </div>
      </form>
    </div>
  );
};

export default Admission;
