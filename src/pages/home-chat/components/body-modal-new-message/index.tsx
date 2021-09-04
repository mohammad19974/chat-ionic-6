import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonList,
    IonListHeader,
    IonText,
    IonTitle,
    IonToolbar,
} from '@ionic/react'
import { ReactSVG } from 'react-svg'
import { FooterCall } from '../../../../modal/call-modal/component/footer-call'
import { PersonInfo } from '../../../../modal/call-modal/component/person-info'
import { itemPeople } from '../../../../views/item-people'
import { ItemPeople } from '../../../people/components/item-people'
import './style.scss'
export const BodyModalNewMessage: React.FC<{
    onDismiss: () => void
    type: 'call' | 'video'
}> = ({ onDismiss, type }) => (
    <>
        <IonHeader className="ion-no-border">
            <IonToolbar>
                <IonButtons slot="start" onClick={onDismiss}>
                    <IonButton>Cancel</IonButton>
                </IonButtons>
                <IonTitle>New message</IonTitle>
            </IonToolbar>
            <div
                style={{
                    background: '#F9F8F9',
                    width: '100%',
                    padding: '5px',
                }}
            >
                <div style={{ margin: 'auto' }} className="flex">
                    <span
                        className="font-sf"
                        style={{
                            fontSize: '15px',
                            paddingLeft: '4px',
                            position: 'relative',
                            top: '2px',
                            color: 'rgba(0, 0, 0, 0.4)',
                        }}
                    >
                        To:
                    </span>
                    <input
                        style={{
                            width: '100%',
                            background: '#F9F8F9',
                            outline: 'none',
                            border: '1px solid #F9F8F9',
                        }}
                    ></input>
                </div>
            </div>
        </IonHeader>

        <IonContent fullscreen className="body-modal-message">
            <IonList>
                <IonListHeader>
                    {' '}
                    <IonText className="title-list">Friends</IonText>
                </IonListHeader>
                {itemPeople.map((data, index) => {
                    return (
                        <ItemPeople
                            key={index}
                            name={data.name}
                            isActive={false}
                            pathImage={data.pathImage}
                        />
                    )
                })}
            </IonList>
        </IonContent>
    </>
)
