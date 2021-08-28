import {
  IonAvatar,
  IonImg,
  IonItem,
  IonLabel,
  IonText,
  IonToggle,
} from "@ionic/react";
import React from "react";
import "./style.scss";
import { ItemMenuProps } from "./props";
export const ItemMenu: React.FC<ItemMenuProps> = React.memo(
  ({ srcImage, title, endText, isEvent, button }) => {
    return (
      <IonItem button={button} className="item-menu-profile">
        <IonAvatar slot="start">
          <IonImg src={srcImage}></IonImg>
        </IonAvatar>
        <IonLabel className="title">{title}</IonLabel>
        {isEvent ? (
          <IonToggle></IonToggle>
        ) : (
          endText && (
            <IonText className="end-text" slot="end">
              {endText}
            </IonText>
          )
        )}
      </IonItem>
    );
  }
);
