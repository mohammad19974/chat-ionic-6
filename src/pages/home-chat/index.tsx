import {
    IonButton,
    IonButtons,
    IonChip,
    IonContent,
    IonIcon,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonList,
    IonPage,
} from '@ionic/react'

import React from 'react'
import { ItemChat } from '../../components/item-chat'
import { SliderStories } from '../../components/slider-stories'
import { HeaderMainPage } from '../../layout/header-main-page'
import { itemChat, SLIDER_ITEM_OPTION } from '../../views/item-chat'
import { StoriesList } from '../../views/stories'
import { SearchBar } from '../../components/search-bar'

const HomeChat: React.FC = () => {
    return (
        <IonPage>
            <HeaderMainPage
                iconLast={
                    process.env.PUBLIC_URL + '/assets/svg/Take-a-Photo.svg'
                }
                iconEnd={process.env.PUBLIC_URL + '/assets/svg/NewMessage.svg'}
                routeLink="/profile"
                title="Chats"
            />
            <IonContent>
                <SearchBar />
                <SliderStories listStories={StoriesList} />
                <IonList>
                    {itemChat.map((data, index) => {
                        return (
                            <IonItemSliding>
                                {' '}
                                <ItemChat
                                    button={true}
                                    detail={false}
                                    lines={'none'}
                                    key={index}
                                    name={data.name}
                                    state={data.state}
                                    subTitle={data.subTitle}
                                    imageProfile={data.imageProfile}
                                />{' '}
                                <IonItemOptions side="start">
                                    {SLIDER_ITEM_OPTION.map((data) => {
                                        return (
                                            <IonButtons onClick={() => {}}>
                                                <IonButton
                                                    style={{
                                                        '--background':
                                                            data.background,
                                                        padding: '4px',
                                                    }}
                                                >
                                                    <IonIcon
                                                        slot="icon-only"
                                                        color={data.color}
                                                        icon={data.icon}
                                                    />
                                                </IonButton>
                                            </IonButtons>
                                        )
                                    })}
                                </IonItemOptions>
                            </IonItemSliding>
                        )
                    })}
                </IonList>
            </IonContent>
        </IonPage>
    )
}
export default React.memo(HomeChat)
