import { Link } from "react-router-dom";
import "./auth.css";
function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="title">Hi!</h2>
        <p className="subtitle">Login to your dashboard</p>
        <label className="label">Log in as</label>
        <select className="input">
          <option value="">Select a role</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="agent">Agent</option>
          <option value="client">Client</option>
        </select>
        <input
          type="email"
          placeholder="Enter your email"
          className="input"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="input"
        />
        <Link to="/forgot-password" className="forgot-link">
  Forgot Password?
</Link>

        <button className="login-btn">Login</button>
        <p className="forgot">🔒 Forgot password?</p>

        <p className="copyright">
          © 2025 CRM System
        </p>
      </div>
    </div>
  );
}
export default Login;
