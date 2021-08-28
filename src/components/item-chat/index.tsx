import { IonAvatar, IonIcon, IonItem, IonLabel } from "@ionic/react";
import {
  checkmarkDoneCircleOutline,
  checkmarkDoneCircleSharp,
  ellipseOutline,
} from "ionicons/icons";
import { ItemChatProps } from "./props";
import React from "react";
import "./style.scss";
export const ItemChat: React.FC<ItemChatProps> = React.memo(
  ({ name, subTitle, imageProfile, state, lines, button, detail }) => {
    return (
      <IonItem
        routerLink={"/chat-room/5"}
        detail={detail && detail}
        button={button && button}
        lines={lines && lines}
        className="item-chat"
      >
        <IonAvatar className="avatar" slot="start">
          <img className="image" src={imageProfile} />
        </IonAvatar>
        <IonLabel>
          <h1 className="title">{name}</h1>
          {subTitle && <p className="sub-title">{subTitle}</p>}
        </IonLabel>
        <IonIcon
          color={state == "insend" ? "light" : "primary"}
          slot="end"
          icon={
            state == "insend"
              ? ellipseOutline
              : state === "send" || state == "unread"
              ? checkmarkDoneCircleOutline
              : state === "read"
              ? checkmarkDoneCircleSharp
              : ellipseOutline
          }
        ></IonIcon>
      </IonItem>
    );
  }
);
