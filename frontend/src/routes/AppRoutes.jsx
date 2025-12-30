import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import LeadGroups from "../pages/LeadGroups";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/lead-groups"
        element={
          <ProtectedRoute>
            <LeadGroups />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
