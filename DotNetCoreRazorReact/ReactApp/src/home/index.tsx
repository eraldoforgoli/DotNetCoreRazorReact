import React from "react";
import { useHistory } from "react-router";
import { USERS_PATH } from "../users";
import { REACT_APP_PATH } from "../App";

import "./Home.less";

const Home: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <h3>Home page</h3>
      <div className="sidenav">
        <button
          className="button__primary"
          onClick={() => history.push(`${REACT_APP_PATH}/${USERS_PATH}`)}
        >
          Go to users
        </button>
      </div>
    </div>
  );
};

export default Home;
