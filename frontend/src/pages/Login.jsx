<<<<<<< HEAD
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password });
      login(res.user);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary login logic (will be replaced by API later)
    if (formData.email && formData.password) {
      console.log("Login Successful:", formData);
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
>>>>>>> eb35c3e (feat(frontend): fix routing, render dashboard, and configure gitignore)
    }
  };

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
=======
    <div className="login-container">
      <h2 className="login-title">Acceptare CRM Login</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
>>>>>>> eb35c3e (feat(frontend): fix routing, render dashboard, and configure gitignore)
  );
};

export default Login;
