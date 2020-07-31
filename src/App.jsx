import React, { useContext, useEffect } from "react";

import DashBoard from "./components/DashBoard";
import LandingPage from "./components/LandingPage";
import { UserContext } from "./providers/UserProvider";
import actions from "./services";

const App = () => {
  const user = useContext(UserContext);

  useEffect(() => {
    const checkCurrentUser = async () => {
      const { data } = await actions.registerUser(user);

      console.log(data);
    };
    checkCurrentUser();
  }, [user]);

  return (
    <div>
      <h1>{user ? user.displayName : "You are Signed Out"}</h1>

      <LandingPage />
      <DashBoard />
    </div>
  );
};

export default App;
