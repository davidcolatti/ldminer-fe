import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "./providers/UserProvider";
import actions from "./services";

import NavBar from "./components/NavBar/NavBar";
import QuickPick from "./components/QuickPick/QuickPick";
import Dashboard from "./components/Dashboard/Dashboard";
import LandingPage from "./components/LandingPage/LandingPage";

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
    <div className="app">
      <NavBar user={user} />

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/dashboard"
          render={() => <Dashboard user={user} />}
        />
        <Route
          exact
          path="/quick-pick"
          render={() => <QuickPick user={user} />}
        />
        <Route exact path="/search-tool" render={() => <div>404</div>} />
      </Switch>
    </div>
  );
};

export default App;
