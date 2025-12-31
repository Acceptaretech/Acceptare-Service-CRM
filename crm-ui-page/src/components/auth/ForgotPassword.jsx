import { Link } from "react-router-dom";
import "./auth.css";
function ForgotPassword() {
  return (
    <div className="forgot-wrapper">
      <h2 className="page-title">Reset Password Form</h2>

      <div className="forgot-card">
        <h3>Forgot Password</h3>

        <p className="forgot-text">
          Enter your registered email address. We will send you a reset link.
        </p>
        <input
          type="email"
          placeholder="Your e-mail address"
          className="forgot-input"
        />
        <button className="forgot-btn">Reset my Password</button><Link to="/" className="forgot-link">
  Back to Login
</Link>


      </div>
      <p className="footer-text">
        © 2025 Reset Password Form. All rights reserved
      </p>
    </div>
  );
}

export default ForgotPassword;
