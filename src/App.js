import React from "react";
import createHashHistory from "history/createBrowserHistory";
import { Router, Route, Link, Redirect } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import NewUserPage from "./pages/NewUserPage";
import EditUserPage from "./pages/EditUserPage";
// Ionic
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import { IonApp } from "@ionic/react";

const history = createHashHistory();
class App extends React.Component {
  state = {
    people: [],
    currentUser: null
  };

  /**
   * function to add users to the people object in this components
   * state
   */
  handleAddUser = _userInfo => {
    console.log(_userInfo);
    let createdDate = new Date().getTime();
    let { people } = this.state;

    // array method to add item to the end of an array
    people.push({ name: _userInfo, createdDate, id: createdDate });

    // set the state to the value of people array
    // that was just updated
    this.setState({ people: people });
  };

  handleEditUser = _userIndex => {
    history.push("/edit-user/" + _userIndex);
    this.setState({ currentUser: _userIndex });
  };

  handleUpdateUser = _updatedUser => {
    let { people, currentUser } = this.state;
    let newUser = {
      ...people[currentUser],
      name: _updatedUser
    };

    // remove the element and create a new array
    let newPeople = [
      ...people.slice(0, currentUser), // get all items in array BEFORE to selected index
      newUser,
      ...people.slice(currentUser + 1) // get all items in array AFTER the selected index
    ];

    // set the state to the value of newPeople array
    // that was just updated
    this.setState({ people: newPeople, currentUser: null });
  };

  //
  handleDeleteUser = _userIndex => {
    let { people } = this.state;

    // remove the element and create a new array
    let newPeople = [
      ...people.slice(0, _userIndex), // get all items in array BEFORE to selected index
      ...people.slice(_userIndex + 1) // get all items in array AFTER the selected index
    ];

    // set the state to the value of newPeople array
    // that was just updated
    this.setState({ people: newPeople });
  };

  // https://tylermcginnis.com/react-router-pass-props-to-components/
  render() {
    return (
      <IonApp>
        <Router history={history}>
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route
            exact
            path="/home"
            render={props => (
              <HomePage
                {...props}
                users={this.state.people}
                onDelete={this.handleDeleteUser}
                onEdit={this.handleEditUser}
              />
            )}
          />
          <Route
            exact
            path="/new-user"
            render={props => (
              <NewUserPage {...props} handleSubmit={this.handleAddUser} />
            )}
          />
          <Route
            path="/edit-user/:index"
            render={props => (
              <EditUserPage
                {...props}
                users={this.state.people}
                handleUpdateUser={this.handleUpdateUser}
              />
            )}
          />
          {/* <Route exact path="/edit-user" component={EditUserPage} /> */}
        </Router>
      </IonApp>
    );
  }
}

export default App;
