import React from "react";
import Loading from "../Loading";

const Dashboard = ({ user }) => {
  return <div>{user ? "Dashboard" : <Loading />}</div>;
};

export default Dashboard;
