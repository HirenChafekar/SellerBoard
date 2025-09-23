import React, { JSX } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Watchlist } from "../pages/watchlist/screens/Watchlist.js";
import { WatchlistCreate } from "../pages/watchlist/screens/WatchListCreate.js";
import { KeywordAnalysis } from "../pages/keyword-analysis/screens/KeywordAnalysis.js";
import { KeywordAnalysisCreate } from "../pages/keyword-analysis/screens/KeywordAnalysisCreate.js";
import OrderAnalytics from "../pages/analytics/order-analytics/screens/OrderAnalytics";
import AdsAnalytics from "../pages/analytics/ads-analytics/screens/AdsAnalytics.js";
import { Home } from "../pages/home/screens/Home.js";
import Organization from "../pages/organization/index.js";
import Login from "../pages/login/Login.js";

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
        <Route index path="home" element={<Home />} />
        
        <Route path="watchlist" element={<Outlet />}>
          <Route index element={<Watchlist />} />
          <Route path="create" element={<WatchlistCreate />} />
        </Route>

        <Route path="keyword-analysis" element={<Outlet />}>
          <Route index element={<KeywordAnalysis />} />
          <Route path="create" element={<KeywordAnalysisCreate />} />
        </Route>

        {/* Analytics Parent Route */}
        <Route path="analytics" element={<Outlet />}>
          <Route path="order-analytics" element={<OrderAnalytics />} />
          <Route path="ads-analytics" element={<AdsAnalytics />} />
        </Route>
      </Route>
    </Routes>
  );
}
