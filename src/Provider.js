import React from "react";
export const AppContext = React.createContext();
export default class AppProvider extends React.Component {
  // specify the state structure and inital state for the content provider
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
    currentUser: null,
    // function to call to update the user list
    setPeople: _people => {
      this.setState({ people: [..._people] });
    },
    // function to call to update the current user
    setCurrentUser: _user => {
      this.setState({ currentUser: _user });
    }
  };

  // pass the current state as the value for the context, wrap
  // all child components so they have access to the state variables
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
