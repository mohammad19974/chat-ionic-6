import { IonContent, IonList, IonPage } from '@ionic/react'
import React, { useCallback, useState } from 'react'
import { HeaderMainPage } from '../../layout/header-main-page'
import { itemPeople } from '../../views/item-people'
import { STORIES_PROFILE } from '../../views/stories'
import { ItemAddStory } from './components/item-add-story'
import { ItemPeople } from './components/item-people'
import { SegmentMenu } from './components/segment-menu'
import { StoryGrid } from './components/stories-grid/index.'

const People: React.FC = () => {
    const [segment, setSegment] = useState('STORY')
    const onChangeMenu = useCallback((value: string) => {
        setSegment(value)
    }, [])

    return (
        <IonPage>
            <HeaderMainPage
                iconLast={
                    process.env.PUBLIC_URL + '/assets/svg/add-content.svg'
                }
                iconEnd={process.env.PUBLIC_URL + '/assets/svg/Requests.svg'}
                routeLink="/profile"
                title="People"
            />
            <SegmentMenu value={segment} onSelect={onChangeMenu} />
            <IonContent>
                <ItemAddStory />
                {segment === 'FRIENDS' ? (
                    <IonList>
                        {itemPeople.map((data, index) => {
                            return (
                                <ItemPeople
                                    key={index}
                                    name={data.name}
                                    isActive={data.isAvtive}
                                    pathImage={data.pathImage}
                                />
                            )
                        })}
                    </IonList>
                ) : (
                    <StoryGrid values={STORIES_PROFILE} />
                )}
            </IonContent>
        </IonPage>
    )
}
export default React.memo(People)
