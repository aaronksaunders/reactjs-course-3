import React from "react";
import { withRouter } from "react-router";
import AddUser from "../components/AddUsers";

class NewUserPage extends React.Component {
  render() {
    return (
      <>
        <h1>Add User Page</h1>
        <button onClick={() => this.props.history.goBack()}>Go Back</button>
        <AddUser handleSubmit={this.props.handleSubmit} />
      </>
    );
  }
}

export default withRouter(NewUserPage);
