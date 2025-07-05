import React, { JSX } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login.tsx";
import Organization from "../pages/organization/index.tsx";

interface IProtectedProps {
  children: JSX.Element;
}

const RequireAuth: React.FC<IProtectedProps> = ({ children }) => {
  const auth = localStorage.getItem("accessToken");

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default function BaseRouter() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route
        path="organization"
        element={
          <RequireAuth>
            <Organization />
          </RequireAuth>
        }
      ></Route>
    </Routes>
  );
}
