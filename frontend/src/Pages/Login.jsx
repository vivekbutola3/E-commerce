import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/LoginSignup.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!email || !password) {
      alert("Please fill all the details!");
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://e-commerce-xi-dusky.vercel.app/api/users/login",
        { email, password },
        config
      );
      setSubmitted(true);
      alert("Logged In");
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
      console.log(err);
      alert("Login failed. Please try again.");
    }
  };

  useEffect(() => {
    if (submitted) {
      navigate("/");
    }
  }, [submitted, navigate]);

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="loginsignup-fields">
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
          <button type="submit" disabled={disabled}>
            Login
          </button>
        </form>
        <p className="loginsignup-login">
          Don't have an account?{" "}
          <Link to="/register">
            <span style={{ cursor: "pointer" }}>Register here</span>
          </Link>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" onClick={() => setDisabled(!disabled)} />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
