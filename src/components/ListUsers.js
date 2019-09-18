import React from "react";
import PropTypes from "prop-types"; // https://reactjs.org/docs/typechecking-with-proptypes.html
import {
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonListHeader,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonIcon,
  IonCard,
  IonCardHeader
} from "@ionic/react";
import { trash, document, create } from "ionicons/icons";

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
              <IonItemSliding key={_user.id}>
                <IonItem key={_user.id}>
                  <IonLabel class="ion-text-wrap">
                    <h1>
                      {_user.name.first}&nbsp;{_user.name.last}
                    </h1>
                    <h3>{_user.id}</h3>
                  </IonLabel>
                </IonItem>

                <IonItemOptions side="end">
                  <IonItemOption color="danger">
                    <IonIcon
                      slot="icon-only"
                      icon={trash}
                      onClick={() => this.props.onDelete(_index)}
                    ></IonIcon>
                  </IonItemOption>
                  <IonItemOption>
                    <IonIcon
                      slot="icon-only"
                      icon={create}
                      onClick={() => this.props.onEdit(_index)}
                    ></IonIcon>
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            );
          })}
        </IonList>
      </>
    ) : (
      <IonCard>
        <IonCardHeader style={{ textAlign: "center" }}>
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
