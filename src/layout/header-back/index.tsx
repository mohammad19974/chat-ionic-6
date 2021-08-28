import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { HeaderBackProps } from "./props";

export const HeaderBack: React.FC<HeaderBackProps> = ({
  title,
  defaultHref,
}) => {
  return (
    <IonHeader className="ion-no-border">
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="start">
          <IonBackButton defaultHref={defaultHref}></IonBackButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};
