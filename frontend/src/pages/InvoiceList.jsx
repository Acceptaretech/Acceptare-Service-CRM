import React from "react";
import { useState } from "react";
import "./invoices.css";

const invoiceData = [
  { id: "INV-201", client: "Alpha Corp", amount: 28000, status: "Paid" },
  { id: "INV-202", client: "Beta Systems", amount: 16000, status: "Pending" },
  { id: "INV-203", client: "Gamma Tech", amount: 42000, status: "Overdue" },
  { id: "INV-204", client: "Nova Pvt Ltd", amount: 19000, status: "Paid" },
];

export default function Invoices() {
  const [filter, setFilter] = useState("All");

  const filteredInvoices =
    filter === "All"
      ? invoiceData
      : invoiceData.filter((i) => i.status === filter);

  return (
    <div className="invoices">
      <h2>Invoices</h2>

      {/* FILTER BUTTONS */}
      <div className="filters">
        {["All", "Paid", "Pending", "Overdue"].map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>Invoice</th>
            <th>Client</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredInvoices.map((inv) => (
            <tr key={inv.id}>
              <td>{inv.id}</td>
              <td>{inv.client}</td>
              <td>₹{inv.amount}</td>
              <td>
                <span className={`status ${inv.status.toLowerCase()}`}>
                  {inv.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}