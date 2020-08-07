import React from "react";
import Loading from "../Loading";
import DataTable from "../DataTable";
import styles from "./dashboard.module.scss";

const Dashboard = ({ user }) => {
  return (
    <div className={styles.dashboard}>{user ? <DataTable /> : <Loading />}</div>
  );
};

export default Dashboard;
