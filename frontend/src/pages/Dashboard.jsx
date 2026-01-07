import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

import DashboardHeader from "../components/DashboardHeader";

const revenueData = [
  { month: "Jan", revenue: 40000 },
  { month: "Feb", revenue: 65000 },
  { month: "Mar", revenue: 80000 },
  { month: "Apr", revenue: 55000 },
];

const dealsStageData = [
  { name: "Qualified", value: 6 },
  { name: "Proposal", value: 4 },
  { name: "Negotiation", value: 2 },
  { name: "Won", value: 3 },
];

const leadData = [
  { name: "Leads", count: 120 },
  { name: "Customers", count: 45 },
];

const COLORS = ["#1976d2", "#64b5f6", "#ff9800", "#4caf50"];

const Dashboard = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      <DashboardHeader />

      {/* STATS */}
      <div style={stats}>
        <StatCard title="Total Leads" value="120" />
        <StatCard title="Active Deals" value="15" />
        <StatCard title="Revenue" value="₹2.4L" />
        <StatCard title="Won Deals" value="6" />
      </div>

      {/* CHARTS */}
      <div style={grid}>
        {/* Revenue */}
        <div style={card}>
          <h4>Monthly Revenue</h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line dataKey="revenue" stroke="#1976d2" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Deals by Stage */}
        <div style={card}>
          <h4>Deals by Stage</h4>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={dealsStageData} dataKey="value" outerRadius={80}>
                {dealsStageData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Leads vs Customers */}
        <div style={card}>
          <h4>Leads vs Customers</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={leadData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

/* -------- Components -------- */

const StatCard = ({ title, value }) => (
  <div style={statCard}>
    <p>{title}</p>
    <h3>{value}</h3>
  </div>
);

/* -------- Styles -------- */

const stats = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: 16,
  marginBottom: 30,
};

const statCard = {
  padding: 20,
  background: "#42785fff",
  borderRadius: 10,
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  gap: 20,
};

const card = {
  background: "#ffffffff",
  padding: 20,
  borderRadius: 10,
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

export default Dashboard;
