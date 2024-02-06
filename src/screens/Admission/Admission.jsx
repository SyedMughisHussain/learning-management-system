import React, { useReducer, useRef } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const email = useRef();
  const password = useRef();
  const fullName = useRef();
  const address = useRef();
  const phone = useRef();
  const fatherName = useRef();
  const selectCourse = useRef();
  const gender = useRef();
  const picture = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      Email: email.current.value,
      Password: password.current.value,
      Phone: phone.current.value,
      FatherName: fatherName.current.value,
      Gender: gender.current.value,
      Picture: picture.current.value,
      Address: address.current.value,
      FullName: fullName.current.value,
      SelectCourse: selectCourse.current.value,
    });
  };

  return (
    <div className="d-flex justify-content-around mt-5">
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center w-100"
      >
        <div className="w-50">
          <label htmlFor="fullName">
            Full Name
            <br />
            <input
              id="fullName"
              type="text"
              ref={fullName}
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
              ref={email}
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
              ref={password}
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
              ref={address}
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
              ref={picture}
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
            <select
              className="p-2"
              ref={selectCourse}
              style={{
                width: "400px",
              }}
              id="course"
            >
              <option value="Select Course">Select Course</option>
              <option value="Full Stack Web Development">Full Stack Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Graphic Designing">Graphic Designing</option>
              <option value="Laptop Repairing">Laptop Repairing</option>
            </select>
          </label>
          <br />
          <br />
          <label htmlFor="gender">
            Select Gender
            <br />
            <select
              className="p-2"
              ref={gender}
              style={{
                width: "400px",
              }}
              id="gender"
            >
              <option value="Select Gender">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
          <br />
          <br />
          <label htmlFor="phone">
            Phone
            <br />
            <input
              type="number"
              ref={phone}
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
              ref={fatherName}
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
