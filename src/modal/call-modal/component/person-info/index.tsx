import { IonAvatar, IonImg, IonLabel } from "@ionic/react";
import "./style.scss";
export const PersonInfo: React.FC = () => {
  return (
    <div id="profile-info">
      <div className="align">
        <IonAvatar className="image">
          <IonImg
            className="image"
            src={process.env.PUBLIC_URL + "/assets/image/Oval.png"}
          />
        </IonAvatar>
        <IonLabel>
          <h2 className="label-header">Martha Craig</h2>
          <p className="label-p"> Contacting…</p>
        </IonLabel>
      </div>
    </div>
  );
};
