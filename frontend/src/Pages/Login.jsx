import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/LoginSignup.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = async () => {
    if (!email || !password) {
      alert("Please fill all the details!");
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json, text/plain, */*",
        },
      };

      const { data } = await axios.post(
        "https://e-commerce-xi-dusky.vercel.app/api/users/login",
        {
          email,
          password,
        },
        config
      );
      setSubmitted(!submitted);
      alert("LoggedIn");
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (submitted === true) {
      navigate("/");
    }
  }, [submitted]);
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login In</h1>
        <div className="loginsignup-fields">
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
        </div>
        <button onClick={handleSubmit} {...(disabled ? disabled : "")}>
          Login
        </button>
        <p className="loginsignup-login">
          Doesn't have account?{" "}
          <Link to={"/register"}>
            <span
              style={{
                cursor: "pointer",
              }}
            >
              Register here
            </span>
          </Link>
        </p>
        <div className="loginsignup-agree">
          <input
            type="checkbox"
            name=""
            id=""
            onClick={() => {
              setDisabled(!disabled);
            }}
          />
          <p>By continunig, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
