import React from "react";
import { AppState } from "store";
import { loadavg } from "os";
import { connect } from "react-redux";

import "./Users.less";

export interface User {
  id: string;
  fistName: string;
  lastName: string;
}

export const USERS_PATH = "users";

interface UsersProps {
  users: User[];
  fetching: boolean;
  error: string | null;
}

const Users: React.FC<UsersProps> = ({ users, fetching, error }) => {
  debugger;
  return (
    <div>
      {users &&
        users.map(user => <div className="user_card">{user.fistName} </div>)}
      {fetching && <div>loading...</div>}
      {error && <div>{error} </div>}
    </div>
  );
};

const mapStateToProps = ({ userReducer }: AppState) => {
  return {
    users: userReducer.users,
    error: userReducer.error,
    fetching: userReducer.fetching
  };
};

export default connect(mapStateToProps)(Users);
