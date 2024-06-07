import React, { useState } from "react";
import "./Add.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Add = () => {
  const users = {
    fname: "",
    lname: "",
    dateOfBirth: "",
    maritalStatus: "",
    empStatus: "",
    salary: "",
    mobile: "",
    email: "",
    joining_date: "",
    gender: "",
    department: "",
    role: "",
    status: "",
    address:"",
  };

  const [user, setUser] = useState(users);

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;

    if (!user.fname) {
      toast.error("fname is required !");

      isValid = false;
    }

    if (!user.lname) {
      toast.error("lname is required !");

      isValid = false;
    }
    if (!user.address) {
      toast.error("Address is required !");

      isValid = false;
    }

    if (!user.dateOfBirth) {
      toast.error("date of birth is required !");

      isValid = false;
    }

    if (!user.maritalStatus) {
      toast.error("Marital status is required!");

      isValid = false;
    }

    if (!user.empStatus) {
      toast.error("employment status is required !");

      isValid = false;
    }

    if (!user.salary) {
      toast.error("salary is required !");

      isValid = false;
    } else if (isNaN(user.salary) || user.salary < 0) {
      toast.error("salary must be positive !");

      isValid = false;
    }

    if (!user.mobile) {
      toast.error("mobile is required !");

      isValid = false;
    } else if (!/^[0-9]{10}$/.test(user.mobile)) {
      toast.error("mobile must be 10 number !");

      isValid = false;
    }

    if (!user.email) {
      toast.error("email is required !");

      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email)
    ) {
      toast.error("email must be valid!");

      isValid = false;
    }

    if (!user.joining_date) {
      toast.error("joining date is required !");

      isValid = false;
    }

    if (!user.gender) {
      toast.error("gender is required !");

      isValid = false;
    }

    if (!user.department) {
      toast.error("department is required !");

      isValid = false;
    }

    if (!user.role) {
      toast.error("role is required !");

      isValid = false;
    }

    if (!user.status) {
      toast.error("status is required !");

      isValid = false;
    }

    return isValid;
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      await axios

        .post("http://localhost:8000/api/create", user)

        .then((response) => {
          toast.success("User Created Successfully!");

          navigate("/");
        })

        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div className="header">
      <h2><span>K</span>now <span>Y</span>our <span>E</span>mployee</h2>
        <Link to={"/"}>
          <button>Back</button>
        </Link>
      </div>
      <div className="adduser">
        <h3>Add New Employee</h3>

        <form className="adduserform" onSubmit={submitForm}>
          <div className="inputGroup">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              onChange={inputHandler}
              name="fname"
              id="fname"
              autoComplete="off"
              placeholder="First Name"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              onChange={inputHandler}
              name="lname"
              id="lname"
              autoComplete="off"
              placeholder="Last Name"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="address">Address</label>
            <textarea
              onChange={inputHandler}
              name="address"
              id="address"
              autoComplete="off"
              placeholder="Address"
            ></textarea>
          </div>

          <div className="inputGroup">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              onChange={inputHandler}
              name="dateOfBirth"
              id="dateOfBirth"
              autoComplete="off"
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="maritalStatus">Marital Status</label>
            <div className="status">
              <div className="sub_status">
                <label htmlFor="single">Single</label>
                <input
                  type="radio"
                  onChange={inputHandler}
                  name="maritalStatus"
                  value="single"
                  className="sub"
                  id="single"
                  autoComplete="off"
                />
              </div>
              <div className="sub_status">
                <label htmlFor="married">Married</label>
                <input
                  type="radio"
                  onChange={inputHandler}
                  name="maritalStatus"
                  value="married"
                  className="sub"
                  id="married"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <div className="inputGroup">
            <label htmlFor="empStatus">Employment Status</label>
            <div className="status">
              <div className="sub_status">
                <label htmlFor="fulltime">Full-time</label>
                <input
                  type="radio"
                  onChange={inputHandler}
                  name="empStatus"
                  value="fulltime"
                  className="sub"
                  id="fulltime"
                  autoComplete="off"
                />
              </div>

              <div className="sub_status">
                <label htmlFor="parttime">Part-time</label>
                <input
                  type="radio"
                  onChange={inputHandler}
                  name="empStatus"
                  value="parttime"
                  className="sub"
                  id="parttime"
                  autoComplete="off"
                />
              </div>

              <div className="sub_status">
                <label htmlFor="intern">Intern</label>
                <input
                  type="radio"
                  onChange={inputHandler}
                  name="empStatus"
                  value="intern"
                  className="sub"
                  id="intern"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <div className="inputGroup">
            <label htmlFor="salary">Salary</label>
            <input
              type="number"
              onChange={inputHandler}
              name="salary"
              id="salary"
              autoComplete="off"
              placeholder="Salary"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              onChange={inputHandler}
              name="mobile"
              id="mobile"
              autoComplete="off"
              placeholder="Mobile"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={inputHandler}
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Email"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="joining_date">Date Of Joining</label>
            <input
              type="date"
              onChange={inputHandler}
              name="joining_date"
              id="joining_date"
              autoComplete="off"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="status">Status</label>
            <div className="status">
              <div className="sub_status">
                <label htmlFor="active">Active</label>
                <input
                  type="radio"
                  onChange={inputHandler}
                  name="status"
                  value="active"
                  className="sub"
                  id="active"
                  autoComplete="off"
                />
              </div>
              <div className="sub_status">
                <label htmlFor="inactive">Inactive</label>
                <input
                  type="radio"
                  onChange={inputHandler}
                  name="status"
                  value="inactive"
                  className="sub"
                  id="inactive"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <div className="inputGroup">
            <label htmlFor="gender">Gender</label>
            <div className="gender">
              <div className="gender_sub">
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={inputHandler}
                  id="male"
                  autoComplete="off"
                />
              </div>
              <div className="gender_sub">
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={inputHandler}
                  id="female"
                  autoComplete="off"
                />
              </div>
              <div className="gender_sub">
                <label htmlFor="other">Other</label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={inputHandler}
                  id="other"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          <div className="inputGroup">
            <label htmlFor="Department">Department</label>
            <div className="status">
              <div className="sub_status">
                <label htmlFor="design">Design</label>
                <input
                  type="radio"
                  onChange={inputHandler}
                  name="department"
                  value="design"
                  className="sub"
                  id="design"
                  autoComplete="off"
                />
              </div>
              <div className="sub_status">
                <label htmlFor="coding">Coding</label>
                <input
                  type="radio"
                  onChange={inputHandler}
                  name="department"
                  value="coding"
                  className="sub"
                  id="coding"
                  autoComplete="off"
                />
              </div>
              <div className="sub_status">
                <label htmlFor="testing">Testing</label>
                <input
                  type="radio"
                  onChange={inputHandler}
                  name="department"
                  value="testing"
                  className="sub"
                  id="testing"
                  autoComplete="off"
                />
              </div>
              <div className="sub_status">
                <label htmlFor="content">Content</label>
                <input
                  type="radio"
                  onChange={inputHandler}
                  name="department"
                  value="content"
                  className="sub"
                  id="content"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <div className="inputGroup">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              onChange={inputHandler}
              name="role"
              id="role"
              autoComplete="off"
              placeholder="Role"
            />
          </div>
          <div className="inputGroup">
            <button type="submit">Add User</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Add;
