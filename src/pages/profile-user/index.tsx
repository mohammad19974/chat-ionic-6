import { IonContent, IonPage } from '@ionic/react'
import { ImageCenter } from '../../components/image-center'

export const ProfileUser: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <ImageCenter
                    subTitle="Messanger"
                    srcImage={process.env.PUBLIC_URL + '/assets/image/Oval.png'}
                    name="Mohammaad"
                ></ImageCenter>
            </IonContent>
        </IonPage>
    )
}
