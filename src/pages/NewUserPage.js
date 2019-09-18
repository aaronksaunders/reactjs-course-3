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

class NewUserPage extends React.Component {
  state = {
    people: []
  };

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Add User Page</IonTitle>
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
              <AddUser handleSubmit={this.props.handleSubmit} />
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  }
}

export default withRouter(NewUserPage);
