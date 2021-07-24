import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonToolbar,
} from "@ionic/react";
import { createSharp } from "ionicons/icons";
import React from "react";
import { HeaderMainPageProps } from "./props";
export const HeaderMainPage: React.FC<HeaderMainPageProps> = ({ title }) => {
  return (
    <IonHeader className="ion-no-border">
      <IonToolbar>
        <IonItem lines="none">
          <IonAvatar slot="start">
            <img src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg" />
          </IonAvatar>
          <IonLabel>Chats</IonLabel>
          <IonButtons>
            <IonButton>
              <IonIcon slot="icon-only" icon={createSharp}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonItem>
      </IonToolbar>
    </IonHeader>
  );
};
