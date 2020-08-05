import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./providers/UserProvider";
import actions from "./services";

import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";
import { Switch, Route } from "react-router-dom";

const NotFound = () => {
  return <div>404</div>;
};

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
      <NavBar user={user} />

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/dashboard"
          render={() => <Dashboard user={user} />}
        />
        <Route exact path="/random-leads" component={NotFound} />
        <Route exact path="/search-tool" component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
