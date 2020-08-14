import React from "react";
import Loading from "../Loading/Loading";
import { MDBDataTable } from "mdbreact";

import styles from "./dashboard.module.scss";

const Dashboard = ({ user }) => {
  // const rows = user?.leadsList.map((lead) => {
  //   return {
  //     businessName: "My Business",
  //     category: "Landscaping",
  //     phoneNumber: "561-703-1280",
  //     city: "Boca",
  //     state: "FL",
  //     disposition: "Prospect",
  //     edit: "EDIT BTN",
  //     delete: "DELETE BTN",
  //   };
  // });

  const rows = new Array(7).fill({
    businessName: "My Business",
    category: "Landscaping",
    phoneNumber: "561-703-1280",
    city: "Boca",
    state: "FL",
    disposition: "Prospect",
    edit: <button>Edit</button>,
    delete: <button>Delete</button>,
  });

  const data = {
    columns: [
      {
        label: "Company",
        field: "businessName",
        sort: "asc",
        width: 150,
      },
      {
        label: "Category",
        field: "category",
        sort: "asc",
        width: 270,
      },
      {
        label: "Phone",
        field: "phoneNumber",
        width: 200,
      },
      {
        label: "City",
        field: "city",
        sort: "asc",
        width: 100,
      },
      {
        label: "State",
        field: "state",
        sort: "asc",
        width: 150,
      },
      {
        label: "Disposition",
        field: "disposition",
        sort: "asc",
        width: 100,
      },
      {
        label: "Edit",
        field: "edit",
        width: 100,
      },
      {
        label: "Delete",
        field: "delete",
        width: 100,
      },
    ],
    rows: rows,
  };

  return (
    <div className={styles.dashboard}>
      {user ? <MDBDataTable striped bordered small data={data} /> : <Loading />}
    </div>
  );
};

export default Dashboard;
