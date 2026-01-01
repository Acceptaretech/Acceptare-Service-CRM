import React from "react";
import { useNavigate } from "react-router-dom";

const CallLog = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>Call Log</h2>

      <input placeholder="Client Name" /><br /><br />
      <input placeholder="Phone Number" /><br /><br />
      <select>
        <option>Call Status</option>
        <option>Connected</option>
        <option>Not Answered</option>
      </select><br /><br />
      <textarea placeholder="Call Notes" /><br /><br />

      <button onClick={() => navigate("/follow-up")}>
        Save Call & Go to Follow-up
      </button>

      <hr style={{ margin: "20px 0" }} />

      <h3>Quick Navigation</h3>

      <button onClick={() => navigate("/expenses")}>
        Go to Expense List
      </button>
      <br /><br />

      <button onClick={() => navigate("/tasks")}>
        Go to Task List
      </button>
    </div>
  );
};

export default CallLog;