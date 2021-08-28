import { IonContent, IonPage } from "@ionic/react";
import { ImageCenter } from "../../components/image-center";
import { ItemMenu } from "../../components/item-menu";
import { HeaderBack } from "../../layout/header-back";
import { PROFILE_SETTING } from "../../views/profile";
import "./style.scss";
const Profile: React.FC = () => {
  return (
    <IonPage id="profile">
      <HeaderBack title="Profile" defaultHref="/tab/home" />
      <IonContent>
        <div className="mt-5">
          <ImageCenter
            name={"Jacob West"}
            srcImage={process.env.PUBLIC_URL + "/assets/image/Photo.png"}
          />
        </div>
        <div className="mt-6 ">
          {PROFILE_SETTING.map((data, index) => {
            return (
              <ItemMenu
                button={data.button}
                key={index}
                srcImage={data.image}
                endText={data.endText}
                isEvent={data.isEvent}
                title={data.title}
              ></ItemMenu>
            );
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Profile;
