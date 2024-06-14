import React, { useState } from "react";
import axios from "axios";
import "./CSS/LoginSignup.css";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClickShow = () => {
    setShow(!show);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all the details!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Password and confirm password must be the same!");
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://e-commerce-xi-dusky.vercel.app/api/users",
        { name, email, password },
        config
      );
      alert("Success");
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
      console.log(err);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} className="loginsignup-fields">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="show-password-button"
            onClick={handleClickShow}
          >
            {show ? "Hide" : "Show"}
          </button>
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">
          Already have an account?{" "}
          <Link to="/login">
            <span style={{ cursor: "pointer" }}>Login here</span>
          </Link>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
