import React, { Dispatch, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";

import Home from "./home";
import Users, { USERS_PATH } from "./users";

import { fetchUsers, UserAction } from "./users/usersActions";

export const REACT_APP_PATH = "/reactapp";

interface AppProps {
  onFetchUsers: () => void;
}

const App: React.FC<AppProps> = ({ onFetchUsers }) => {
  useEffect(() => {
    onFetchUsers();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path={`${REACT_APP_PATH}`} component={Home} />
      </Switch>
      <Switch>
        <Route
          exact
          path={`${REACT_APP_PATH}/${USERS_PATH}`}
          component={Users}
        />
      </Switch>
    </Router>
  );
};

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, UserAction>) {
  return {
    onFetchUsers: () => dispatch(fetchUsers())
  };
}

export default connect(null, mapDispatchToProps)(App);
