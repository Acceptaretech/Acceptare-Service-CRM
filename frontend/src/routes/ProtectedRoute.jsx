import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // abhi dummy

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
