import React from "react";
import createHashHistory from "history/createBrowserHistory";
import { Router, Route, Link, Redirect } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import NewUserPage from "./pages/NewUserPage";
import EditUserPage from "./pages/EditUserPage";

const history = createHashHistory();
class App extends React.Component {
  state = {
    people: [
      {
        id: 12120,
        name: {
          first: "Rose",
          last: "Crayola"
        }
      }
    ],
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
      <div className="App">
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
        </Router>
      </div>
    );
  }
}

export default App;
