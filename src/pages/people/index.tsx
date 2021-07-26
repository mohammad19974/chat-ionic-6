import { IonAvatar, IonContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/react'
import React from 'react'
import { SearchBar } from '../../components/search-bar'
import { HeaderMainPage } from '../../layout/header-main-page'
import { itemPeople } from '../../views/item-people'
import { ItemAddStory } from './components/item-add-story'
import { ItemPeople } from './components/item-people'

const People: React.FC = () => {
    



    return (<IonPage>
 <HeaderMainPage title="People" />
        <IonContent>
            <SearchBar />
            <ItemAddStory />
            <IonList>
                {itemPeople.map((data, index) => {
                    return <ItemPeople key={index} name={data.name} isActive={data.isAvtive} pathImage={ data.pathImage}/>
                })}
          
                </IonList>
        </IonContent>
    </IonPage>)
}
export default React.memo(People)