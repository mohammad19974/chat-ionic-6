import { IonAvatar, IonImg, IonText } from '@ionic/react'
import { IValuesStoies } from '../../props'
import './style.scss'
export const Story: React.FC<IValuesStoies> = ({
    imageStore,
    profileImage,
    name,
}) => {
    return (
        <div
            className="stories"
            style={{ backgroundImage: `url(${imageStore})` }}
        >
            <IonAvatar className="avatar">
                {' '}
                <IonImg src={profileImage}></IonImg>
            </IonAvatar>
            <IonText className="text-name">{name}</IonText>
        </div>
    )
}
