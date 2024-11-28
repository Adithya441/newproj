import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./isAuthenticated"; // Your authentication logic or service

const PrivateRoute = () => {
  // Check if the user is authenticated
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />; // Redirect to login if not authenticated
};

export default PrivateRoute;
