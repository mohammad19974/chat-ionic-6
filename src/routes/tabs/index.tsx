import React from 'react'
import {
    IonApp,
    IonBadge,
    IonIcon,
    IonLabel,
    IonRoute,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
  } from "@ionic/react";
import HomeChat from '../../pages/home-chat';
import { Redirect, Route } from 'react-router';
import People from '../../pages/people';
import { chatbubblesSharp, peopleSharp } from 'ionicons/icons';

const Tabs: React.FC = () => {
    


    return( 
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab/home">
              <HomeChat />
            </Route>
            <Route exact path="/tab/people">
              <People />
            </Route>
           
            <Route exact path="/tab">
              <Redirect to="/tab/home"></Redirect>
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/tab/home">
              <IonIcon icon={chatbubblesSharp} />
              <IonLabel>Chat</IonLabel>
              <IonBadge color="danger">4</IonBadge>
            </IonTabButton>
            <IonTabButton tab="people" href="/tab/people">
              <IonIcon icon={peopleSharp} />
  
              <IonLabel>People</IonLabel>
            </IonTabButton>
          </IonTabBar>
          </IonTabs>)
}
export default Tabs