import React from "react";

const LeadGroups = () => {
  const leadGroups = [
    {
      name: "Hot Leads",
      description: "High priority prospects",
      total: 24,
      status: "Active",
    },
    {
      name: "Cold Leads",
      description: "Low engagement leads",
      total: 58,
      status: "Pending",
    },
    {
      name: "Corporate Leads",
      description: "Enterprise-level clients",
      total: 16,
      status: "Active",
    },
    {
      name: "Inactive Leads",
      description: "No recent activity",
      total: 9,
      status: "Inactive",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lead Groups</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>Group Name</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Total Leads</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>

        <tbody>
          {leadGroups.map((group, index) => (
            <tr key={index}>
              <td style={tdStyle}>{group.name}</td>
              <td style={tdStyle}>{group.description}</td>
              <td style={tdStyle}>{group.total}</td>
              <td style={tdStyle}>{group.status}</td>
              <td style={tdStyle}>
                <button style={btnStyle}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  borderBottom: "1px solid #ccc",
  padding: "10px",
  textAlign: "left",
};

const tdStyle = {
  borderBottom: "1px solid #eee",
  padding: "10px",
};

const btnStyle = {
  padding: "6px 12px",
  backgroundColor: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default LeadGroups;
