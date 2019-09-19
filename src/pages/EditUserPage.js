import React from "react";
import { withRouter } from "react-router";
import AddUser from "../components/AddUsers";


class EditUserPage extends React.Component {
  state = {
    currentUser: this.props.users[this.props.match.params.index]
  };

  render() {
    return (
      <>
        <h1>Edit User Page</h1>
        <button onClick={() => this.props.history.goBack()}>Go Back</button>
        <AddUser
          user={this.state.currentUser}
          handleSubmit={this.props.handleUpdateUser}
        />
      </>
    );
  }
}

export default withRouter(EditUserPage);
