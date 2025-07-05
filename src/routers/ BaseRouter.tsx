import React, { JSX } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login.tsx";
import Organization from "../pages/organization/index.tsx";
import { Home } from "../pages/home/screens/Home.tsx";
import { Watchlist } from "../pages/watchlist/screens/Watchlist.js";


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
      <Route path="/" element={<Navigate to="/sellerboard/home" />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="sellerboard"
        element={
          <RequireAuth>
            <Organization />
          </RequireAuth>
        }
      >
        <Route path="home" element={<Home />} />
        <Route path="watchlist" element={<Watchlist />} />
      </Route>
    </Routes>
  );
}
