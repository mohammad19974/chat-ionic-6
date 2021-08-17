import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { sendSharp } from 'ionicons/icons'
import React from 'react'
import BalonMe from './component/BalonMe'
import BalonUser from './component/BalonUser'
import './style.scss'
const ChatRoom: React.FC = () => {
    

    return (<IonPage id="chat-room">
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/tab/home"></IonBackButton>
                </IonButtons>
                <IonTitle>
                    Chat
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
         
            <BalonMe></BalonMe>
            <BalonUser/>
        </IonContent>
        <IonFooter>
            <IonToolbar>
                <IonItem>
                    <IonInput className={"input-send-message"} placeholder="messsage"></IonInput>
                    <IonButtons slot="end">
                        <IonButton>
                            <IonIcon slot="icon-only" icon={sendSharp}></IonIcon>
                        </IonButton>
                    </IonButtons>
                    </IonItem>
            </IonToolbar>
        </IonFooter>
    </IonPage>)
}
export default React.memo(ChatRoom)