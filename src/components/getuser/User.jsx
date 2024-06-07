import React, { useEffect, useState } from "react";
import "./User.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import Logout from "../login/Logout";

const User = () => {
  const [users, setUsers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showAboutPopup, setShowAboutPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getall");
      setUsers(response.data);
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("Admin");
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  const deleteUser = async (userId) => {
    await axios
      .delete(`http://localhost:8000/api/delete/${userId}`)
      .then((response) => {
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
        toast.success("User Deleted Successfully", {
          position: "top-right",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showUserDetails = (user) => {
    setCurrentUser(user);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setCurrentUser(null);
  };

  const getStatusClass = (status) => {
    return status.toLowerCase() === "active"
      ? "status-active"
      : "status-inactive";
  };

  const showAbout = () => {
    setShowAboutPopup(true);
  };

  const closeAboutPopup = () => {
    setShowAboutPopup(false);
  };

  return (
    <>
      <div className="header">
        <h2>
          <span>K</span>now <span>Y</span>our <span>E</span>mployee
        </h2>

        <div>
          <button className="about" onClick={showAbout}>
            About
          </button>
          <button>
            <Logout />
          </button>
        </div>
      </div>

      <div className="usertable">
        <div className="back">
          <button>
            <Link to={"/add"} className="addButton">
              Add Employee
            </Link>
          </button>
        </div>
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="key">{index + 1}</td>
                <td onClick={() => showUserDetails(user)} className="nameCell">
                  {user.fname} {user.lname}
                </td>
                <td className="email-field">{user.email}</td>
                <td className={getStatusClass(user.status)}>{user.status}</td>
                <td>{user.role}</td>
                <td className="actionButton">
                  <button onClick={() => deleteUser(user._id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <Link to={`/edit/${user._id}`}>
                    <FontAwesomeIcon icon={faPencil} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showPopup && currentUser && (
          <div className="popup">
            <div className="popup-inner">
              <button onClick={closePopup}> &times; </button>
              <h3>Employee Details</h3>
              <table className="popup-table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>
                      {currentUser.fname} {currentUser.lname}
                    </td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>{currentUser.address}</td>
                  </tr>
                  <tr>
                    <th>Date of Birth</th>
                    <td>{currentUser.dateOfBirth}</td>
                  </tr>
                  <tr>
                    <th>Marital Status</th>
                    <td>{currentUser.maritalStatus}</td>
                  </tr>
                  <tr>
                    <th>Employment Status</th>
                    <td>{currentUser.empStatus}</td>
                  </tr>
                  <tr>
                    <th>Salary</th>
                    <td>{currentUser.salary}</td>
                  </tr>
                  <tr>
                    <th>Mobile</th>
                    <td>{currentUser.mobile}</td>
                  </tr>
                  <tr>
                    <th className="email-field">Email</th>
                    <td>{currentUser.email}</td>
                  </tr>
                  <tr>
                    <th>Date Of Joining</th>
                    <td>{currentUser.joining_date}</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>{currentUser.gender}</td>
                  </tr>
                  <tr>
                    <th>Department</th>
                    <td>{currentUser.department}</td>
                  </tr>
                  <tr>
                    <th>Role</th>
                    <td>{currentUser.role}</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td>{currentUser.status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {showAboutPopup && (
        <div className="popup">
          <div className="popup-inner" id="pop">
            <button onClick={closeAboutPopup}> &times; </button>
            <h2>Know Your Employee</h2>
            <p>
              {" "}
              Know Your Employee is an employee management system designed to
              help organizations manage their employee data efficiently. With
              our system, you can easily add, edit, and delete employee
              information, as well as track their employment status and other
              details. Our system encompasses the entire employee journey, and
              provides a comprehensive platform for employee management.
            </p>

            <p>
              {" "}
              Only the admin has the rights to manipulate employee information.
              For project checkout, you can use the credentials provided above
              for login. Note that there is no sign-up functionality for new
              users.Because add , update and delete etc operations only done by
              only admin of any particular company . so that there is not any
              sign up facility for any other employee
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
