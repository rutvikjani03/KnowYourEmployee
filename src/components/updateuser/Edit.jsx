import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Edit = () => {
  const initialValues = {
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

  const { id } = useParams();
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getone/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://know-your-employee2.vercel.app/api/update/${id}`, user)
      .then((response) => {
        toast.success("User Updated Successfully", {
          position: "top-right",
        });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="header">
      <h2><span>K</span>now <span>Y</span>our <span>E</span>mployee</h2>
        <Link to={"/"}><button>Back</button></Link>
      </div>
      <div className="adduser">
        
        <h3>Update Employee</h3>
        <form className="adduserform" onSubmit={submitForm}>
          <div className="inputGroup">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              value={user.fname}
              onChange={inputChangeHandler}
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
              value={user.lname}
              onChange={inputChangeHandler}
              name="lname"
              id="lname"
              autoComplete="off"
              placeholder="Last Name"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="address">Address</label>
            <textarea value={user.address}
              onChange={inputChangeHandler}
              name="address"
              id="address"
              autoComplete="off"
              placeholder="Address"></textarea>
          </div>
          <div className="inputGroup">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              value={user.dateOfBirth}
              onChange={inputChangeHandler}
              name="dateOfBirth"
              id="dateOfBirth"
              autoComplete="off"
            />
          </div>
          <div className="inputGroup">
            <label>Marital Status</label>
            <div>
              <div className="status">
                <div className="sub_status">
                  <label htmlFor="single">Single</label>
                  <input
                    type="radio"
                    id="single"
                    name="maritalStatus"
                    value="single"
                    checked={user.maritalStatus === "single"}
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="sub_status">
                  <label htmlFor="married">Married</label>
                  <input
                    type="radio"
                    id="married"
                    name="maritalStatus"
                    value="married"
                    checked={user.maritalStatus === "married"}
                    onChange={inputChangeHandler}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="inputGroup">
            <label>Employment Status</label>
            <div>
              <div className="status">
                <div className="sub_status">
                  <label htmlFor="fulltime">Full-time</label>
                  <input
                    type="radio"
                    id="fulltime"
                    name="empStatus"
                    value="fulltime"
                    checked={user.empStatus === "fulltime"}
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="sub_status">
                  <label htmlFor="parttime">Part-time</label>
                  <input
                    type="radio"
                    id="parttime"
                    name="empStatus"
                    value="parttime"
                    checked={user.empStatus === "parttime"}
                    onChange={inputChangeHandler}
                  />
                </div>

                <div className="sub_status">
                  <label htmlFor="intern">Intern</label>
                  <input
                    type="radio"
                    id="intern"
                    name="empStatus"
                    value="intern"
                    checked={user.empStatus === "intern"}
                    onChange={inputChangeHandler}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="inputGroup">
            <label htmlFor="salary">Salary</label>
            <input
              type="number"
              value={user.salary}
              onChange={inputChangeHandler}
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
              value={user.mobile}
              onChange={inputChangeHandler}
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
              value={user.email}
              onChange={inputChangeHandler}
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
              value={user.joining_date}
              onChange={inputChangeHandler}
              name="joining_date"
              id="joining_date"
              autoComplete="off"
            />
          </div>
          <div className="inputGroup">
            <label>Gender</label>
            <div className="status">
              <div className="sub_status">
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={user.gender === "male"}
                  onChange={inputChangeHandler}
                />
              </div>

              <div className="sub_status">
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={user.gender === "female"}
                  onChange={inputChangeHandler}
                />
              </div>

              <div className="sub_status">
                <label htmlFor="other">Other</label>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  checked={user.gender === "other"}
                  onChange={inputChangeHandler}
                />
              </div>
            </div>
          </div>
          <div className="inputGroup">
            <label>Department</label>
            <div className="status">
              <div className="sub_status">
                <label htmlFor="design">Design</label>
                <input
                  type="radio"
                  id="design"
                  name="department"
                  value="design"
                  checked={user.department === "design"}
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="sub_status">
                <label htmlFor="testing">Testing</label>
                <input
                  type="radio"
                  id="testing"
                  name="department"
                  value="testing"
                  checked={user.department === "testing"}
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="sub_status">
                <label htmlFor="coding">Coding</label>
                <input
                  type="radio"
                  id="coding"
                  name="department"
                  value="coding"
                  checked={user.department === "coding"}
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="sub_status">
                <label htmlFor="content">Content</label>
                <input
                  type="radio"
                  id="content"
                  name="department"
                  value="content"
                  checked={user.department === "content"}
                  onChange={inputChangeHandler}
                />
              </div>
            </div>
          </div>

          <div className="inputGroup">
            <label>Status</label>
            <div className="status">
              <div className="sub_status">
                <label htmlFor="active">Active</label>
                <input
                  type="radio"
                  id="active"
                  name="status"
                  value="active"
                  checked={user.status === "active"}
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="sub_status">
                <label htmlFor="inactive">Inactive</label>
                <input
                  type="radio"
                  id="inactive"
                  name="status"
                  value="inactive"
                  checked={user.status === "inactive"}
                  onChange={inputChangeHandler}
                />
              </div>
            </div>
          </div>

          <div className="inputGroup">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              value={user.role}
              onChange={inputChangeHandler}
              name="role"
              id="role"
              autoComplete="off"
              placeholder="Role"
            />
          </div>

          <div className="inputGroup">
            <button type="submit">Update User</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
