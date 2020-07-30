import React, { useContext } from "react";

import DashBoard from "./components/DashBoard";
import LandingPage from "./components/LandingPage";
import { UserContext } from "./providers/UserProvider";

const App = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>{user ? user.displayName : "You are Signed Out"}</h1>
      <LandingPage />
      <DashBoard />
    </div>
  );
};

export default App;
