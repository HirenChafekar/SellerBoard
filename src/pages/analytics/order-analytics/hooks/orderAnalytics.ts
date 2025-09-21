import { useState } from "react";

const useOrderAnalytics = () => {
  // Dummy data for now
  const [data] = useState({
    orders: 120,
    revenue: 50000,
    topProduct: "Wireless Mouse Pro",
  });
  return data;
};

export default useOrderAnalytics;
