import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

import ConsultaCep from '../components/ConsultaCep';
import Geolocalização from '../components/Geolocalização';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Início</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <ConsultaCep />
        <Geolocalização />
      </IonContent>
    </IonPage>
  );
};

export default Home;
