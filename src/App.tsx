import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'
/* Theme variables */
import './theme/variables.css'
import ChatRoom from './pages/chat-room'
import Tabs from './routes/tabs'
import Profile from './pages/profile'
import { ProfileUser } from './pages/profile-user'
setupIonicReact()
const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <Redirect path="/" to="/tab" exact />
                <Route path="/chat-room/:id" exact component={ChatRoom}></Route>
                <Route component={Profile} path="/Profile" exact></Route>
                <Route path="/profile/:id" component={ProfileUser} exact />
                <Route component={Tabs} path="/tab"></Route>
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
)

export default App
