import { IonButtons, IonText } from '@ionic/react'
import React from 'react'
import { ReactSVG } from 'react-svg'
import { ITEM_OPTION_PROFILE_FRIENDS } from '../../../../views/profile'
import './style.scss'
export const ItemSetting: React.FC = () => {
    return (
        <div className="item-option-profile flex flex-center">
            {ITEM_OPTION_PROFILE_FRIENDS.map((data, index) => {
                return (
                    <div className="px-3 text-center">
                        <IonButtons>
                            <ReactSVG key={index} src={data.icon} />
                        </IonButtons>
                        <IonText className="text-title">{data.text}</IonText>
                    </div>
                )
            })}
        </div>
    )
}
