import {
    IonAvatar,
    IonImg,
    IonItem,
    IonLabel,
    IonText,
    IonToggle,
} from '@ionic/react'
import React from 'react'
import './style.scss'
import { ItemMenuProps } from './props'
import { ReactSVG } from 'react-svg'
/** @param {string} srcImage icon
 * @param {string} title string title
 */
export const ItemMenu: React.FC<ItemMenuProps> = React.memo(
    ({
        srcImage,
        title,
        endText,
        isEvent,
        button,
        isIcon,
        detail,
        className,
        lines,
    }) => {
        return (
            <IonItem
                detail={detail && detail}
                lines={lines && lines}
                button={button}
                className={['item-menu-profile', className && className].join(
                    ' '
                )}
            >
                {isIcon ? (
                    <></>
                ) : (
                    <IonAvatar slot="start">
                        <IonImg src={srcImage}></IonImg>
                    </IonAvatar>
                )}
                <IonLabel slot={isIcon ? 'start' : ''} className="title">
                    {title}
                </IonLabel>
                {isIcon && !endText ? (
                    <span slot="end">
                        <ReactSVG src={srcImage}></ReactSVG>
                    </span>
                ) : isEvent ? (
                    <IonToggle></IonToggle>
                ) : (
                    endText && (
                        <IonText className="end-text" slot="end">
                            {endText}
                        </IonText>
                    )
                )}
            </IonItem>
        )
    }
)
