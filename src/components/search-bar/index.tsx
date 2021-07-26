import { IonChip, IonIcon, IonItem, IonText } from "@ionic/react";
import { searchSharp } from "ionicons/icons";
import { SearchBarProps } from "./props";
import "./style.scss";
export const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <IonItem
      detail={false}
      detailIcon=""
      lines="none"
      button
      className="search-bar"
    >
      <div className="chap-bar">
        <IonIcon className="icon-search " icon={searchSharp}></IonIcon>
        <IonText>Search</IonText>
      </div>
    </IonItem>
  );
};
