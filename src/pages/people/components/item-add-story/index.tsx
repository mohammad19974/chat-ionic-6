import { IonAvatar, IonItem, IonLabel } from "@ionic/react"

export const ItemAddStory: React.FC = () => {
    

    return(   <IonItem lines="none">
    <IonAvatar slot="start">
        <img src={ process.env.PUBLIC_URL+"/assets/svg/Group 6 (1).svg"}/>
    </IonAvatar>
    <IonLabel>
        <h4>Your Story</h4>
        <p>Add to your story</p>
    </IonLabel>
</IonItem>)
}