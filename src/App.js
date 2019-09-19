import React, { useContext } from "react";
import createHashHistory from "history/createBrowserHistory";
import { Router, Route, Link, Redirect } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import NewUserPage from "./pages/NewUserPage";
import EditUserPage from "./pages/EditUserPage";

import { AppContext } from "./Provider";

const history = createHashHistory();

const App = () => {
  // this gives me access to values from the context to 
  // utilized in my component
  const contextValue = useContext(AppContext);

  /**
   * function to add users to the people object in this components
   * state
   * 
   * @param {*} _userInfo 
   */
  const handleAddUser = _userInfo => {
    let createdDate = new Date().getTime();
    let { people } = contextValue;

    // array method to add item to the end of an array
    people.push({ name: _userInfo, createdDate, id: createdDate });
  };

  /**
   * 
   * @param {*} _userIndex 
   */
  const handleEditUser = _userIndex => {
    history.push("/edit-user/" + _userIndex);
  };

  /**
   * 
   * @param {*} _updatedUser 
   * @param {*} _currentIndex 
   */
  const handleUpdateUser = (_updatedUser, _currentIndex) => {
    let { people, setPeople } = contextValue;
    let newUser = {
      ...people[_currentIndex],
      name: _updatedUser
    };

    // remove the element and create a new array
    setPeople([
      ...people.slice(0, _currentIndex), // get all items in array BEFORE to selected index
      newUser,
      ...people.slice(_currentIndex + 1) // get all items in array AFTER the selected index
    ]);
  };

  /**
   * 
   * @param {*} _userIndex 
   */
  const handleDeleteUser = _userIndex => {
    let { people, setPeople } = contextValue;

    // remove the element and create a new array
    let newPeople = [
      ...people.slice(0, _userIndex), // get all items in array BEFORE to selected index
      ...people.slice(_userIndex + 1) // get all items in array AFTER the selected index
    ];

    setPeople(newPeople);
  };

  // https://tylermcginnis.com/react-router-pass-props-to-components/

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
              onDelete={handleDeleteUser}
              onEdit={handleEditUser}
            />
          )}
        />
        <Route
          exact
          path="/new-user"
          render={props => (
            <NewUserPage {...props} handleSubmit={handleAddUser} />
          )}
        />
        <Route
          path="/edit-user/:index"
          render={props => (
            <EditUserPage {...props} handleUpdateUser={handleUpdateUser} />
          )}
        />
      </Router>
    </div>
  );
};

export default App;
