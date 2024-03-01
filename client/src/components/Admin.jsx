import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../auth/Authpage";
const Admin = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/login" />;
};

export default Admin;
