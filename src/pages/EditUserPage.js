import React from "react";
import { withRouter } from "react-router";
import AddUser from "../components/AddUsers";

import {
  IonPage,
  IonContent,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardContent,
  IonButtons
} from "@ionic/react";

class EditUserPage extends React.Component {
  state = {
    currentUser: this.props.users[this.props.match.params.index]
  };

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Edit User Page</IonTitle>
            <IonButtons slot="end">
              <IonButton
                color="danger"
                onClick={() => this.props.history.goBack()}
              >
                Go Back
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardContent>
              <AddUser
                user={this.state.currentUser}
                handleSubmit={this.props.handleUpdateUser}
              />
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  }
}

export default withRouter(EditUserPage);
