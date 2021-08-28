import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  call,
  chevronBackOutline,
  informationCircle,
  videocam,
} from "ionicons/icons";
import { HeaderChatProps } from "./props";
import "./style.scss";
export const HeaderChat: React.FC<HeaderChatProps> = ({
  srcImage,
  name,
  subtitle,
  onClickCall,
  onClickVideo,
}) => {
  return (
    <IonHeader
      color="none"
      style={{
        background:
          " linear-gradient(180deg, rgba(245,245,245,1) 0%, rgba(247,247,247,0.9907192575406032) 100%)",
      }}
      id="header-chat-room"
      className="ion-no-border"
    >
      <IonToolbar color="none">
        <IonButtons slot="start">
          <IonBackButton
            color="primary"
            icon={chevronBackOutline}
            mode="md"
            defaultHref="/tab/home"
          ></IonBackButton>
        </IonButtons>
        <div style={{ display: "flex", paddingLeft: "4px" }}>
          <IonAvatar
            style={{ width: "30px", height: "30px", marginRight: "9px" }}
            slot="start"
          >
            <IonImg
              style={{ width: "30px", height: "30px" }}
              src={srcImage}
            ></IonImg>
          </IonAvatar>
          <IonLabel>
            <h2 className="label-header"> {name}</h2>
            <p>{subtitle}</p>
          </IonLabel>
        </div>
        <IonButtons onClick={onClickCall} slot="end">
          <IonButton>
            <IonIcon slot="icon-only" color="primary" icon={call}></IonIcon>
          </IonButton>
        </IonButtons>
        <IonButtons onClick={onClickVideo} slot="end">
          <IonButton>
            <IonIcon slot="icon-only" color="primary" icon={videocam}></IonIcon>
          </IonButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonButton>
            <IonIcon
              slot="icon-only"
              color="primary"
              icon={informationCircle}
            ></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};
