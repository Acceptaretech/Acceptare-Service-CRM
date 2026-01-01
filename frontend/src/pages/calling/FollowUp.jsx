import React from "react";
import "./calling.css";

const FollowUp = () => {
  return (
    <div className="calling-container">
      <h2>Follow Up</h2>

      <form className="call-form">
        <input type="date" />
        <select>
          <option>Follow-up Status</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
        <textarea placeholder="Follow-up Remarks"></textarea>

        <button type="submit">Save Follow-up</button>
      </form>
    </div>
  );
};

export default FollowUp;