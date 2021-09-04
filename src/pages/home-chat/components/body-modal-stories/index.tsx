import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonToolbar,
} from '@ionic/react'
import { arrowBack } from 'ionicons/icons'
import Stories from 'react-insta-stories'
import { STORIES_VIEW } from '../../../../views/stories'

export const BodyModalStories: React.FC<{
    onDismiss: () => void
    type: 'call' | 'video'
}> = ({ onDismiss }) => {
    return (
        <>
            <IonHeader
                className="ion-no-border"
                style={{ background: 'rgb(17, 17, 17)' }}
            >
                <IonToolbar
                    color="none"
                    style={{ background: 'rgb(17, 17, 17)' }}
                >
                    <IonButtons color="light" onClick={onDismiss} slot="start">
                        <IonButton color="light">
                            <IonIcon color="light" icon={arrowBack}></IonIcon>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent style={{ '--background': 'rgb(17, 17, 17)' }}>
                <Stories
                    isPaused={true}
                    storyStyles={{ width: '100%', height: '100%' }}
                    stories={STORIES_VIEW as any}
                />
            </IonContent>
        </>
    )
}
