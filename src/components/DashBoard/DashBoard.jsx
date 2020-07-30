import React from "react";
import { auth } from "../../config/Fire";

const DashBoard = () => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default DashBoard;
