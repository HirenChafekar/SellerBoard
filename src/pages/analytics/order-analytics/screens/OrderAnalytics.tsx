import React from "react";
import useOrderAnalytics from "../hooks/orderAnalytics";

const OrderAnalytics: React.FC = () => {
  const data = useOrderAnalytics();
  return (
    <div>
      <h2>Order Analytics</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default OrderAnalytics;
