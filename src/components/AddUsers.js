import React, { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types"; // https://reactjs.org/docs/typechecking-with-proptypes.html

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        first: "",
        last: ""
      },
      invalid: true
    };

    if (this.props.user) {
      this.state.name = this.props.user.name;
    }

    // Create the ref
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
  }

  /**
   * a generic way to handle changing the value of the input text field
   * by using the name of the input element to properly set the
   * state
   */
  handleChangeText = _event => {
    _event.persist();

    // the destructuring - take everthing that was in name and assign
    // it to name, then set the value of the last name based on the
    // _event.target.value
    this.setState((state, props) => {
      let { first, last } = state.name;
      return {
        name: {
          ...state.name,
          [_event.target.name]: _event.target.value
        },
        invalid: !(_event.target.value.length && first.length && last.length)
      };
    });
  };

  clearInputFields = () => {
    this.setState({ name: { first: "", last: "" }, invalid: true });

    // clear the name
    this.firstNameRef.current.value = null;
    this.lastNameRef.current.value = null;
  };

  /**
   * 1) get the data that the user has entered from the state
   * 2) get a reference to the input elements so we can cleat them
   * 3) call the function passed in as a property to respond to
   * the user's action
   */
  handleBtnClick = _event => {
    // igmor default behavior of seubmit
    _event.preventDefault();

    let userName = this.state.name;

    this.clearInputFields();

    // pass the name of the user back to the
    // parent component through the event
    this.props.handleSubmit(userName);

    // go back to default route
    this.props.history.goBack();
  };

  render() {
    return (
      <>
        <div className="user-form">
            <div className="user-form-input-wrapper">
            <label>First Name
            <input
              type="text"
              name="first"
              ref={this.firstNameRef}
              value={this.state.name.first}
              onChange={this.handleChangeText}
            />
            </label>
            </div>
            <div className="user-form-input-wrapper">
            <label>Last Name
            <input
              type="text"
              name="last"
              ref={this.lastNameRef}
              value={this.state.name.last}
              onChange={this.handleChangeText}
            />
            </label>
          </div>
          <button
            onClick={this.handleBtnClick}
            disabled={this.state.invalid === true}
          >
            {this.props.user ? "Save User" : "Add User"}
          </button>
          <button onClick={this.clearInputFields}>Clear</button>
        </div>
      </>
    );
  }
}

// define the properties
AddUser.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  user: PropTypes.object
};

export default withRouter(AddUser);
