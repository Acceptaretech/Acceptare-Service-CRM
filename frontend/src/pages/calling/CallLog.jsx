import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CallLog = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    clientName: "",
    phoneNumber: "",
    callStatus: "",
    callNotes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now just logging data
    console.log("Call Log Data:", formData);

    // Navigate to Follow Up page
    navigate("/follow-up");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Call Log</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={formData.clientName}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <br /><br />

        <select
          name="callStatus"
          value={formData.callStatus}
          onChange={handleChange}
          required
        >
          <option value="">Call Status</option>
          <option value="Connected">Connected</option>
          <option value="Not Answered">Not Answered</option>
          <option value="Busy">Busy</option>
        </select>
        <br /><br />

        <textarea
          name="callNotes"
          placeholder="Call Notes"
          value={formData.callNotes}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Save Call</button>
      </form>
    </div>
  );
};

export default CallLog;