import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./providers/UserProvider";
import actions from "./services";

import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";

const App = () => {
  const userAuthenticaton = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkCurrentUser = async () => {
      const { data } = await actions.registerUser(userAuthenticaton);

      console.log(data);
      setUser(data.currentUser);
    };
    checkCurrentUser();
  }, [userAuthenticaton]);

  return (
    <div>
      <NavBar />
      <h1>{user ? user.displayName : "You are Signed Out"}</h1>
      <LandingPage />
      <Dashboard />
    </div>
  );
};

export default App;
