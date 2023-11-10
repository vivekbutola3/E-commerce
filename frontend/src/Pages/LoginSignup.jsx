import React, { useState } from "react";
import axios from "axios";
import "./CSS/LoginSignup.css";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const handleClickShow = () => {
    setShow(!show);
  };
  const handleSubmit = async () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all the details!");
    }
    if (password !== confirmPassword) {
      alert("password and confirm password must be same!");
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users",
        {
          name,
          email,
          password,
        },
        config
      );
      alert("sucess");
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };
  console.log(name, email, password);
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <input
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            required
          />
          {/* <button
            style={{
              background: "none",
              color: "black",
              width: "10rem",
              height: "20px",
              fontSize: "14px",
              position: "absolute",
              bottom: "1.5rem",
              right: "-2rem",
            }}
            onClick={handleClickShow}
          >
            {show ? "hide" : "show"}
          </button> */}
        </div>
        <button onClick={handleSubmit}>Continue</button>
        <p className="loginsignup-login">
          Already have an account?{" "}
          <Link to={"/login"}>
            <span
              style={{
                cursor: "pointer",
              }}
            >
              Login here
            </span>
          </Link>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continunig, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
