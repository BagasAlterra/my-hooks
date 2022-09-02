import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  return (
    <div>
      <p>Dashboard Page</p>
    </div>
  );
};

export default Dashboard;
