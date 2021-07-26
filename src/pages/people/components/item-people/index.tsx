import { IonAvatar, IonItem, IonLabel } from '@ionic/react'
import React from 'react'
import { ItemPeopleProps } from './props'
import './style.scss'
export const ItemPeople: React.FC<ItemPeopleProps> = React.memo(({name,pathImage,isActive}) => {
    


    return (<IonItem button detail={false} className={"item-people"}>
        <IonAvatar className="avtar" slot="start">
            <img src={pathImage}/>
        </IonAvatar>
        <IonLabel>
           {name}
        </IonLabel>
        
        <img src={process.env.PUBLIC_URL+"/assets/svg/Oval.svg"} />
    </IonItem>)
})