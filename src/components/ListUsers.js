import React from "react";
import PropTypes from "prop-types"; // https://reactjs.org/docs/typechecking-with-proptypes.html

import { AppContext } from "../Provider";

const ListUsers = ({ onDelete, onEdit }) => {
  /**
   *
   * @param {Object} _user
   * @param {Number} _index
   */
  let renderListEntry = (_user, _index) => {
    return (
      <div key={_user.id} className="list-entry">
        <div className="title">
          {_user.name.first}&nbsp;{_user.name.last}
        </div>
        <div>{_user.id}</div>
        <button onClick={() => onDelete(_index)}>DELETE</button>
        <button onClick={() => onEdit(_index)}>EDIT</button>
      </div>
    );
  };

  return (
    <AppContext.Consumer>
      {({ people }) =>
        people.length !== 0 ? (
          people.map(renderListEntry)
        ) : (
          <div style={{ padding: 10 }}>No Users...</div>
        )
      }
    </AppContext.Consumer>
  );
};

ListUsers.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default ListUsers;
