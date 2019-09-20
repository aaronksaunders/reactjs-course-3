import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import AddUser from "../components/AddUsers";
import { AppContext } from "../Provider";

const EditUserPage = ({ match, handleUpdateUser, history }) => (
  <>
    <h1>Edit User Page</h1>
    <button onClick={() => history.goBack()}>Go Back</button>
    <AppContext.Consumer>
      {context => {
        // get the index passed in as a property
        let index = match.params.index;

        // get the people from the context and use the index to get the
        // correct user to pass into add user
        let user = context.people[index];

        return (
          <AddUser
            user={user}
            handleSubmit={e => {
              handleUpdateUser(e, index);
            }}
          />
        );
      }}
    </AppContext.Consumer>
  </>
);

EditUserPage.propTypes = {
  handleUpdateUser: PropTypes.func.isRequired
};

export default withRouter(EditUserPage);
