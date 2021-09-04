import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonList,
    IonListHeader,
    IonPage,
    IonText,
} from '@ionic/react'

import { ImageCenter } from '../../components/image-center'
import { ItemMenu } from '../../components/item-menu'
import { MENU_SETTING_PROFILE_FRIEND } from '../../views/profile'
import './style.scss'
import { ItemSetting } from './components/item-setting'
import { HeaderBack } from '../../layout/header-back'

export const ProfileUser: React.FC = () => {
    return (
        <IonPage className="profile-user">
            <HeaderBack title=" " defaultHref={'/tab/home'} />
            <IonContent className="ion-padding">
                <div className="mt-10">
                    <ImageCenter
                        subTitle="Messanger"
                        srcImage={
                            process.env.PUBLIC_URL + '/assets/image/Oval.png'
                        }
                        name="Mohammaad"
                    ></ImageCenter>
                </div>
                <div className="mt-1">
                    <ItemSetting />
                </div>
                <div>
                    <IonList>
                        {MENU_SETTING_PROFILE_FRIEND.map((data, index) => {
                            return (
                                <>
                                    <IonListHeader>
                                        <IonText className="title-header-menu font-sf mb-2 mt-2">
                                            {data.title}
                                        </IonText>
                                    </IonListHeader>
                                    {data.menu.map((data2, index2) => {
                                        return (
                                            <ItemMenu
                                                lines="full"
                                                className="my-1"
                                                detail={
                                                    data2.icon ? false : true
                                                }
                                                key={index2}
                                                endText={data2.textEnd}
                                                isIcon={true}
                                                button={data2.button}
                                                srcImage={data2.icon ?? ''}
                                                isEvent={false}
                                                title={data2.title}
                                            />
                                        )
                                    })}
                                </>
                            )
                        })}
                    </IonList>
                </div>
            </IonContent>
        </IonPage>
    )
}
