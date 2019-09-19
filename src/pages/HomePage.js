import React from "react";
import { withRouter } from "react-router";
import ListUsers from "../components/ListUsers";

class HomePage extends React.Component {
  render() {
    let { users, onDelete, onEdit, history } = this.props;
    return (
      <>
          <ListUsers
            users={users}
            onEdit={onEdit}
            onDelete={onDelete}
          ></ListUsers>
          <button onClick={() => history.push("/new-user")}>
            ADD USER
          </button>
        </>
    );
  }
}

export default withRouter(HomePage);
