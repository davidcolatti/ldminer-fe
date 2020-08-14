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
    edit: <i class="fas fa-edit" />,
    delete: <i class="fas fa-trash-alt" />,
  });

  const data = {
    columns: [
      {
        label: "Company",
        field: "businessName",
        sort: "asc",
      },
      {
        label: "Category",
        field: "category",
        sort: "asc",
      },
      {
        label: "Phone",
        field: "phoneNumber",
      },
      {
        label: "City",
        field: "city",
        sort: "asc",
      },
      {
        label: "State",
        field: "state",
        sort: "asc",
      },
      {
        label: "Disposition",
        field: "disposition",
        sort: "asc",
      },
      {
        label: "Edit",
        field: "edit",
      },
      {
        label: "Delete",
        field: "delete",
      },
    ],
    rows: rows,
  };

  return (
    <div className={styles.dashboard}>
      {user ? (
        <MDBDataTable responsive striped small data={data} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Dashboard;
