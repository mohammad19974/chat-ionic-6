import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import "./style.scss";
import { ReactSVG } from "react-svg";

export const FooterCall: React.FC<{
  onCloseCall: () => void;
  type: "call" | "video";
}> = ({ onCloseCall, type }) => {
  const buttons = [
    type === "call" && {
      icon: process.env.PUBLIC_URL + "/assets/svg/Sound.svg",
    },

    {
      icon: process.env.PUBLIC_URL + "/assets/svg/Microphone.svg",
    },
    {
      onClick: onCloseCall,
      icon: process.env.PUBLIC_URL + "/assets/svg/Hang up.svg",
    },
  ];
  return (
    <div id="footer-call">
      <div className="footer">
        {buttons.map((data, index) => {
          return (
            data && (
              <IonButtons
                onClick={data.onClick && data.onClick}
                className="btn"
                key={index}
              >
                <ReactSVG src={data.icon}></ReactSVG>
              </IonButtons>
            )
          );
        })}
      </div>
    </div>
  );
};
