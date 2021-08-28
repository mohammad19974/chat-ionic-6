import { IonImg, IonText } from "@ionic/react";
import { ImageCenterProps } from "./props";
import "./style.scss";
export const ImageCenter: React.FC<ImageCenterProps> = ({ srcImage, name }) => {
  return (
    <div className="image-center">
      <div style={{ textAlign: "center" }}>
        <IonImg className="image" src={srcImage} />
        <IonText className="name">{name}</IonText>
      </div>
    </div>
  );
};
