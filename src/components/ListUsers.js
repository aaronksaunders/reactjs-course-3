import React from "react";
import PropTypes from "prop-types"; // https://reactjs.org/docs/typechecking-with-proptypes.html
import {
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonListHeader,
  IonCard,
  IonCardHeader
} from "@ionic/react";

class ListUsers extends React.Component {
  state = {
    name: {}
  };
  render() {
    let users = this.props.users;
    return users.length !== 0 ? (
      <>
        <IonList padding>
          <IonListHeader>
            <h2> User List</h2>
          </IonListHeader>
          {this.props.users.map((_user, _index) => {
            return (
              <IonItem key={_user.id}>
                <IonLabel>
                  <h1>
                    {_user.name.first}&nbsp;{_user.name.last}
                  </h1>
                  <h3>{_user.id}</h3>
                </IonLabel>
                <IonButton
                  onClick={() => this.props.onEdit(_index)}
                >
                  Edit
                </IonButton>
                <IonButton
                  color="danger"
                  onClick={() => this.props.onDelete(_index)}
                >
                  Delete
                </IonButton>
              </IonItem>
            );
          })}
        </IonList>
      </>
    ) : (
      <IonCard>
        <IonCardHeader style={{textAlign :"center"}}>
          <h3>EMPTY LIST</h3>
        </IonCardHeader>
      </IonCard>
    );
  }
}

ListUsers.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ListUsers;
