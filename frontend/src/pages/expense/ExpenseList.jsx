import React from "react";

const ExpenseList = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Expense List</h2>

      <table border="1" cellPadding="10" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>15-01-2026</td>
            <td>Travel</td>
            <td>500</td>
            <td>Client Visit</td>
          </tr>
          <tr>
            <td>15-01-2026</td>
            <td>Food</td>
            <td>200</td>
            <td>Team Lunch</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;