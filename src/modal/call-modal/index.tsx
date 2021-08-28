import { IonButton, IonButtons, IonContent } from "@ionic/react";
import { FooterCall } from "./component/footer-call";
import { PersonInfo } from "./component/person-info";
import { ReactSVG } from "react-svg";

export const CallBody: React.FC<{
  count: number;
  onDismiss: () => void;
  type: "call" | "video";
}> = ({ count, onDismiss, type }) => (
  <IonContent fullscreen scrollY={false}>
    <div
      style={{
        height: "100%",
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/image/Messanger-Call.jpg"
        })`,
        backgroundSize: "100% 100%",
      }}
    >
      {type === "video" ? (
        <div style={{ position: "absolute", top: "30px", right: "10px" }}>
          <IonButtons style={{ height: "45px" }}>
            <IonButton style={{ height: "45px" }}>
              <ReactSVG
                src={process.env.PUBLIC_URL + "/assets/svg/Change-Camera.svg"}
              />
            </IonButton>
          </IonButtons>
        </div>
      ) : (
        ""
      )}
      <PersonInfo />
      <FooterCall type={type} onCloseCall={onDismiss} />
    </div>
  </IonContent>
);
