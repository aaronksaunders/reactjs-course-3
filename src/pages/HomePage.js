import React from "react";
import { withRouter } from "react-router";
import ListUsers from "../components/ListUsers";

import {
  IonPage,
  IonContent,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle
} from "@ionic/react";

class HomePage extends React.Component {
  render() {
    let { users, onDelete, onEdit, history } = this.props;
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent padding>
          <ListUsers
            users={users}
            onEdit={onEdit}
            onDelete={onDelete}
          ></ListUsers>
          <IonButton onClick={() => history.push("/new-user")}>
            ADD USER
          </IonButton>
        </IonContent>
      </IonPage>
    );
  }
}

export default withRouter(HomePage);
