import React from "react";

const TaskList = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Task List</h2>

      <ul style={{ marginTop: "10px" }}>
        <li>Call client for follow-up</li>
        <li>Prepare quotation</li>
        <li>Send invoice</li>
      </ul>
    </div>
  );
};

export default TaskList;