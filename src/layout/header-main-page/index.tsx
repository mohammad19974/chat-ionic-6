import {
    IonAvatar,
    IonButton,
    IonButtons,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonToolbar,
} from '@ionic/react'
import { createSharp } from 'ionicons/icons'
import React from 'react'
import { useHistory } from 'react-router'
import { ReactSVG } from 'react-svg'
import { HeaderMainPageProps } from './props'
import './style.scss'
export const HeaderMainPage: React.FC<HeaderMainPageProps> = ({
    title,
    routeLink,
    iconLast,
    iconEnd,
    onClickEndIcon,
}) => {
    const history = useHistory()
    return (
        <IonHeader className="ion-no-border item-header">
            <IonToolbar>
                <IonItem lines="none">
                    <IonAvatar
                        onClick={() => routeLink && history.push(routeLink)}
                        slot="start"
                    >
                        <img src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg" />
                    </IonAvatar>

                    <IonLabel className="title">{title}</IonLabel>
                    <IonButtons>
                        <IonButton style={{ height: '45px' }}>
                            <ReactSVG
                                slot="icon-only"
                                src={iconLast}
                            ></ReactSVG>
                        </IonButton>
                    </IonButtons>
                    <IonButtons onClick={onClickEndIcon && onClickEndIcon}>
                        <IonButton style={{ height: '45px' }}>
                            <ReactSVG slot="icon-only" src={iconEnd}></ReactSVG>
                        </IonButton>
                    </IonButtons>
                </IonItem>
            </IonToolbar>
        </IonHeader>
    )
}
