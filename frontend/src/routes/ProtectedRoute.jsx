import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../services/authServices";

const ProtectedRoute = ({ children }) => {
  const isAuth = isAuthenticated();

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
