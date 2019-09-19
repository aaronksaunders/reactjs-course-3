import React from "react";
import PropTypes from "prop-types"; // https://reactjs.org/docs/typechecking-with-proptypes.html

class ListUsers extends React.Component {
  state = {
    name: {}
  };
  render() {
    let users = this.props.users;
    return users.length !== 0 ? (
      <>
        <h3> User List</h3>
        {this.props.users.map((_user, _index) => {
          return (
            <div key={_user.id} className="list-entry">
              <div className="title">
                {_user.name.first}&nbsp;{_user.name.last}
              </div>
              <div>{_user.id}</div>
              <button onClick={() => this.props.onDelete(_index)}>
                DELETE
              </button>
              <button onClick={() => this.props.onEdit(_index)}>EDIT</button>
            </div>
          );
        })}
      </>
    ) : (
      <div style={{ textAlign: "center" }}>
        <h4>Empty List...</h4>
      </div>
    );
  }
}

ListUsers.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ListUsers;
