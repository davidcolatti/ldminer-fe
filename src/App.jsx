import React, { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";

import DashBoard from "./components/DashBoard";
import LandingPage from "./components/LandingPage";
import { UserContext } from "./providers/UserProvider";
import actions from "./services";

import { GET_LEADS, GET_LEADSCOUNT, GET_USER } from "./graphql/queries";

const App = () => {
  const user = useContext(UserContext);
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { uid: "108166882346526899777" },
  });

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
