import { IonChip, IonContent, IonList, IonPage } from "@ionic/react";

import React from "react";
import { ItemChat } from "../../components/item-chat";
import { SliderStories } from "../../components/slider-stories";
import { HeaderMainPage } from "../../layout/header-main-page";
import { itemChat } from "../../views/item-chat";
import { StoriesList } from "../../views/stories";
import { SearchBar } from "../../components/search-bar";
const HomeChat: React.FC = () => {
  return (
    <IonPage>
      <HeaderMainPage title="Chats" />
      <IonContent>
        <SearchBar />
        <SliderStories listStories={StoriesList} />
        <IonList>
          {itemChat.map((data, index) => {
            return (
              <ItemChat
                button={true}
                detail={false}
                lines={"none"}
                key={index}
                name={data.name}
                state={data.state}
                subTitle={data.subTitle}
                imageProfile={data.imageProfile}
              />
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default React.memo(HomeChat);
