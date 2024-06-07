import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validCredentials = {
    username: "admin",
    password: "admin",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  useEffect(() => {
    if (localStorage.getItem("Admin")) {
      navigate("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    if (
      username === validCredentials.username &&
      password === validCredentials.password
    ) {
      localStorage.setItem("Admin", JSON.stringify(username));
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <div className="header">
      <h2><span>K</span>now <span>Y</span>our <span>E</span>mployee</h2>
        
      </div>
      <div className="login-container">
      <h2 className="logo">Login</h2>
        <form  className="login-form">
        
          <div className="inputGroup1">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Enter your username : admin"
            />
          </div>
          <div className="inputGroup1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Enter your password : admin"
            />
          </div>
          {error && (
            <p className="error">
              {" "}
              Only admins have rights to Login.
            </p>
          )}
          <div className="inputGroup12">
            <button onClick={handleSubmit}>Login</button>
          </div>
        </form>
      </div>{" "}
    </>
  );
};

export default Login;
